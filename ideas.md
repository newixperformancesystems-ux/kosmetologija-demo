# Kosmetologijos Premium Svetainės Dizaino Brainstorm

## Pasirinkta Koncepcija: **Minimalist Luxury – Šviestas Elegancija**

Šis dizainas sujungia šiuolaikinę minimalizmą su prabangos jausmu, naudojant šviesius, smėlio ir aukso atspalvius. Svetainė skirta moterims, kurios vertina kokybę, profesionalizmą ir estetinę grožį.

### Design Movement
**Scandinavian Minimalism meets Luxury Wellness** – Šviestas, oro pilnas dizainas su subtiliais aukso akcentais ir natūraliais tekstūromis, primenant spa ir wellness atmosferą.

### Core Principles
1. **Whitespace as Elegance** – Ample spacing, clean layouts, breathing room between elements
2. **Warm Neutrality** – Smėlio, krem ir balti tonai su aukso akcentais, kurie suteikia prabangos jausmą
3. **Subtle Sophistication** – Minimali animacija, švelnūs šešėliai, natūralios tekstūros (lino, medžio imitacija)
4. **Accessibility & Clarity** – Didelės, skaitlios tipografijos, aiškūs call-to-action, lengva navigacija

### Color Philosophy
- **Pagrindinis fonas:** `#FAFAF8` (šiltas baltas, beveik krem)
- **Antrinė spalva:** `#F5EFE7` (smėlio/lino atspalvis)
- **Akcentas:** `#D4A574` (šiltas aukso/bronzos atspalvis)
- **Tamsus tekstas:** `#2C2C2C` (beveik juodas, ne gryna juoda)
- **Šviesi akcentinė spalva:** `#E8DCC8` (labai šviestas smėlis)

**Emocinis tikslas:** Šilta, priimanti, profesionali, prabanga be pretenzijų.

### Layout Paradigm
- **Hero sekcija:** Didelė, nuotrauka su subtiliu overlay, centruotas tekstas
- **Paslaugų sekcija:** Asimetrinis tinklelis (3 stulpeliai), kiekviena kortelė su nuotrauka ir aprašymu
- **Galerija:** Masonry layout su prieš/po nuotraukomis
- **Kontaktai:** Dvi kolonos – kairėje tekstas, dešinėje žemėlapis
- **Rezervacija:** Didelė CTA sekcija su Cal.com integracijos vieta

### Signature Elements
1. **Aukso linijos/divideriai** – Subtilios horizontalios linijos tarp sekcijų, `border-color: #D4A574`
2. **Nuotraukos su šešėliais** – Kiekviena nuotrauka turi švelnu šešėlį ir hover efektą (zoom + glow)
3. **Tipografijos kontrasto** – Serif šriftas antraštėms (elegancija), sans-serif tekstui (skaitomumas)

### Interaction Philosophy
- **Hover effects:** Kortelės šiek tiek pakyla (`translate-y-1`), šešėlis sustiprėja
- **Smooth transitions:** Visos animacijos 300-400ms, `ease-in-out`
- **Subtle feedback:** Nėra agresyvių animacijų, viskas švelnūs ir elegantūs

### Animation
- **Page load:** Elementai pasirodo iš viršaus su fade-in, staggered timing
- **Scroll animations:** Nuotraukos šiek tiek zoom'ina, kai jos pasirodo viewport'e
- **Hover:** Kortelės pakyla, šešėlis glow'ina, tekstas šiek tiek keičia spalvą į akcentą
- **CTA buttons:** Smooth color transition, subtle scale on hover

### Typography System
- **Display (H1, H2):** `Playfair Display` (serif, elegant, 48-64px)
- **Headings (H3, H4):** `Playfair Display` (serif, 24-36px)
- **Body text:** `Inter` (sans-serif, 16px, line-height: 1.6)
- **Small text/labels:** `Inter` (sans-serif, 12-14px, uppercase, letter-spacing: 0.05em)

**Hierarchy:** Serif for elegance, sans-serif for clarity. Strong contrast between display and body.

---

## Alternatyvos (Nepasirinktus)

### Variantas 1: **Warm Bohemian – Šilta ir Asimetriška** (7% tikimybė)
Rūdos, terrakota ir aukso spalvos su bohemian motyvais. Asimetrinis layout, didelės nuotraukos, daugiau tekstūros. Labiau „artsy" ir „creative", tačiau gali būti per daug šilta ir ne visai premium.

### Variantas 2: **Cool Minimalist – Šalta Elegancija** (3% tikimybė)
Pilka, balta, su tamsiais akcentais (tamsus žalias arba tamsus mėlynas). Labai minimalistinis, modernus, tačiau gali atrodyti per šalta ir ne tokia priimanti moterims, kurios ieško „šiltos" spa atmosferos.

---

## Implementacijos Nuorodas
- Šriftu naudoti Google Fonts: `Playfair Display` ir `Inter`
- Spalvos: Naudoti CSS variables `--primary: #D4A574`, `--sand: #F5EFE7` ir t.t.
- Nuotraukos: Premium, aukštos kokybės, natūralios (moterys, spa, procedūros)
- Responsive: Mobile-first, breakpoints: 640px, 1024px, 1280px
