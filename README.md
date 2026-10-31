React + Vite
# 🌿 Harvestly — Premium Grocery E-Commerce
This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.
A visually distinctive, fully functional grocery shopping platform built with **React + Vite**. Inspired by the product discovery and shopping convenience of major e-commerce platforms while maintaining a completely original brand identity designed specifically for grocery retail.
Currently, two official plugins are available:
---
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)
## 🚀 Quick Start
## React Compiler
### Prerequisites
- Node.js v18+ and npm v9+
The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
### Installation
## Expanding the Oxlint configuration
```bash
# Install dependencies
npm install
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.
### Production Build
```bash
npm run build
npm run preview
```
---
## 🛍️ Features
### Shopping Experience
**Homepage** with hero banner, category tiles, today's deals, fresh picks, popular products, shop-by-need collections, and customer benefits
- **Product catalog** with 36 products across 10 categories
- **Search** — real-time search across product name, description, and category
- **Category filtering** — filter by any of 10 categories
- **Price range filtering** — 5 price tiers
- **Sort options** — Featured, Most Popular, Highest Rated, Price (asc/desc), Biggest Savings
- **Dietary filters** — Organic Only, In Stock Only
- **Active filter chips** — visually see and remove applied filters
### Product Cards & Detail
- Product image with hover zoom
- Discount badge (%) and Organic badge
- Star ratings with review count
- Add-to-cart with inline quantity controls
- Wishlist toggle (heart button)
- Full product detail page with related products
### Cart
- Add / remove / increment / decrement items
- Per-item and per-line savings display
- Free delivery progress bar (free over $50)
- Tax calculation (8%)
- Order total calculation
- **LocalStorage persistence** — cart survives page refresh
- Empty cart screen with CTA
### Checkout
- Multi-field form: name, email, phone, address, city, state, ZIP
- **Real-time validation** — errors shown on blur and submit
- Delivery notes field
- Simulated order placement with animated confirmation
- Clearly marked as demo (no real payment collected)
### Wishlist
- Toggle from any product card or detail page
- Persisted via LocalStorage
- View all wishlist items via the Wishlist nav link
---
## 🗂️ Project Structure
```
src/
├── components/
├── Header.jsx / Header.css   — Announcement bar, search, cart, category nav, mobile menu
│   ├── Footer.jsx / Footer.css   — Links, newsletter form, legal
│   ├── ProductCard.jsx / .css    — Reusable product card with cart + wishlist controls
├── pages/
│   ├── Home.jsx / Home.css       — Full homepage
│   ├── Products.jsx / .css       — Catalog with sidebar filters
│   ├── ProductDetail.jsx / .css  — Individual product view
│   ├── Cart.jsx / Cart.css       — Cart management
│   ├── Checkout.jsx / .css       — Form validation + confirmation
│   ├── NotFound.jsx              — 404 page
├── context/
│   ├── CartContext.jsx            — Cart + Wishlist state (useReducer)
│   ├── ToastContext.jsx           — Global toast notifications
├── data/
│   └── products.js               — 36 products, 10 categories, helper functions
└── styles/
    ├── variables.css              — Design tokens (colors, spacing, typography)
    └── global.css                 — Global reset, utility classes, shared components
```
---
## 🎨 Design System
### Brand Identity
- **Name:** Harvestly
- **Tagline:** Farm Fresh, Doorstep Ready
### Color Palette
| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#2d6a4f` | Deep forest green — primary actions |
| `--color-primary-dark` | `#1b4332` | Hover states, headings |
| `--color-primary-light` | `#52b788` | Accents, badges |
| `--color-cream` | `#fdf8f0` | Warm background |
| `--color-orange` | `#e07c39` | CTA buttons |
| `--color-charcoal` | `#1e1e2e` | Text, footer |
# Typography
- **Display:** Poppins (headings, brand)
- **Body:** Inter (readable, modern)
---
## ⚙️ Tech Stack
| Technology | Use |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tooling |
| React Router v7 | Client-side routing |
| Context API + useReducer | State management |
| LocalStorage | Cart + wishlist persistence |
| CSS3 (plain) | Styling — no CSS frameworks |
| Unsplash | Product images |
---
## 📱 Responsive Breakpoints
| Breakpoint | Behavior |
|---|---|
| 320px+ | Single-column, stacked layout |
| 480px+ | 2-column product grid |
| 768px+ | Wider grids, sidebar appears |
| 1024px+ | Full desktop layout |
| 1440px | Max container width |
---
## ⚠️ Important Notes
- **Demo only** — No real payments are collected. No real orders are placed.
- Checkout form validates inputs but does not submit to any backend.
- Product images are sourced from Unsplash (public CDN) and require an internet connection.
- Cart and wishlist data are stored in your browser's LocalStorage.
## 📦 Available Scripts
| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at http://localhost:5173 |
| `npm run build` | Build for production (output to `/dist`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the codebase |
