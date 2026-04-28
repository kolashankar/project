export default function StickyBar() {
  return (
    <a
      href="https://wa.me/918688009537?text=Hello%20I%20want%20admission%20details"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary text-[#030712] py-2.5 px-4 text-center text-sm md:text-base font-bold tracking-widest uppercase z-[60] relative flex items-center justify-center gap-3 cursor-pointer hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/20 block w-full"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
      </span>
      Admissions Open 2026 — Chat on WhatsApp Now
    </a>
  );
}
