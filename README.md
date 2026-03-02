# Guruprasath M — Portfolio (Next.js + Neubrutalism)

A bold, distinctive portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and pure neubrutalist design principles.

## ✦ Design Philosophy

- Hard black borders (3px solid) everywhere
- Raw box shadows (no blur — offset only: `4px 4px 0 #0D0D0D`)
- Flat, bold color palette: Yellow, Blue, Red, Green, Purple
- `Unbounded` display font + `Space Mono` body
- Custom cursor, marquee strip, typewriter effect
- Zero gradients, zero border-radius, maximum attitude

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

## 📁 Structure

```
app/
├── components/
│   ├── Cursor.tsx        # Custom cursor
│   ├── Navbar.tsx        # Fixed nav with mobile menu
│   ├── Hero.tsx          # Landing + typewriter effect
│   ├── Skills.tsx        # Tech stack grid
│   ├── Projects.tsx      # Project cards
│   ├── Experience.tsx    # Work experience
│   ├── Education.tsx     # Academic credentials
│   ├── Achievements.tsx  # Awards & soft skills
│   └── Contact.tsx       # Social links + CTA
├── data.ts               # All portfolio content (edit here)
├── globals.css           # Custom CSS + animations
├── layout.tsx            # Root layout + metadata
└── page.tsx              # Main page assembler
```

## ✏️ Customization

Edit **`app/data.ts`** to update:
- Personal info, links, email, phone
- Projects, experience, education
- Skills, achievements, certifications

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import at [vercel.com](https://vercel.com).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (optional, imported but available)
- **Space Mono + Unbounded** fonts via Google Fonts
"# guru-portfolio" 
