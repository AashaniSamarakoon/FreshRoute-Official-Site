# FreshRoute Official Website

A complete React + Vite marketing website for the official FreshRoute brand presence. The site is built for public communication, product positioning, partnerships, and marketing use. It intentionally does **not** include personal member names, private phone numbers, private emails, or team-specific personal details.

## Included pages/sections

- Responsive navigation
- Hero section with FreshRoute positioning
- Platform feature cards
- Fresh logistics workflow section
- Solutions for producers, distributors, retailers, and partners
- Impact messaging without unsupported numeric claims
- Research portal section linked to `https://research.freshroute.lk/`
- Facebook link using the provided URL
- FAQ section
- Frontend-only contact form
- Footer
- Favicon, Open Graph cover image, robots file, and sitemap file

## How to run locally

```bash
npm install
npm run dev
```

The development server will open at the Vite local URL, usually:

```text
http://localhost:5173
```

## Build for production

```bash
npm run build
npm run preview
```

The production-ready files will be generated inside the `dist` folder.

## Important customization points

1. Update website domain references in:
   - `public/sitemap.xml`
   - `public/robots.txt`
   - `index.html` if you want to add a final canonical URL
2. Update the links at the top of `src/App.jsx`:

```js
const RESEARCH_URL = 'https://research.freshroute.lk/';
const FACEBOOK_URL = 'https://www.facebook.com/share/1SoecsTGwY/';
```

3. Connect the contact form to a backend before launch. Current behavior is frontend-only and does not send messages.
4. Edit brand colors in `src/styles.css` under the `:root` variables.

## Suggested deployment options

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- Any standard static hosting provider

## Project structure

```text
freshroute-official-react/
├── public/
│   ├── favicon.svg
│   ├── og-cover.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```
