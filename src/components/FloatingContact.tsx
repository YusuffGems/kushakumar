
import { MessageCircle, Phone } from "lucide-react";


const WA_NUMBER = "917353680966";
const PHONE_NUMBER = "+917353680966";

const WA_MESSAGE =
  "Hi Kusha, I saw your portfolio and would love to connect.";


export const whatsappLink = (msg: string = WA_MESSAGE) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export function FloatingContact() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-4">
      
      {/* Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-2xl animate-bounce-slow"
        style={{
          background: "linear-gradient(135deg,#3B82F6,#2563EB)",
        }}
      >
        {/* Glow */}
        <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" />

        {/* Icon */}
        <Phone className="relative z-10 size-6 group-hover:rotate-12 transition duration-300" />

        {/* Tooltip */}
        <span className="absolute right-16 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-2xl animate-bounce-slow-delay"
        style={{
          background: "linear-gradient(135deg,#25D366,#128C7E)",
        }}
      >
        {/* Glow */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />

        {/* Icon */}
        <MessageCircle className="relative z-10 size-6 group-hover:scale-110 transition duration-300" />

        {/* Tooltip */}
        <span className="absolute right-16 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 group size-14 rounded-full grid place-items-center text-white shadow-2xl shadow-emerald-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 transition hover:-translate-y-0.5"
      style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
    >
      <span className="absolute inset-0 rounded-full motion-safe:animate-ping bg-emerald-400/40" aria-hidden />
      <MessageCircle className="size-6 relative" />
    </a>

