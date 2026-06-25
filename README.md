# Uday Sri Sai — Portfolio v3 (Glassmorphism Edition)

Dark glassmorphism design matching the reference mockups — teal/cyan accent, photo hero, skill progress bars with icons, project cards with screenshot previews, Resume modal with Download button.

## Quick Start
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## Add Your Assets

| File | Purpose |
|---|---|
| `public/profile.jpg` | Your photo in the Hero section |
| `public/project1.png` | Admin Dashboard screenshot |
| `public/project2.png` | IoT project screenshot |
| `public/Uday_Resume.pdf` | Enables Download Resume button |

## Structure
```
src/
├── App.jsx
├── main.jsx
├── data/portfolioData.js     ← Edit ALL content here
├── styles/globals.css
├── components/
│   ├── Navbar.jsx            ← Glassmorphism nav + Skills dropdown
│   ├── Hero.jsx              ← Name, photo, View Projects + Download Resume
│   ├── About.jsx             ← Bio, education, skills grid with progress bars
│   ├── Projects.jsx          ← Screenshot cards, Live Demo + GitHub buttons
│   ├── Contact.jsx           ← Social links + contact form
│   ├── Footer.jsx
│   └── ResumeModal.jsx       ← Fullscreen resume viewer + Download PDF
└── pages/
    └── Home.jsx
```

## Customise
Everything lives in `src/data/portfolioData.js`:
- Personal info, bio, links
- Skills with level percentages and colors
- Projects with tech stack and colors
- Education timeline
