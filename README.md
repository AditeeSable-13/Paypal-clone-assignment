# PayPal Open Landing Page Clone

A static, single-page React web application that replicates the PayPal Open landing page design.

## Tech Stack

- **React** 19
- **Vite** 6
- **JavaScript (JSX)**
- **HTML5 / CSS3**

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── main.jsx                  # React entry point
├── App.jsx                   # Root component
├── index.css                 # Global styles
└── components/
    ├── Header.jsx            # Navigation header with PayPal logo
    ├── Hero.jsx              # Main hero section
    └── AccountToggle.jsx     # Personal / Business toggle pill
```

## Features

- Pixel-accurate recreation of the PayPal Open landing page
- PayPal logo rendered as inline SVG
- Personal / Business toggle (visual only)
- Smooth CSS hover effects on all interactive elements
- Fully responsive layout (desktop, tablet, mobile)
- No external dependencies beyond React and Vite
- No routing, no API calls, no state changes on click

## License

This project is for educational purposes only.
