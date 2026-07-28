# Portfolio Implementation Plan & Todo

- [x] **Phase 1: Project Setup & Design System**
  - [x] Initialize Vite + React project in `./` (`d:\LEARNING\ML\Portfolio`)
  - [x] Install dependencies (`lucide-react`, `framer-motion`)
  - [x] Create `src/styles/variables.css` (Light/Dark themes, Blue/Purple/Teal aurora variables, typography, glassmorphism tokens)
  - [x] Create `src/styles/global.css` (Resets, fonts, smooth scroll)
  - [x] Create `src/context/ThemeContext.jsx` (Default light mode, toggle with localStorage)

- [x] **Phase 2: Mouse-Tracking Aurora Background**
  - [x] Implement `src/hooks/useMousePosition.js`
  - [x] Build `src/components/AuroraBackground.jsx` + `AuroraBackground.css` (Blue-dominant + purple/teal glow blobs)

- [x] **Phase 3: Floating Navigation & Shell**
  - [x] Build `src/components/Navbar.jsx` (Glassmorphism top bar with Resume link + dark mode toggle)
  - [x] Build `src/components/SectionNav.jsx` (Bottom fixed navigation bar with `Me`, `Projects`, `Experience`, `Skills`, `Contact` pills and active section indicator)

- [x] **Phase 4: Core Sections (Static & Interactive)**
  - [x] `src/sections/Hero.jsx`: Deepak / AI Product Manager, bio, avatar placeholder
  - [x] `src/sections/About.jsx`: Background, focus areas, key highlights
  - [x] `src/sections/Projects.jsx`: Project carousel/grid cards.
  - [x] `src/components/ProjectModal.jsx`: Exact modal matching screenshot:
    - Backdrop blur overlay & rounded modal container with top-right 'x' close button
    - Category tag + Large Project Title
    - Description box with paragraph + TECHNOLOGIES pill tags (FastAPI, Groq Llama 3, Canvas API, etc.)
    - LINKS section with full-width cards for `Live Demo >` and `GitHub Repository >`
    - Screenshots / Banner image showcase at the bottom
  - [x] `src/sections/Experience.jsx`: Professional timeline cards (Company, Role, Dates, Bullet points)
  - [x] `src/sections/Skills.jsx`: Categorized technical skill tags with icon prefixes (`</>`)
  - [x] `src/sections/Contact.jsx`: Contact links card (Email, LinkedIn, GitHub, X, Discord)

- [x] **Phase 5: Verification & Polish**
  - [x] Mobile responsive layout adjustments
  - [x] Build test (`npm run build`)
  - [x] Local dev server running (`http://localhost:5173`)
