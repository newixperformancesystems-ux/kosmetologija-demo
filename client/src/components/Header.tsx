import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Pagrindinis', href: '#home' },
    { label: 'Paslaugos', href: '#services' },
    { label: 'Galerija', href: '#gallery' },
    { label: 'Apie mane', href: '#about' },
    { label: 'Kontaktai', href: '#contact' },
  ];

  return (
    <header className="bg-white border-b border-primary/20 sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">K</span>
          </div>
          <span className="font-serif font-bold text-xl text-foreground hidden sm:inline">Kosmetologija Premium</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#booking"
          className="hidden md:inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium text-sm"
        >
          Rezervuoti
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-primary/20 bg-secondary">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Rezervuoti
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
