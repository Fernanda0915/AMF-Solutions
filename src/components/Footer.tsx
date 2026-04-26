import { Mail, Phone, MapPin } from "lucide-react";
import logon from "@/assets/nuevo-logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-6">

        {/* Top */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Logo + frase */}
          <div className="flex items-center gap-4">
            <img
              src={logon}
              alt="AMF Solutions"
              className="h-18 w-auto rounded "
            />

            <p className="text-xs md:text-sm lg:text-base text-white/70 max-w-xs leading-snug">
              Soluciones industriales y logísticas para optimizar tu operación.

            </p>
          </div>

          {/* Contacto horizontal */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm lg:text-base text-white/70">

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-orange-accent" />
              <a
                href="mailto:ventas@amfsolutions.mx"
                className="hover:text-orange-accent transition"
              >
                ventas@amfsolutions.mx
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-orange-accent" />
              <a
                href="tel:+526642137845"
                className="hover:text-orange-accent transition"
              >
                664 213 7845
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-accent" />
              <span>Tijuana, B.C.</span>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 border-t border-white/10 pt-4 flex flex-col gap-2 text-center md:flex-row md:justify-between md:text-left">

          <p className="text-[11px] md:text-xs text-white/50">
            © {new Date().getFullYear()} AMF Solutions
          </p>

          <p className="text-[11px] md:text-xs text-white/50">
            Agilidad en Materiales · Suministro Industrial & Logística
          </p>

        </div>
      </div>
    </footer>
  );
}