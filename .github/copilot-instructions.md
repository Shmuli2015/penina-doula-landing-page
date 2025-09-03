# Penina Doula Services Landing Page

Professional doula services landing page built with Vite + React + TypeScript + Tailwind CSS. The site is in Hebrew and provides information about doula services for birth and postpartum support in Israel.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Build the Repository
Run these commands in sequence to set up the development environment:

1. **Install dependencies** (takes ~30 seconds):
   ```bash
   npm install
   ```
   - **NOTE**: You will see deprecation warnings and vulnerability alerts - this is expected
   - The install creates `node_modules/` with 371 packages
   - Some lockfile warnings about string-width-cjs, strip-ansi-cjs, and wrap-ansi-cjs are expected

2. **Build the application** (takes ~10 seconds, NEVER CANCEL):
   ```bash
   npm run build
   ```
   - **NEVER CANCEL**: Build completes in 10-15 seconds. Set timeout to 60+ seconds
   - Creates optimized production assets in `dist/` directory
   - **IMPORTANT**: TypeScript compilation errors in `src/components/ui/carousel.tsx` are expected but do not prevent build completion due to `noEmitOnError: false` in tsconfig.json
   - Final bundle size: ~655KB JavaScript, ~54KB CSS

3. **Development server** (starts in ~300ms):
   ```bash
   npm run dev
   ```
   - Runs on http://localhost:5173/
   - Hot module replacement enabled
   - Uses Vite for fast development builds

4. **Preview production build**:
   ```bash
   npm run preview
   ```
   - Serves built assets from `dist/` on http://localhost:4173/
   - Run after `npm run build` to test production bundle

### Linting and Code Quality
- **CRITICAL**: The `npm run lint` command **FAILS** - ESLint is not installed as a dependency
- The package.json includes a lint script but ESLint is missing from devDependencies
- **DO NOT** run `npm run lint` - it will fail with "eslint: not found"
- No working linting is available in this project

### Security and Dependencies
- **7 known vulnerabilities** exist (3 low, 2 moderate, 1 high, 1 critical)
- Vulnerabilities include: form-data (critical), axios (high), esbuild (moderate), brace-expansion, @supabase/auth-js
- Run `npm audit fix` to attempt automatic fixes
- These vulnerabilities do not prevent the application from building or running

## Validation

### Manual Testing Requirements
Always manually validate any changes by running through these complete user scenarios:

1. **Start the development server** with `npm run dev`
2. **Navigate to http://localhost:5173/** and verify:
   - Page loads with Hebrew text and professional doula branding
   - Hero section displays correctly with call-to-action button
   - Navigation buttons work (אודות, שירותים, המלצות, צרי קשר)
   - About section shows Penina Rozenberg's profile and credentials
   - Services section displays correctly
   - **Testimonials carousel functions**: click next/previous buttons to navigate through client testimonials
   - WhatsApp contact buttons are present and functional

3. **Test build and preview**:
   - Run `npm run build` and verify completion without errors
   - Run `npm run preview` and test the same functionality on port 4173

### Expected Behavior
- **Application loads successfully** on both development and preview servers
- **Navigation is smooth** with proper Hebrew RTL text display
- **Testimonials carousel** is interactive with working next/previous buttons
- **Contact buttons** are visible throughout the page
- Some external resources may fail to load (fonts, images) due to network restrictions - this is expected and does not affect core functionality

## Common Tasks

### Technology Stack
- **Frontend**: React 18.2.0 with TypeScript
- **Build Tool**: Vite 5.2.0 with SWC for fast compilation
- **Styling**: Tailwind CSS 3.4.1 with custom theme
- **UI Components**: Radix UI component library
- **Animations**: Framer Motion 11.18.0
- **Development**: Hot module replacement, fast refresh

### Project Structure
```
/src/
├── components/         # React components
│   ├── home.tsx       # Main page component
│   ├── Hero.tsx       # Hero section
│   ├── Header.tsx     # Navigation header
│   ├── AboutSection.tsx    # About Penina section
│   ├── ServicesSection.tsx # Services section
│   ├── TestimonialsSection.tsx # Client testimonials
│   ├── WhatsAppButton.tsx # Contact buttons
│   └── ui/            # Reusable UI components (Radix-based)
├── data/              # Static data files
├── lib/               # Utility functions
├── stories/           # Component library/Storybook
└── types/             # TypeScript type definitions
```

### Key Configuration Files
- `vite.config.ts` - Build configuration with React SWC plugin
- `tailwind.config.js` - Tailwind CSS custom theme
- `tsconfig.json` - TypeScript configuration with path aliases
- `tempo.config.json` - Typography configuration for design system
- `components.json` - UI component configuration

### Build Artifacts
After running `npm run build`, the `dist/` directory contains:
- `index.html` - Main HTML file
- `assets/` - JavaScript and CSS bundles
- Static assets copied from `public/`

### Environment Requirements
- **Node.js**: v20.14.2+ (tested with v20.19.4)
- **npm**: 10.8.2+
- **Modern browser** with ES2020 support

### Common Issues and Workarounds
1. **ESLint not working**: Linting is not available - ESLint is not installed
2. **TypeScript errors in carousel.tsx**: Expected due to embla-carousel-react version mismatch - does not prevent builds
3. **External resource failures**: Fonts and images from external CDNs may fail to load due to network restrictions
4. **Security vulnerabilities**: 7 known vulnerabilities exist but do not prevent normal operation

### Development Tips
- Use the development server (`npm run dev`) for fastest iteration
- The application uses RTL (right-to-left) layout for Hebrew text
- Tempo devtools are integrated for design system development
- Hot module replacement works for most changes without page refresh