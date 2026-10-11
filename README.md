# Gift (huomagift) — Personal Portfolio

> "I build AI products that solve Nigerian problems, and I ship them."

A bespoke, high-performance personal portfolio built for **Gift** (`huomagift`), software developer and tech entrepreneur based in Nigeria.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, with **Lenis smooth scrolling** and responsive dark/light organic transitions.

---

## 🛠️ Stack & Architecture

- **Framework:** Next.js 14 (App Router, Static Site Generation / SSG)
- **Styling:** Tailwind CSS with custom design tokens (Ink `#0E0E10`, Bone `#F4EFE6`, Warm Coral `#FF5A36`, Teal Accent `#2DD4BF`)
- **Typography:**
  - Display: **Syne** (ExtraBold 800)
  - Accent: **Instrument Serif** (Italic)
  - Body: **Familjen Grotesk**
  - Labels & Metadata: **DM Mono**
- **Motion & Interactions:**
  - Framer Motion for section reveals, staggered headlines, floating 3D blobs, and cursor tracking
  - Lenis for silky smooth momentum scrolling with `prefers-reduced-motion` compliance
  - Interactive custom cursor that subtly morphs and expands over clickable elements
- **Architecture:** 100% typed data files (`src/data/projects.ts`, `src/data/profile.ts`, `src/data/skills.ts`) for zero-touch component editing.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Test Production Bundle
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── public/
│   ├── projects/          # Vector SVG UI mockups & swappable project previews
│   │   ├── rights-compass.svg
│   │   ├── harvest-rescue.svg
│   │   ├── stuffswap.svg
│   │   ├── trackdem.svg
│   │   ├── artza.svg      # Slot for real screenshot of https://www.artzaworld.com
│   │   └── task-manager.svg
│   ├── personal.jpg       # Swappable hero photo/avatar slot
│   └── Gift_Amadi_Frontend_Developer_CV.pdf
├── src/
│   ├── app/
│   │   ├── globals.css    # Custom color tokens, film grain, ink-wash clouds
│   │   ├── layout.tsx     # Fonts, smooth scroll provider, SEO metadata
│   │   ├── page.tsx       # Homepage assembling dark & light sections
│   │   ├── projects/[slug]/page.tsx  # Dynamic project case study routes
│   │   ├── robots.ts      # Automated robots.txt generator
│   │   └── sitemap.ts     # Automated sitemap.xml generator
│   ├── components/
│   │   ├── Navbar.tsx     # Sticky hide/show navigation with social icons
│   │   ├── Hero.tsx       # Bold headline, status badge, floating 3D blobs
│   │   ├── ProjectsShowcase.tsx # Rights Compass flagship + asymmetric grid
│   │   ├── ProjectLinks.tsx     # Typed links with muted 'coming soon' chips
│   │   ├── About.tsx      # Tech-only background & Milestones strip
│   │   ├── SkillsSection.tsx    # Marquee strip + grouped honest stack
│   │   ├── Teaching.tsx   # Structured 8-week mentorship program
│   │   ├── ContactFooter.tsx    # Working contact form & direct channels
│   │   ├── motion/
│   │   │   ├── CustomCursor.tsx # Interactive morphing cursor
│   │   │   └── SmoothScroll.tsx # Lenis integration
│   │   └── ui/
│   │       └── SectionDividers.tsx # Sculptural curved dark/light transitions
│   ├── data/
│   │   ├── profile.ts     # Gift's source-of-truth profile & tech background
│   │   ├── projects.ts    # The 6 projects with typed facts & links
│   │   └── skills.ts      # Strictly authorized engineering skills
│   └── types/
│       └── index.ts       # TypeScript definitions
```

---

## ⚙️ Environment Variables (Optional)

Create a `.env.local` file to customize:

```env
# Optional: Set your direct public contact email (if empty, the email line is hidden)
NEXT_PUBLIC_CONTACT_EMAIL=yourname@example.com

# Optional: Formspree or custom form endpoint
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

---

## 🚢 Deploying to Vercel (Zero Config)

This repository is ready for immediate deployment to Vercel:

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete personal portfolio website"
   git push origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep default settings (Framework Preset: **Next.js**).
4. Add environment variables if desired (`NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_FORMSPREE_ENDPOINT`).
5. Click **Deploy**.