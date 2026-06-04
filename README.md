# 🎤 InterviewGPT — AI-Powered Interview Practice Landing Page

> A stunning, fully-responsive landing page for **InterviewGPT** — an AI mock interview platform that helps candidates practice, improve, and land their dream jobs.


---

## 🚀 Live Demo

🌍 **[https://interview-gpt-jade.vercel.app](https://interview-gpt-jade.vercel.app)**

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Dark Glassmorphism UI** | Deep dark theme with glass-effect cards and frosted nav |
| ✨ **Shimmer Gradient Text** | Animated purple→cyan shimmer on the hero headline |
| 🌊 **Particle Canvas** | Interactive connected-particle background in the hero |
| 🫧 **Floating Orbs** | Smooth drifting gradient blobs with `floatOrb` keyframes |
| 📊 **Animated Counters** | Stats count up when scrolled into view |
| 🃏 **3D Card Tilt** | Feature cards tilt on hover with dynamic light-shine overlay |
| 🏷️ **Infinite Marquee** | Scrolling trust strip of company names (pauses on hover) |
| 🎇 **Cursor Trail** | 8-dot fading particle trail follows the cursor |
| 📈 **Scroll Progress Bar** | Glowing gradient progress bar at top of viewport |
| 📱 **Mobile Hamburger Menu** | Fullscreen overlay menu with animated X transition |
| 🔝 **Back-to-Top Button** | Appears after 400px scroll, smooth scroll to top |
| ❓ **Accordion FAQ** | Single-open accordion with arrow rotation animation |
| 🎬 **Scroll Reveal** | Elements fade + slide in on intersection |
| 💬 **Live Demo Chat** | Hero demo cycles AI/user interview phrases every 5s |

---

## 📁 Project Structure

```
interviewgpt-landing/
├── index.html          # Main HTML — clean, semantic, linked to CSS/JS
├── css/
│   └── style.css       # All styles: design tokens, layout, animations, responsive
├── js/
│   └── main.js         # All JavaScript: particles, counters, tilt, cursor, nav
├── assets/
│   └── preview.png     # (Optional) OG/preview image
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **Vanilla CSS** — Custom properties (design tokens), animations, responsive grid
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Google Fonts** — [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans)

---

## 📦 Getting Started

### Option 1 — Open directly in browser

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/interviewgpt-landing.git
cd interviewgpt-landing

# Open in browser
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

### Option 2 — Local dev server (recommended)

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js (npx)
npx serve .

# Then open → http://localhost:8080
```

---

## 🌐 Deployment

This project is deployed on **[Vercel](https://vercel.com)**.

🌍 Live at: **[https://interview-gpt-jade.vercel.app](https://interview-gpt-jade.vercel.app)**

To deploy your own fork:
1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Vercel auto-detects the static site — click **Deploy**
4. Your site will be live at your own Vercel URL

---

## 🎨 Customization

### Colors & Design Tokens

All colors are CSS custom properties in `css/style.css`:

```css
:root {
  --bg: #03040a;          /* Page background */
  --p1: #7c3aed;          /* Primary purple */
  --c1: #06b6d4;          /* Accent cyan */
  --g1: linear-gradient(135deg, #7c3aed, #06b6d4); /* Main gradient */
  --text: #f1f5f9;        /* Primary text */
  --text2: #94a3b8;       /* Secondary text */
}
```

### Fonts

Swap fonts in `index.html` Google Fonts link and update `--font-head` / `--font-body` in `:root`.

### Pricing / Content

All copy is plain HTML — edit sections directly in `index.html`. Sections are clearly commented:
- `<!-- NAV -->` `<!-- HERO -->` `<!-- STATS -->` `<!-- PROBLEM -->`
- `<!-- FEATURES -->` `<!-- HOW IT WORKS -->` `<!-- TESTIMONIALS -->`
- `<!-- PRICING -->` `<!-- FAQ -->` `<!-- FINAL CTA -->` `<!-- FOOTER -->`

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Changes |
|---|---|
| `> 768px` | Full desktop layout |
| `≤ 768px` | Hamburger menu, single-column features & pricing, stacked demo |
| `≤ 480px` | 2-col stats, single-col steps, compact footer |

---

## 📄 License

MIT © 2025 InterviewGPT

Feel free to use this template for your own projects!

---

## 🙏 Credits

- Fonts by [Google Fonts](https://fonts.google.com)
- Built with ❤️ using pure HTML, CSS & JavaScript
- Enhanced with [Antigravity AI](https://antigravity.dev)
