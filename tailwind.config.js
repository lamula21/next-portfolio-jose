/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        "geist-mono": ["var(--font-geist-mono)"],
        "geist-sans": ["var(--font-geist-sans)"],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        mdx: {
          text: "hsl(var(--mdx-text))",
          primary: "hsl(var( --mdx-primary))",
          marker: "hsl(var(--mdx-marker))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      gradientColorStops: {
        "gradient-1-start": "#007CF0",
        "gradient-1-end": "#00DFD8",

        "gradient-2-start": "#7929CA",
        "gradient-2-end": "#FF0080",

        "gradient-3-start": "#FF4D4D",
        "gradient-3-end": "#F9CB28",
      },

      keyframes: {
        // infinite loop
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },

        // ui-ibelick - card pulser animation
        "border-width": {
          from: {
            width: "10px",
            opacity: "0",
          },
          to: {
            width: "100px",
            opacity: "1",
          },
        },

        // Shadcn Animation
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },

        // Custom Animation
        shake: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(10deg)" },
        },
        slowspin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        flip: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(180deg)" },
        },
        dropdownHight: {
          from: { height: "0%" },
          to: { height: "95%" },
        },
        dropupHight: {
          from: { height: "100%" },
          to: { height: "0%" },
        },
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slowfadehidden: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(180deg)" },
        },
        slowfade2: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: "translateY(5%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideup0: {
          from: { opacity: 0, transform: "translateY(50%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideup42: {
          from: { opacity: 0, transform: "translateY(100%)" },
          to: { opacity: 1, transform: "none" },
        },
        slidedown: {
          from: { opacity: 0, transform: "translateY(-25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slidedown2: {
          from: { opacity: 0, transform: "translateY(-600px)" },
          to: { opacity: 1, transform: "none" },
        },
        slideleft: {
          from: { opacity: 0, transform: "translateX(-250px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slidelefttranfrom: {
          from: { opacity: 0, transform: "translateY(290px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideleft3: {
          from: { opacity: 0, transform: "translateX(-350px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideleft2: {
          from: { opacity: 0, transform: "translateX(-500px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright2: {
          from: { opacity: 0, transform: "translateX(500px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        widthChange: {
          from: { transform: "w-[90%]" },
          to: { transform: "w-[100%]" },
        },
        pluseCustom: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        wave: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },

        fill: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },

        // Gradient Animation
        "gradient-foreground-1": {
          "from, 16.667%, to": {
            opacity: 1,
          },
          "33.333%, 83.333%": {
            opacity: 0,
          },
        },
        "gradient-background-1": {
          "from, 16.667%, to": {
            opacity: 0,
          },
          "25%, 91.667%": {
            opacity: 1,
          },
        },

        "gradient-foreground-2": {
          "from, to": {
            opacity: 0,
          },
          "33.333%, 50%": {
            opacity: 1,
          },
          "16.667%, 66.667%": {
            opacity: 0,
          },
        },

        "gradient-background-2": {
          "from, to": {
            opacity: 1,
          },
          "33.333%, 50%": {
            opacity: 0,
          },
          "25%, 58.333%": {
            opacity: 1,
          },
        },

        "gradient-foreground-3": {
          "from, 50%, to": {
            opacity: 0,
          },
          "66.667%, 83.333%": {
            opacity: 1,
          },
        },

        "gradient-background-3": {
          "from, 58.333%, 91.667%, to": {
            opacity: 1,
          },
          "66.667%, 83.333%": {
            opacity: 0,
          },
        },
      },

      animation: {
        // infinite loop
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",

        // ui-ibelick - card pulser animation
        "border-width": "border-width 5s alternate forwards 1",

        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        slideup: "slideup 0.7s ease-in-out",
        slideup0: "slideup 0.5s ease-in-out",
        slideup42: "slideup42 1s ease-in-out",
        slideup422: "slideup42 0.6s ease-in-out",
        slideup423: "slideup42 1.4s ease-in-out",

        slidedown: "slidedown 1s ease-in-out",
        slidedown2: "slidedown2 1.8s ease-in-out",
        slidelefttranfrom: "slidelefttranfrom 1.5s ease-in-out",
        slidelefttranfromslow: "slidelefttranfrom 6s ease-in-out",
        slideleft: "slideleft 1.2s ease-in-out",
        slideleftT2: "slideleft 1s ease-in-out",
        slideleftT3: "slideleft 1.3s ease-in-out",
        slideleftT4: "slideleft 1.6s ease-in-out",
        slideleft0: "slideleft 0.3s ease-in-out",
        slideleft3: "slideleft3 1s ease-in-out",
        slideleft4: "slideleft3 2.3s ease-in-out",
        slideleft2: "slideleft2 1.8s ease-in-out",
        slideright: "slideright 1s ease-in-out",
        slideright2: "slideright2 1.3s ease-in-out",
        slideright3: "slideright2 1.9s ease-in-out",
        widthChange: "widthChange 8s ease-in-out",
        dropdownHight: "dropdownHight 0.4s  ease",
        dropupHight: "dropupHight 1s ease-in-out",
        wave: "wave 1.2s linear infinite",
        slowfade: "slowfade 2.2s ease-in-out",
        slowfade2: "slowfade2 1.5s ease-in-out",
        slowfade3: "slowfade2 0.7s ease-in-out",
        fadeIn: "slowfade 3.0s ease-in-out",
        shake: "shake 0.1s linear infinite",
        slowfadehidden: "slowfadehidden 2s ease-in-out",
        "spin-slow": "spin 8s linear infinite",
        slowspin: "slowspin 0.2s linear infinite",
        Fastspin: "slowspin 2.5s linear infinite",
        flip: "flip 2s linear infinite",
        VerySlowspin: "slowspin 3.5s linear infinite",
        pluseCustom: "pluseCustom 1s linear infinite",
        "indicator-fill": "fill 4s ease",

        "gradient-background-1": "gradient-background-1 8s infinite",
        "gradient-foreground-1": "gradient-foreground-1 8s infinite",
        "gradient-background-2": "gradient-background-2 8s infinite",
        "gradient-foreground-2": "gradient-foreground-2 8s infinite",
        "gradient-background-3": "gradient-background-3 8s infinite",
        "gradient-foreground-3": "gradient-foreground-3 8s infinite",
      },

      screens: {
        225: "225px",
        310: "310px",
        340: "340px",
        350: "350px",
        370: "370px",
        400: "400px",
        420: "420px",
        450: "450px",
        500: "500px",
        550: "550px",
        600: "600px",
        630: "630px",
        660: "660px",
        720: "720px",
        800: "800px",
        840: "840px",
        860: "860px",
        900: "900px",
        950: "950px",
        1000: "1000px",
        1140: "1140px",
        1160: "1160px",
        1250: "1250px",
        1260: "1260px",
        1280: "1280px",
        1296: "1296px",
        1300: "1300px",
        1350: "1350px",
        1660: "1660px",
      },

      transitionDelay: {
        2000: "2000ms",
      },

      transitionDuration: {
        400: "400ms",
        600: "600ms",
        650: "650ms",
        1000: "1000ms",
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
        6000: "6000ms",
        7000: "7000ms",
        8000: "8000ms",
        9000: "9000ms",
        10000: "10000ms",
      },

      // #df27f7
      // #2731f7
      backgroundImage: {
        "gradient-circle":
          "radial-gradient(circle farthest-side at 50% 180%,#df27f7,rgba(241,146,229,0))",
        "blue-gradient-circle":
          "radial-gradient(circle farthest-side at 50% 180%,#2731f7,rgba(241,146,229,0))",
        "teal-gradient-circle":
          "radial-gradient(circle farthest-side at 50% 180%,#14b8a6,rgba(19,78,74,0))",
      },

      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        md: "0 2px 4px var(--tw-shadow-color)",
        xmd: "0 4px 8px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss"),
    require("autoprefixer"),

    // Add text-shadow to Tailwind
    plugin(function ({ matchUtilities, theme, addUtilities }) {
      const newUtilities = {
        ".text-rendering": {
          "text-rendering": "geometricPrecision",
        },

        ".text-pretty": { "text-wrap": "pretty" },
      }

      addUtilities(newUtilities)

      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),

          "animate-duration": (value) => ({ animationDuration: value }),

          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        {
          values: theme("textShadow"),
        },
      )
    }),
  ],
}
