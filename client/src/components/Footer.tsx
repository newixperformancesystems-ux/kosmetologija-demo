import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Kosmetologija Premium</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Profesionali kosmetologijos meistrė, skirta jūsų odos grožiui ir sveikatai. Naudojame tik geriausias medžiagas ir šiuolaikines technologijas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Nuorodos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-white/80 hover:text-primary transition-colors">Paslaugos</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-primary transition-colors">Galerija</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-primary transition-colors">Kontaktai</a></li>
              <li><a href="#booking" className="text-white/80 hover:text-primary transition-colors">Rezervacija</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4">Kontaktai</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+37060000000" className="text-white/80 hover:text-primary transition-colors">+370 600 00 000</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@kosmetologija.lt" className="text-white/80 hover:text-primary transition-colors">info@kosmetologija.lt</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-white/80">Vilnius, Lietuva</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8 flex items-center justify-between">
          <p className="text-white/60 text-sm">© 2026 Kosmetologija Premium. Visos teisės saugomos.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
