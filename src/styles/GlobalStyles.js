import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-500: #0ea5e9;
  --color-green-500: #22c55e;
  --color-amber-500: #f59e0b;
  --color-red-500: #ef4444;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  line-height: 1.4;
  background-color: var(--color-grey-900);
  color: var(--color-grey-400);
}

input,
button {
  font: inherit;
  color: inherit;
  border-radius: 0.8rem;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

button:has(svg) {
  line-height: 0;
}

ul {
  list-style: none;
}

p,
h1 {
  overflow-wrap: break-word;
  hyphens: auto;
}

`;

export default GlobalStyles;
