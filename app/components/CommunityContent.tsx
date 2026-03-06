export default function CommunityContent() {
  return (
    <div className="pt-32 pb-24 bg-parchment min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-paper-texture opacity-60 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="font-hand text-4xl text-terracotta inline-block mb-6 -rotate-2">
          Coming Soon...
        </span>
        <h1 className="font-serif text-6xl md:text-7xl text-ink mb-8">Our Community</h1>
        <p className="font-serif text-xl text-ink/70 italic leading-relaxed">
          &quot;This section will be a space to share stories, guestbook entries, and tales from the farm.&quot;
        </p>
        
        <div className="mt-16 bg-white p-8 shadow-polaroid transform rotate-1 rough-edge inline-block text-left">
          <div className="absolute -top-4 w-24 h-8 bg-yellow-100/50 transform -rotate-3 z-20 backdrop-blur-sm shadow-sm" />
          <p className="font-hand text-xl text-ink/80">
            Note: Need to add community content here later. Maybe showcase some reviews and stories left behind by families.
          </p>
        </div>
      </div>
    </div>
  );
}
