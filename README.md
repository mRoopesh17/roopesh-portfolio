# Roopesh Mamidala: Professional Portfolio Website

Personal portfolio website for Roopesh Mamidala, Computer Science graduate from the National Institute of Technology, Warangal (B.Tech CSE, 2024).

The site presents a technical profile across:
Business Analysis / Data Analytics / Systems & Applied AI

---

## Design System & Principles

- Sober Dark Theme: Charcoal and slate palette (#090b10, #0f131a, #11151e) with restrained cool blue accents.
- Structured Rectangular Geometry: Sharp, modern 4px border radii for buttons, badges, and cards. No pill shapes or bubble buttons.
- Real Photography & Authentic Credentials: Real formal portrait, verified NIT Warangal degree, and accurate internship highlights. No fake reviews, counter animations, or artificial metrics.
- Compliance & Legal Readiness: Integrated Privacy Policy (privacy.html) and Terms and Conditions (terms.html).
- Minimalist Performance: Fast CSS transitions with zero heavy animation libraries, cursor tracking, or scroll lag.
- Netlify Forms Integration: Production-ready contact form that submits inquiries directly to Netlify without third-party plugins.

---

## Project Structure

```
roopesh-mamidala-portfolio/
├── index.html                  # Core portfolio landing page
├── privacy.html                # Privacy policy page
├── terms.html                  # Terms and conditions page
├── .gitignore                  # Clean Git exclusion rules
├── css/
│   ├── style.css               # Design system, layout, typography, responsive styling
│   └── animations.css          # Minimal transition helpers
├── js/
│   ├── data.js                 # Project metadata and detailed architecture briefs
│   └── main.js                 # Navigation scroll-spy, filter tabs, modal handler
├── assets/
│   ├── favicon.svg             # Minimalist RM monogram vector favicon
│   └── images/
│       ├── roopesh-portrait.jpg    # Verified formal portrait
│       ├── rag-architecture.svg    # Retrieval-Augmented Generation system diagram
│       ├── blockchain-system.svg   # Blockchain asset verification diagram
│       ├── vision-ai.svg           # Computer vision emotion classification diagram
│       └── compression-tree.svg    # Huffman binary compression optimization diagram
└── README.md
```

---

## Custom Domain Setup Guide (Netlify & DNS)

Follow these steps to connect your custom domain (e.g., roopeshmamidala.com) to your Netlify deployment:

### Step 1: Add Custom Domain in Netlify
1. Log in to your Netlify dashboard (app.netlify.com).
2. Select your portfolio site.
3. Navigate to: Site configuration -> Domain management -> Custom domains.
4. Click "Add a domain" and enter your domain name (e.g., roopeshmamidala.com).
5. Click "Verify" and then "Add domain".

### Step 2: Configure DNS Records at Your Domain Registrar
At your domain registrar (Namecheap, GoDaddy, Google Domains / Squarespace, Cloudflare):
- Method A (Netlify DNS - Recommended):
  Point your domain's Nameservers (NS) to the four Netlify nameservers shown in your Netlify dashboard (e.g., dns1.p01.nsone.net).
- Method B (Standard DNS Records):
  Add an A Record:
  - Host: @
  - Points to: 75.2.60.5 (Netlify Load Balancer IP)
  Add a CNAME Record:
  - Host: www
  - Points to: your-site-name.netlify.app

### Step 3: Enable Free Automatic SSL/TLS
1. Under Site configuration -> Domain management -> HTTPS.
2. Netlify will automatically provision a Let's Encrypt SSL certificate once DNS propagates (usually within 10 to 30 minutes).

---

## Local Preview

Open index.html directly in any browser, or run a local server:
```powershell
cd C:\Users\HOMEE\.gemini\antigravity\scratch\roopesh-mamidala-portfolio
python -m http.server 8080
```
Visit http://localhost:8080 in your browser.
