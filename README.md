# Melvin — Portfolio Website

Open `index.html` in any browser — no build tools or installs needed.

---

## File structure

```
melvin-portfolio/
│
├── index.html          ← Page structure & content (text, sections, links)
│
├── css/
│   ├── variables.css   ← Colors, fonts, spacing — edit this to retheme everything
│   ├── base.css        ← Global resets, buttons, footer, scroll animation
│   ├── nav.css         ← Navigation bar
│   ├── hero.css        ← Hero section (headline, blobs, stats)
│   ├── skills.css      ← Tech stack cards
│   ├── projects.css    ← Project cards grid
│   └── contact.css     ← Contact section & social chips
│
└── js/
    └── main.js         ← Scroll reveal + any future JS behaviour
```

---

## How to customize

### Change colors or fonts → `css/variables.css`
All design tokens are in one place:
```css
--c1: #FF5C35;   /* coral  — primary accent  */
--c2: #7B5CF5;   /* violet — secondary accent */
--c3: #00D4A0;   /* teal   — links, tags      */
```
Edit these and every component updates automatically.

### Change your name, headline, bio → `index.html`
Comments in the HTML mark each section clearly, e.g.:
```html
<!-- HERO SECTION — Edit your title, subtitle, and stats here -->
```

### Change your email & social links → `index.html` (contact section)
Search for `melvin@email.com` and the `contact-chip` anchors.

### Edit your skill tags → `index.html` (skills section)
Add or remove `<span class="tag">` elements inside each `.skill-card`.
Use `class="tag hot"` to highlight your favourite technologies.

### Edit your projects → `index.html` (projects section)
Each project is a `.project-card` block. Update:
- `.project-type` — category label (e.g. "FULLSTACK APP")
- `h3` — project name
- `p` — short description
- `.stack-pill` spans — tech used
- `.project-link` href — link to live site or GitHub repo
- `.project-thumb` class — colour theme (`p1` purple, `p2` green, `p3` red)

### Add a new project colour theme → `css/projects.css`
Add a `.p4` rule under the existing thumbnail classes:
```css
.project-thumb.p4 { background: linear-gradient(135deg, #0A0A0F 0%, #1a1800 100%); }
```
Then use `class="project-thumb p4"` in `index.html`.

### Add new JavaScript behaviour → `js/main.js`
The file is well-commented — just append your code at the bottom.

---

## Deploying

Drop the whole folder into any static host:

- **Netlify** — drag the folder to [netlify.com/drop](https://app.netlify.com/drop)
- **Vercel** — `vercel deploy` or import via the dashboard
- **GitHub Pages** — push to a repo, go to Settings → Pages → deploy from `/root`
