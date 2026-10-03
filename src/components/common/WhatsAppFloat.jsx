import { LINKS } from "../../lib/links";

export default function WhatsAppFloat() {
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
      title="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 flex justify-center items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </a>
  );
}
