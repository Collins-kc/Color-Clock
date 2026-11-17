# Color Clock

A dynamic digital clock built with React and Vite. It shows the current date and time, updates every second, and changes color as the seconds tick by.

## Live Demo

https://collins-kc.github.io/Color-Clock/

## Features

- Displays the current time and date, updated every second
- Date and time formatted with the `date-fns` package
- Clock color changes dynamically with the seconds
- Styled with a dark theme and a colored border

## Technologies Used

- React (JSX, `useState`, `useEffect`)
- Vite
- npm
- date-fns v2.30.0
- ESLint
- GitHub Pages (deployed with `gh-pages`)

## How to Run Locally

```bash
git clone https://github.com/Collins-kc/Color-Clock.git
cd Color-Clock
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Project Structure

```
src/
├── main.jsx   # Starts the React app
├── App.jsx    # Clock component
├── App.css    # Clock styles
└── index.css  # Global styles
```

## Author

Collins