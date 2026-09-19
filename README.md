# Hassni Plumbers — Company Website

A static marketing website for **Hassni Plumbers (Hassni Group)**, an Hyderabad-based engineering and contracting company founded in 1991, offering plumbing, fire protection, electrical, HVAC and turnkey MEP services across India.

**Live site:** [demo-page-flax.vercel.app](https://demo-page-flax.vercel.app)

## About

Hassni Plumbers has completed 500+ residential and commercial projects since 1991, including work for hospitals, hotels, educational institutions, gated communities and corporate developments across Hyderabad, Bengaluru, Vijayawada, Visakhapatnam, Pune, Chennai and Bhubaneswar. This site presents the company's profile, capabilities, project history and contact information.

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero intro, key stats, philosophy and quick links into the rest of the site |
| About | `about.html` | Company background, founder, strengths and branch network |
| Capabilities | `capabilities.html` | EPC / MEP service lines — plumbing, fire fighting, electrical, HVAC, waterproofing, procurement and more |
| Projects | `projects.html` | Executed projects across healthcare, education, residential and commercial sectors |
| Contact | `contact.html` | Head office and branch network details |

## Tech stack

- Plain **HTML5 / CSS3 / vanilla JavaScript** — no build step, no framework
- `styles.css` — shared stylesheet for all pages
- `site.js` — injects the shared header/footer and handles any page-level interactivity
- Static assets (images, logo, hero video/poster) live under `images/`
- Deployed on **Vercel**

## Project structure

```
demo-page/
├── index.html                  # Home page
├── about.html                  # Company profile
├── capabilities.html           # Services / EPC capabilities
├── projects.html               # Executed projects
├── contact.html                # Contact & office network
├── styles.css                  # Shared styles
├── site.js                     # Shared header/footer + interactivity
├── hassni-plumbers-logo.png    # Brand logo
├── images/                     # Photos, hero video/poster, other assets
└── README.md
```

## Getting started

This is a fully static site — no dependencies or build step required.

**Option 1 — open directly**
Clone the repo and open `index.html` in a browser.

```bash
git clone https://github.com/Mohammedqutbuddin/demo-page.git
cd demo-page
open index.html   # or just double-click the file
```

**Option 2 — run a local server (recommended)**
Serving the files avoids any browser quirks with relative paths and matches how the site behaves in production.

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:8000` (or the port shown in your terminal).

## Deployment

The site is deployed on [Vercel](https://vercel.com) as a static site. Pushing to the `main` branch redeploys automatically; no environment variables or build command are required since there's no build step.

## Editing content

Each page is self-contained HTML, so content can be edited directly in the relevant `.html` file. Shared elements (navigation, footer) are injected by `site.js`, so header/footer changes only need to be made in one place.

## License

© Hassni Plumbers (Hassni Group). All rights reserved.
