<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6D28D9,100:2563EB&height=200&section=header&text=Zahid%20Hossain&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Personal%20Portfolio%20%E2%80%94%20CSE%20Undergraduate%20%40%20EWU&descAlignY=58&descSize=18" width="100%"/>

<a href="https://zahid-protfolio.netlify.app/">
  <img src="https://readme-typing-svg.demolab.com/?lines=Full-Stack+Software+Developer;Machine+Learning+%26+Computer+Vision+Enthusiast;Building+Systems+That+Create+Real+Impact;Welcome+to+My+Portfolio+%F0%9F%91%8B&font=Fira+Code&center=true&width=560&height=45&duration=3000&pause=800&color=6D28D9&vCenter=true&size=22" alt="Typing SVG" />
</a>

<br/>

[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Sanity](https://img.shields.io/badge/CMS-Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io/)

<br/>

**[🌐 Live Site](https://zahid-protfolio.netlify.app/) · [📧 Email](mailto:mohammad.zahid.hossain2@gmail.com) · [💼 LinkedIn](https://www.linkedin.com/in/md-zahid-hossain-1806022b0) · [🐙 GitHub](https://github.com/Zahid074)**

</div>

<br/>

> A fully dynamic, content-driven personal portfolio — **nothing is hardcoded**. Every word, image, and link is pulled live from **Sanity CMS**, styled with **Tailwind CSS**, and rendered with **Next.js 14 (App Router)**.

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">
</div>

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

<table>
<tr>
<td width="50%" valign="top">

- 🗄️ **Fully data-driven** — every word, link, and image is fetched from **Sanity CMS**
- 🌗 **Dark / Light Mode** toggle with smooth transitions, persisted in `localStorage`
- 🎨 **Theme Colour Picker** — Blue, Purple, Green accents, applied via CSS variables
- 🖼️ **Auto-sliding Profile Slideshow** with crossfade animation
- 📄 **Smart CV button** — auto-generates an ATS-friendly PDF from live CMS data

</td>
<td width="50%" valign="top">

- 🔗 **Auto-detected social icons** — drop in any URL, the right brand icon appears
- 🖼️ **Project detail modal** with bullet list, tags, and repo/live links
- 💫 **Canvas-based particle background** — zero external animation library
- 🖱️ **Custom animated cursor glow**
- 📱 **Fully responsive** · 🎯 **Glassmorphism** design · ❓ **Animated FAQ accordion**

</td>
</tr>
</table>

---

## 🗂️ Sections

<div align="center">

| Section | Description |
|:---|:---|
| 🏠 **Hero** | Name, titles, contact info, and CTA buttons (CV download, social links) |
| 👤 **About Me** | Brief personal and professional background |
| 🎓 **Education** | Academic timeline (SSC → HSC → BSc) |
| 💼 **Experience** | Professional timeline with organisation logos |
| 🔬 **Ongoing Research** | Current research work in progress |
| 🛠️ **Skills** | Categorised skill chips — Programming, Tools, ML/DL, Web |
| 🚀 **Projects** | Recent & previous project cards with tech stack, descriptions, links |
| 🏆 **Achievements** | Awards / scholarships and extracurricular activities |
| ❓ **FAQ** | Frequently Asked Questions accordion |
| 📬 **Contact** | Email and WhatsApp contact with social links |

</div>

---

## 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Sanity](https://img.shields.io/badge/Sanity_CMS-F03E2F?style=flat-square&logo=sanity&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![jsPDF](https://img.shields.io/badge/jsPDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)

</div>

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

<details open>
<summary><b>1️⃣ Install dependencies</b></summary>

```bash
npm install
```
</details>

<details open>
<summary><b>2️⃣ Set up environment variables</b></summary>

Create a `.env.local` file in the project root:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```
</details>

<details open>
<summary><b>3️⃣ Start the dev server</b></summary>

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) 🎉
</details>

<details>
<summary><b>4️⃣ Production build</b></summary>

```bash
npm run build
npm run start
```
</details>

---

## 🗄️ Managing Content

All content lives in **Sanity Studio** — nothing is hardcoded in the components. Import the schema at `sanity-schema/siteContent.js` into your Sanity Studio so the field names line up, then edit the single `siteContent` document to update any section. Emptying a section's `items` in Sanity makes that section disappear from the page automatically.

---

## ☁️ Deployment

The site is configured for **Netlify** (`netlify.toml`) with the official `@netlify/plugin-nextjs` plugin.

- Push to `main` to trigger an automatic redeploy.
- Remember to set the same `NEXT_PUBLIC_SANITY_*` environment variables in your Netlify site settings.

<div align="center">

### 🚀 [**Production URL — Live Site**](https://zahid-protfolio.netlify.app/)

</div>

---

## 📬 Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-mohammad.zahid.hossain2%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mohammad.zahid.hossain2@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/md-zahid-hossain-1806022b0)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Zahid074)

</div>

---

## 📄 License

This project is open-source under the **[MIT License](LICENSE)**.
Feel free to fork and adapt for your own portfolio — credit appreciated! ⭐

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563EB,100:6D28D9&height=100&section=footer" width="100%"/>

*© 2026 Zahid Hossain — Built with 💙 and lots of ☕*

</div>
