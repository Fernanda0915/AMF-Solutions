// Floating WhatsApp contact button — visible on every page
export function WhatsAppFab() {
  const phone = "526642137845";
  const message = encodeURIComponent(
    "Hola AMF Solutions, me gustaría solicitar una cotización."
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-smooth hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.21c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.1-.41-2.1-1.3-.78-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.59-1.42-.81-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.18 0 1.29.94 2.53 1.07 2.7.13.17 1.84 2.81 4.46 3.94.62.27 1.11.43 1.49.55.62.2 1.19.17 1.64.1.5-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3zM16.02 4C9.39 4 4 9.39 4 16.02c0 2.12.55 4.18 1.6 6L4 28l6.18-1.62a11.97 11.97 0 0 0 5.84 1.49h.01c6.62 0 12.01-5.39 12.01-12.02C28.04 9.39 22.65 4 16.02 4z" />
      </svg>
    </a>
  );
}
