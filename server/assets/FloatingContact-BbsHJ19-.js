import { jsxs, jsx } from "react/jsx-runtime";
import { Phone, MessageCircle } from "lucide-react";
const WA_NUMBER = "917353680966";
const PHONE_NUMBER = "+917353680966";
const WA_MESSAGE = "Hi Kusha, I saw your portfolio and would love to connect.";
const whatsappLink = (msg = WA_MESSAGE) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
function FloatingContact() {
  return /* @__PURE__ */ jsxs("div", { className: "fixed right-5 bottom-5 z-50 flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: `tel:${PHONE_NUMBER}`,
        className: "group relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-2xl animate-bounce-slow",
        style: {
          background: "linear-gradient(135deg,#3B82F6,#2563EB)"
        },
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-blue-500/40 animate-ping" }),
          /* @__PURE__ */ jsx(Phone, { className: "relative z-10 size-6 group-hover:rotate-12 transition duration-300" }),
          /* @__PURE__ */ jsx("span", { className: "absolute right-16 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none", children: "Call Now" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: whatsappLink(),
        target: "_blank",
        rel: "noreferrer",
        className: "group relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-2xl animate-bounce-slow-delay",
        style: {
          background: "linear-gradient(135deg,#25D366,#128C7E)"
        },
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" }),
          /* @__PURE__ */ jsx(MessageCircle, { className: "relative z-10 size-6 group-hover:scale-110 transition duration-300" }),
          /* @__PURE__ */ jsx("span", { className: "absolute right-16 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none", children: "WhatsApp" })
        ]
      }
    )
  ] });
}
export {
  FloatingContact as F,
  whatsappLink as w
};
