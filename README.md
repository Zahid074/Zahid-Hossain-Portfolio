# 🧠 Zahid Hossain — Personal Portfolio

[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify&logoColor=white)](https://netlify.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Sanity](https://img.shields.io/badge/CMS-Sanity-F03E2F?logo=sanity&logoColor=white)](https://www.sanity.io/)

> Personal portfolio website — fully dynamic and content-driven via **Sanity CMS**.
> Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **react-icons**.

---

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.js             # Root layout — fonts, metadata, global providers
│   ├── page.js                # Main page — renders all sections
│   └── globals.css            # Global styles & theme CSS variables
│
├── components/
│   ├── Navbar.js              # Sticky nav with smooth-scroll links
│   ├── Hero.js                 # Name, titles, CTA buttons, CV download
│   ├── About.js                 # About Me section
│   ├── ResearchInterests.js     # Research interest cards
│   ├── Education.js             # Academic timeline
│   ├── Experience.js            # Professional experience timeline
│   ├── Publications.js          # Publications listing
│   ├── OngoingResearch.js       # Ongoing research projects
│   ├── Skills.js                # Categorised skill chips
│   ├── ProjectCard.js           # Individual project card
│   ├── ProjectModal.js          # Full project detail modal
│   ├── Projects.js              # Recent & previous project grids
│   ├── Achievements.js          # Awards & extracurricular activities
│   ├── FAQ.js                   # FAQ accordion
│   ├── References.js            # Academic referees
│   ├── Contact.js               # Contact section
│   ├── Footer.js                 # Footer with social links
│   ├── ThemeToggle.js            # Dark/Light + accent colour switcher
│   ├── ParticleBackground.js     # Canvas-based constellation background
│   ├── CursorGlow.js              # Custom animated cursor glow
│   └── ScrollReveal.js            # Scroll-triggered reveal animations
│
├── lib/
│   ├── sanity.js               # Sanity client + image URL helper
│   ├── data.js                  # Fetches siteContent from Sanity
│   ├── cvGenerator.js           # Client-side ATS-friendly PDF generation (jsPDF)
│   ├── iconDetect.js            # Auto-detects brand icon from a URL
│   └── iconMap.js               # Icon name → component mapping
│
├── sanity-schema/
│   └── siteContent.js          # Full CMS schema (import into Sanity Studio)
│
├── public/                     # Static assets
├── netlify.toml                 # Netlify build config
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## ✨ Features

- 🗄️ **Fully data-driven** — every word, link, and image is fetched from **Sanity CMS**; nothing is hardcoded in the components
- 🌗 **Dark / Light Mode** toggle with smooth transitions, persisted in `localStorage`
- 🎨 **Theme Colour Picker** — Blue, Purple, Green accent options, persisted and applied via CSS variables
- 🖼️ **Auto-sliding Profile Slideshow** with crossfade animation (interval configurable from the CMS)
- 📄 **Smart CV button** — auto-generates an ATS-friendly PDF from live CMS data, or serves a manually uploaded PDF
- 🔗 **Auto-detected social icons** — drop in any URL and the correct brand icon (GitHub, LinkedIn, Kaggle, etc.) shows automatically
- 🖼️ **Project detail modal** with full bullet list, tags, and links to repo/live demo
- 💫 **Canvas-based particle background** — no external animation library
- 🖱️ **Custom animated cursor glow**
- 📱 **Fully responsive** across mobile, tablet, and desktop
- 🎯 **Glassmorphism** card design language throughout
- ❓ **FAQ accordion** with animated expand/collapse

---

## 🗂️ Sections

| Section | Description |
|---|---|
| **Hero** | Name, titles, contact info, and CTA buttons (CV download, social links) |
| **About Me** | Brief personal and professional background |
| **Research Interests** | Key research areas with icon cards |
| **Education** | Academic timeline |
| **Experience** | Professional timeline with organisation logos |
| **Publications** | Conference/journal paper listing |
| **Ongoing Research** | Current research work in progress |
| **Skills** | Categorised skill chips |
| **Projects** | Recent & previous project cards with tech stack, descriptions, and links |
| **Achievements** | Awards / scholarships and extracurricular activities |
| **FAQ** | Frequently Asked Questions accordion |
| **References** | Academic referees |
| **Contact** | Contact details and social links |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14 (App Router)** | React framework, routing, SSR |
| **Sanity CMS** | Headless content source for every section |
| **Tailwind CSS** | Styling, theming via CSS variables, dark mode |
| **react-icons** | Brand & UI icon library |
| **jsPDF** | Client-side auto CV/resume generation |
| **styled-components** | Component-level styling where needed |

---

## 🚀 Running Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
Create a `.env.local` file in the project root:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Start the dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Production build
```bash
npm run build
npm run start
```

---

## 🗄️ Managing Content

All content lives in **Sanity Studio** — nothing is hardcoded in the components. Import the schema at `sanity-schema/siteContent.js` into your Sanity Studio so the field names line up, then edit the single `siteContent` document to update any section. Emptying a section's `items` in Sanity makes that section disappear from the page automatically.

---

## ☁️ Deployment

The site is configured for **Netlify** (`netlify.toml`) with the official `@netlify/plugin-nextjs` plugin.

- Push to `main` to trigger an automatic redeploy.
- Remember to set the same `NEXT_PUBLIC_SANITY_*` environment variables in your Netlify site settings.

---

## 📬 Contact

| Channel | Details |
|---|---|
| **Email** | mohammad.zahid.hossain2@gmail.com |
| **LinkedIn** | [your-linkedin](https://www.linkedin.com/in/md-zahid-hossain-1806022b0) |
| **GitHub** | [your-github](https://github.com/Zahid074) |

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
Feel free to fork and adapt for your own portfolio — credit appreciated!

---

*© 2026 Zahid Hossain*
