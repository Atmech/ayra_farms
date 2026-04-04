"use client";

import * as React from "react";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useEffect, useRef } from "react";

export function DateRangePicker({
  date,
  setDate,
  className = "",
}: {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close calendar click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent border-b border-ink/30 py-3 text-ink focus:border-terracotta focus:outline-none font-sans text-lg transition-colors flex items-center justify-between group"
      >
        <div className="flex items-center gap-3 w-full">
          <span className="material-symbols-outlined text-ink/50 group-hover:text-terracotta transition-colors">
            calendar_today
          </span>
          <span className="truncate">
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} – {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span className="text-ink/40">Select Check-in and Check-out</span>
            )}
          </span>
        </div>
        {date?.from && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setDate(undefined);
            }}
            className="p-1 text-ink/40 hover:text-terracotta hover:bg-forest/5 rounded-full transition-colors flex items-center justify-center shrink-0"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-[100] mt-2 bg-paper-white shadow-polaroid p-6 border border-ink/10 rough-edge relative max-w-[100vw] overflow-y-auto max-h-[80vh] md:max-h-auto">
          <DayPicker
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(range) => {
              setDate(range);
            }}
            numberOfMonths={typeof window !== "undefined" && window.innerWidth > 768 ? 2 : 1}
            // Only apply specific color overrides, let the default CSS handle the grid layout
            modifiersClassNames={{
              selected: "rdp-selected-custom",
              range_start: "rdp-range-start-custom",
              range_end: "rdp-range-end-custom",
              range_middle: "rdp-range-middle-custom",
              today: "rdp-today-custom",
            }}
          />
        </div>
      )}
      <style jsx global>{`
        .rdp {
          --rdp-cell-size: 40px;
          --rdp-accent-color: #3b5042;
          --rdp-background-color: rgba(59, 80, 66, 0.1);
          --rdp-accent-color-dark: #2a3a30;
          --rdp-background-color-dark: rgba(59, 80, 66, 0.2);
          --rdp-outline: 2px solid var(--rdp-accent-color);
          --rdp-outline-selected: 2px solid rgba(0, 0, 0, 0.5);
          margin: 0;
          font-family: inherit;
          color: #2c3e50;
        }

        .rdp-caption_label {
          font-family: "Playfair Display", serif;
          font-size: 1.25rem;
          font-style: italic;
        }

        .rdp-head_cell {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(44, 62, 80, 0.5);
          font-weight: normal;
        }

        .rdp-day {
          border-radius: 0;
          transition: all 0.2s ease;
        }

        .rdp-day:hover:not(.rdp-day_outside) {
          background-color: rgba(59, 80, 66, 0.05);
          color: #C07A58;
        }

        .rdp-selected-custom {
          font-weight: bold;
        }

        .rdp-range-start-custom,
        .rdp-range-end-custom {
          background-color: #3b5042 !important;
          color: white !important;
        }

        .rdp-range-start-custom {
          border-radius: 4px 0 0 4px !important;
        }

        .rdp-range-end-custom {
          border-radius: 0 4px 4px 0 !important;
        }

        .rdp-range-middle-custom {
          background-color: rgba(59, 80, 66, 0.1) !important;
          color: #2c3e50 !important;
          border-radius: 0 !important;
        }

        .rdp-today-custom {
          color: #C07A58;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
