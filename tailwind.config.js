/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     charcoal: '#212121',
     ice: '#f5f5f5',
     offBlack: '#0f0f0f',
     notBlack: '#0a0a0a',
     midGray: '#737373',
     lightGray: '#a3a3a3',
     black: '#000000',
     hLink: '#0ea5e9'
    },
    extend: {
    },
    fontFamily: {
      signature: "Monoton"
    },
    backgroundImage: {
      'hero-pattern': "url('./assets/Cool.svg')",
    }
  },
  plugins: [
  
]
}
