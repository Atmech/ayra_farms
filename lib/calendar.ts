import { google } from "googleapis";

// Initialize the Google Calendar API
const SCOPES = ["https://www.googleapis.com/auth/calendar.events"];

const getAuth = () => {
  // Use service account credentials
  const credentials = {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    // Replace literal escaped \n with actual newlines if necessary
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  };

  return new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
  });
};

const calendar = google.calendar({ version: "v3" });

export async function checkConflicts(
  calendarId: string,
  checkIn: string,
  checkOut: string,
  space: string
): Promise<boolean> {
  const auth = getAuth();
  
  // Format the space name for search, e.g. "main-house" -> "Main House"
  const formattedSpace = space.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  try {
    const response = await calendar.events.list({
      auth,
      calendarId,
      timeMin: new Date(checkIn).toISOString(),
      // We assume check-out day is available for check-in by another guest,
      // but to be safe with all-day events, let's query up to the check-out date
      timeMax: new Date(checkOut).toISOString(),
      q: formattedSpace, // Search for the space name in the event
      singleEvents: true,
    });

    const events = response.data.items || [];
    
    // If any event is found in this timeframe discussing the same space, we assume conflict
    return events.length > 0;
  } catch (error) {
    console.error("Error checking calendar conflicts:", error);
    // Fail closed: if we can't check conflicts, don't allow booking to prevent double-booking
    throw new Error("Unable to verify calendar availability.");
  }
}

export type BookingData = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  space: string;
  adults: number;
  children: number;
  pets: string;
  notes: string;
};

export async function createBookingEvent(calendarId: string, data: BookingData) {
  const auth = getAuth();
  
  const formattedSpace = data.space.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const description = `
New Booking Inquiry!

Guest Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Space: ${formattedSpace}
Adults: ${data.adults}
Children: ${data.children}
Pets: ${data.pets}

Special Requests:
${data.notes || 'None'}
  `.trim();

  try {
    const response = await calendar.events.insert({
      auth,
      calendarId,
      requestBody: {
        summary: `⏳ Inquiry: ${data.name} — ${formattedSpace}`,
        description,
        start: {
          dateTime: `${data.checkIn}T12:00:00`,
          timeZone: "Asia/Kolkata",
        },
        end: {
          dateTime: `${data.checkOut}T12:00:00`,
          timeZone: "Asia/Kolkata",
        },
        colorId: "5",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating booking event:", error);
    throw new Error("Failed to create calendar event.");
  }
}
