import { useState, useEffect } from 'react';
import { Star, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Cal.com konfigūracija
const CAL_USERNAME = 'kosmostudio';
const CAL_EVENT_TYPES = {
  konsultacija: 'konsultacija',       // 30min
  valymas: 'veido-valymas',           // 60min → rodome kaip 1val 30min
  extra: 'veido-valymas-extra',       // 90min → rodome kaip 2val
};

const heroImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663521790732/H6h3DFAC5oGrg4e2N8kyZS/hero-facial-spa-CUKgT4HdYhjNQZ9zrH83K2.webp';
const procedureImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663521790732/H6h3DFAC5oGrg4e2N8kyZS/facial-procedure-close-up-jWyZy3TPM9VtLYcpaAHfgX.webp';
const productsImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663521790732/H6h3DFAC5oGrg4e2N8kyZS/spa-products-aesthetic-mFgkUaH6zMMf5RZfiX9PUo.webp';
const beforeAfterImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663521790732/H6h3DFAC5oGrg4e2N8kyZS/before-after-facial-d8TSKV7a9MPTKqEGgCESrb.webp';
const galleryBeforeAfter1 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663521790732/H6h3DFAC5oGrg4e2N8kyZS/gallery-before-after-1_79cdc9c6.jpg';
const galleryBeforeAfter2 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663521790732/H6h3DFAC5oGrg4e2N8kyZS/gallery-before-after-2_b0e545e3.jpg';
const serviceFacialTreatment = '/cleansing.jpg';
const serviceHydration = '/hydration.webp';
const serviceAntiAging = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663521790732/H6h3DFAC5oGrg4e2N8kyZS/service-anti-aging_12fab4cc.jpg';
const serviceDeepCleanse = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663521790732/H6h3DFAC5oGrg4e2N8kyZS/service-deep-cleanse_a4865812.jpg';
const serviceConsultation = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663521790732/H6h3DFAC5oGrg4e2N8kyZS/service-consultation_6b5f33ba.jpg';

// Kainoraštas su event type priskyrimas
const pricelist = [
  {
    id: 1,
    title: 'Konsultacija',
    duration: '30 min',
    price: 50,
    description: 'Individuali odos analizė ir geriausios procedūros rekomendacija',
    eventType: CAL_EVENT_TYPES.konsultacija,
  },
  {
    id: 2,
    title: 'Mechaninis veido valymas',
    duration: '1 val 30 min',
    price: 70,
    description: 'Profesionali mechaninio valymo procedūra',
    eventType: CAL_EVENT_TYPES.extra,
  },
  {
    id: 3,
    title: 'Ultragarsinis veido valymas',
    duration: '1 val',
    price: 70,
    description: 'Šiuolaikiška ultragarsinio valymo technologija',
    eventType: CAL_EVENT_TYPES.valymas,
  },
  {
    id: 4,
    title: 'Mechaninis + rūgštimis veido valymas',
    duration: '1 val 30 min',
    price: 70,
    description: 'Kombinuota procedūra maksimaliam rezultatui',
    eventType: CAL_EVENT_TYPES.extra,
  },
  {
    id: 5,
    title: 'Mechaninis + ultragarsinis veido valymas',
    duration: '1 val 30 min',
    price: 70,
    description: 'Dviguba valymo technologija',
    eventType: CAL_EVENT_TYPES.extra,
  },
  {
    id: 6,
    title: 'Mechaninis + ultragarsinis + rūgštimis veido valymas',
    duration: '1 val 30 min',
    price: 70,
    description: 'Kompleksinė veido valymo procedūra',
    eventType: CAL_EVENT_TYPES.extra,
  },
  {
    id: 7,
    title: 'Veido odos procedūra pagal jos poreikius',
    duration: '1 val 30 min',
    price: 70,
    description: 'Individualizuota procedūra jūsų odos tipui',
    eventType: CAL_EVENT_TYPES.extra,
  },
  {
    id: 8,
    title: 'Veido odos drėkinimas / maitinimas',
    duration: '1 val',
    price: 70,
    description: 'Intensyvi hidratacija ir maitinimas',
    eventType: CAL_EVENT_TYPES.valymas,
  },
  {
    id: 9,
    title: 'Konsultacija + veido valymas',
    duration: '1 val 30 min',
    price: 80,
    description: 'Kompleksinė procedūra su konsultacija',
    eventType: CAL_EVENT_TYPES.extra,
  },
];

const services = [
  {
    id: 1,
    title: 'Veido valymas',
    description: 'Profesionali veido valymo procedūra, skirta pašalinti nešvarumams ir atgaivinti odą.',
    icon: '✨',
    image: serviceFacialTreatment,
  },
  {
    id: 2,
    title: 'Hidratacija',
    description: 'Intensyvi odos drėkinimo procedūra su premium serumais ir kaukėmis.',
    icon: '💧',
    image: serviceHydration,
  },
  {
    id: 3,
    title: 'Anti-aging procedūros',
    description: 'Procedūros, skirtos sumažinti raukšles ir atgaivinti odos elastingumą.',
    icon: '✨',
    image: serviceAntiAging,
  },
  {
    id: 4,
    title: 'Akių zona',
    description: 'Specialios procedūros akių zonai, skirtos sumažinti tamsias dėmes ir patinimą.',
    icon: '👁️',
    image: serviceDeepCleanse,
  },
  {
    id: 5,
    title: 'Burnos zona',
    description: 'Intensyvi procedūra burnos zonai, skirta suteikti jaunystės ženklus.',
    icon: '💋',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663521790732/H6h3DFAC5oGrg4e2N8kyZS/service-facial-treatment_b41ba2d1.jpg',
  },
  {
    id: 6,
    title: 'Konsultacija',
    description: 'Individuali konsultacija apie jūsų odos poreikius. Visiškai nemokama.',
    icon: '💬',
    image: serviceConsultation,
  },
];

const testimonials = [
  { name: 'Laima', text: 'Nuo pirmos procedūros pastebėjau didelį skirtumą. Mano oda dabar žvaigždi ir sveika. Labai rekomenduoju!', rating: 5 },
  { name: 'Rasa', text: 'Profesionali meistrė, šilta atmosfera ir puikūs rezultatai. Jau 6 mėnesius einu pas ją ir labai patenkinta.', rating: 5 },
  { name: 'Kristina', text: 'Geriausios kosmetologijos procedūros, kurias esu turėjusi. Visada jaučiuosi puikiai po vizito.', rating: 5 },
];

// Cal.com embed komponentas
function CalEmbed({ eventType, serviceName, onClose }: { eventType: string; serviceName: string; onClose: () => void }) {
  useEffect(() => {
    // Uždaryti paspaudus Escape
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const calUrl = `https://book.inovita.lt/${CAL_USERNAME}/${eventType}?name=&notes=${encodeURIComponent(serviceName)}&defaultBookingAttendeeCountry=LT`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-primary/20">
          <div>
            <h3 className="font-serif font-bold text-lg text-foreground">Rezervuoti procedūrą</h3>
            <p className="text-sm text-foreground/60">{serviceName}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors text-foreground/60 hover:text-foreground text-lg font-bold"
          >
            ×
          </button>
        </div>

        {/* Cal.com iframe */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={calUrl}
            className="w-full h-full"
            style={{ minHeight: '600px', border: 'none' }}
            title={`Rezervacija: ${serviceName}`}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [calEmbed, setCalEmbed] = useState<{ eventType: string; serviceName: string } | null>(null);

  const openCal = (eventType: string, serviceName: string) => {
    setCalEmbed({ eventType, serviceName });
    document.body.style.overflow = 'hidden';
  };

  const closeCal = () => {
    setCalEmbed(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Cal.com Modal */}
      {calEmbed && (
        <CalEmbed
          eventType={calEmbed.eventType}
          serviceName={calEmbed.serviceName}
          onClose={closeCal}
        />
      )}

      <main className="flex-1">
        {/* Hero */}
        <section
          id="home"
          className="relative h-screen flex items-center justify-center overflow-hidden"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Jūsų oda nusipelnija prabangos
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Premium kosmetologijos procedūros, skirtos jūsų odos grožiui ir sveikatai
            </p>
            <button
              onClick={() => document.getElementById('pricelist')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg font-medium text-lg"
            >
              Rezervuoti procedūrą
            </button>
          </div>
        </section>

        {/* Apie */}
        <section id="about" className="py-20 bg-secondary">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">Apie mane</h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  Aš esu profesionali kosmetologijos meistrė su daugiau nei 10 metų patirtimi. Mano tikslas – padėti jums pasijusti gražiai ir pasitikinti savimi.
                </p>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Naudoju tik geriausias, sertifikuotas medžiagas ir šiuolaikines technologijas, kad garantuočiau jums saugiausias ir efektyviausias procedūras.
                </p>
                <div className="space-y-3">
                  {['Sertifikuota kosmetologė', '10+ metų patirtis', 'Premium medžiagos', 'Individualizuotas požiūris'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check size={20} className="text-primary" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img src={procedureImage} alt="Apie mane" className="rounded-2xl shadow-xl w-full h-96 object-cover" />
            </div>
          </div>
        </section>

        {/* Paslaugos */}
        <section id="services" className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Mūsų paslaugos</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Profesionalios kosmetologijos procedūros, skirtos jūsų odos poreikiams</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/10 bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kainoraštas */}
        <section id="pricelist" className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Kainoraštas</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Pasirinkite procedūrą ir rezervuokite laiką internetu</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricelist.map((service) => (
                <div key={service.id} className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/10">
                  <h3 className="text-xl font-serif font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-6 py-4 border-t border-primary/10 border-b">
                    <div>
                      <p className="text-sm text-foreground/60">Trukmė</p>
                      <p className="font-medium text-foreground">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-foreground/60">Kaina</p>
                      <span className="text-2xl font-serif font-bold text-primary">{service.price}€</span>
                    </div>
                  </div>
                  <button
                    onClick={() => openCal(service.eventType, service.title)}
                    className="w-full text-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 font-medium text-sm group-hover:shadow-lg"
                  >
                    Rezervuoti
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galerija */}
        <section id="gallery" className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Mūsų darbai</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Prieš ir po – tikri mūsų procedūrų rezultatai</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[galleryBeforeAfter1, galleryBeforeAfter2, beforeAfterImage, productsImage].map((img, i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <img src={img} alt={`Galerija ${i + 1}`} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Atsiliepimai */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Klientų atsiliepimai</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-primary/10 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={20} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic leading-relaxed">"{t.text}"</p>
                  <p className="font-serif font-bold text-foreground">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kontaktai */}
        <section id="contact" className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Kontaktai</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-8 text-foreground">Susisiekite su mumis</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-serif font-bold text-foreground mb-2">Telefonas</p>
                    <a href="tel:+37060000000" className="text-primary hover:text-primary/80 transition-colors text-lg">+370 600 00 000</a>
                  </div>
                  <div>
                    <p className="font-serif font-bold text-foreground mb-2">El. paštas</p>
                    <a href="mailto:info@kosmetologija.lt" className="text-primary hover:text-primary/80 transition-colors text-lg">info@kosmetologija.lt</a>
                  </div>
                  <div>
                    <p className="font-serif font-bold text-foreground mb-2">Adresas</p>
                    <p className="text-foreground/80 text-lg">Vilnius, Naujamiestis, Lietuva</p>
                  </div>
                  <div>
                    <p className="font-serif font-bold text-foreground mb-2">Darbo laikas</p>
                    <div className="space-y-1 text-foreground/80">
                      <p>Pirmadienis – Penktadienis: 9:00 – 18:00</p>
                      <p>Šeštadienis – Sekmadienis: Uždaryta</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl shadow-xl overflow-hidden w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.5520253769876!2d25.27!3d54.6872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94c9c6b5b5b5%3A0x1234567890abcdef!2sVilnius%20Naujamiestis!5e0!3m2!1sen!2slt!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
