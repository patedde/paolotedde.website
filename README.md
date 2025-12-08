# Paolo Tedde - Landing Page

Modern, high-performance landing page built with Astro v5 and Tailwind CSS.

## Features

- **Modern Bento Grid Design**: Clean, professional layout
- **Fully Responsive**: Mobile-first approach
- **Performance Optimized**: Built with Astro for blazing-fast load times
- **Component-Based**: Modular architecture for easy maintenance
- **Tailwind CSS**: Utility-first styling with custom theme

## Project Structure

```
/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── TrustSignals.astro
│   │   ├── Services.astro
│   │   ├── JollyService.astro
│   │   ├── About.astro
│   │   ├── TechStack.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro
│   ├── pages/            # Route pages
│   │   └── index.astro
│   └── data/             # Site content
│       └── siteContent.json
├── public/               # Static assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 18.20.8 (required by Astro v5)
- npm >= 9.6.5

### Installation

1. **Upgrade Node.js** (if needed):
   ```bash
   # Using nvm (recommended)
   nvm install 20
   nvm use 20
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## Available Scripts

- `npm run dev` - Start development server at http://localhost:4321
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Customization

### Content

All text content is centralized in `src/data/siteContent.json`. Update this file to change:
- Personal information
- Hero section text
- Services descriptions
- About section content
- Trust signals
- Contact information

### Styling

The site uses a custom Tailwind configuration in `tailwind.config.mjs`:
- Custom colors: `dark-navy`, `accent-blue`
- Font: Inter (loaded from Google Fonts)

### Components

Each component is self-contained in `src/components/`. Components automatically pull data from `siteContent.json`, so no hardcoded text in components.

## Key Sections

1. **Hero**: Dark navy background with main value proposition
2. **Trust Signals**: Three-column grid highlighting expertise
3. **Services**: Bento grid layout with distinct cards for each service
4. **Jolly Service**: Special banner for Audit/QA services
5. **About**: Two-column layout with background highlights
6. **Tech Stack**: Grid of technologies used
7. **Contact**: Bilingual capability highlight with contact methods
8. **Footer**: Simple footer with navigation

## Technical Highlights

- **Zero Client-Side JavaScript**: Astro's static-first approach
- **Optimized Images**: Ready for image optimization
- **SEO Ready**: Semantic HTML and meta tags
- **Accessible**: ARIA-compliant components
- **Type-Safe**: TypeScript configuration

## Notes

- The current Node.js version (v18.19.1) is slightly below the recommended version
- Upgrade to Node.js 18.20.8 or higher (or Node.js 20+) for optimal performance
- All components are production-ready and follow best practices
