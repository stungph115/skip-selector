# Skip Selector React Challenge

A fully redesigned, responsive skip-size selection page built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Clean Component Structure**: `SkipGrid`, `SkipCard`, `SummaryBar` components with clear props.
- **Responsive Design**: Mobile-first layout, adaptive grid (1 → 2 → 3 columns), fluid gutters.
- **Dark Theme**: Modern dark color palette with accent controls.
- **Dynamic Data**: Fetches skip options from API and enriches with images and road-permission flags.
- **Selectable Cards**: Click or keyboard-select each skip size with active state and summary footer.
- **Accessibility**: Keyboard navigable cards (`tabIndex`, `role="button"`, `onKeyDown`).
- **Footer Summary**: Persistent bottom bar showing selected skip name, price, hire days, and disclaimer.

## Live Demo

- **GitHub Repository**: <https://github.com/stungph115/skip-selector>  
- **Sandbox Preview**: <https://mg4khx-5173.csb.app/>  

## Getting Started

### Prerequisites

- Node.js >=18.x and npm

### Installation

```bash
# Clone the repo
git clone <repo-url>
cd skip-selector

# Install dependencies
npm install
````

### Running Locally

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run serve
```

## Folder Structure

```
skip-selector/
├── public/             # Static assets & index.html
├── src/
│   ├── components/     # SkipGrid, SkipCard, SummaryBar
│   ├── hooks/          # useSkips.ts (data fetch)
│   ├── App.tsx         # App composition
│   ├── index.css       # Tailwind directives
│   └── main.tsx        # App entrypoint
├── tailwind.config.cjs # Tailwind settings
├── postcss.config.cjs  # PostCSS plugins
├── package.json
└── README.md           # This file
```

## Design Decisions

- **Grid Layout**: Mobile-first single column, scales up to three columns at `lg` breakpoint.
- **Card Style**: Emphasized skip images with a floating size badge; selection rings and CTA buttons.
- **Responsive Padding**: `px-4 sm:px-6 lg:px-8` on container and footer for consistent gutters.
- **Footer Behavior**: Fixed bottom bar with safe-area padding to avoid overlap; content padded to match container.

## Future Improvements

- Add detailed skip descriptions or capacities.
- Implement real user authentication and order flow.
- Integrate a richer design system with storybook.

---

Feel free to reach out if you have any questions or feedback!
Tung Pham — [tungphamdev95@gmail.com](mailto:tungphamdev95@gmail.com)
