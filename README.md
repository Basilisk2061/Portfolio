# Arya Dahal - Portfolio

A professional, modern portfolio website built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Features
- **Modern Design**: Dark mode, glassmorphism, neon accents (Cyan/Purple).
- **Interactive**: Filterable projects, animated skills, command palette (`Ctrl+K`).
- **Performance**: Optimized images, smooth scrolling, particle background.
- **Content System**: All data is managed in `src/data/index.ts` for easy updates.

## Project Structure
- `src/app`: Next.js App Router pages and layout.
- `src/components`: React components (Hero, About, Projects, etc.).
- `src/data`: Centralized content management.
- `src/context`: Global state management.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Add Resume**:
    Place your resume PDF file in the `public/` directory and name it `resume.pdf`.

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it.

4.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Customization
- Update personal info, projects, and skills in `src/data/index.ts`.
- Modify the theme colors in `src/app/globals.css` and `tailwind.config.ts`.
