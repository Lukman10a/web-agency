/** @type {import('tailwindcss').Config} */
import tailwindTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

// const tailwindAnimate = import("tailwindcss-animate");
// const tailwindTypography = import("@tailwindcss/typography");

const config: typeof Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": {
        max: "1400px",
      },
      xl: {
        max: "1279px",
      },
      lg: {
        max: "1023px",
      },
      "2md": {
        max: "950px",
      },
      md: {
        max: "767px",
      },
      sm: {
        max: "639px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
        sora: ["var(--font-sora)"],
        mono: ["var(--font-noto-mono)"],
      },
      colors: {
        orange: {
          "50": "#FFFFFF",
          "100": "#FFF4EE",
          "200": "#FFEADD",
          "300": "#FFDFCD",
          "400": "#FFD5BC",
          "500": "#FFBF9A",
          "600": "#FF9957",
          "650": "#FF9557",
          "700": "#AB6034",
          "800": "#824923",
          "850": "#6D391A",
          "900": "#582B11",
          "950": "#431E09",
          "1000": "#2E1100",
        },
        cyan: {
          "50": "#FFFFFF",
          "100": "#E6FCFF",
          "200": "#CCF9FF",
          "300": "#B3F6FF",
          "400": "#99F3FF",
          "500": "#66EEFF",
          "600": "#00B5CC",
          "700": "#00B899",
          "800": "#005A66",
          "850": "#00444D",
          "900": "#002D33",
          "950": "#00171A",
          "1000": "#000000",
        },
        magenta: {
          "50": "#FFFFFF",
          "100": "#FFEDF4",
          "200": "#FFDBE8",
          "300": "#FFC9DD",
          "400": "#FFB7D1",
          "500": "#FF93BB",
          "600": "#D33C73",
          "700": "#A73D5A",
          "800": "#7A1E40",
          "850": "#641733",
          "900": "#4E0F27",
          "950": "#38081A",
          "1000": "#220000",
        },
        darkblue: {
          "50": "#8699F2",
          "100": "#798CE1",
          "200": "#6D7ED0",
          "300": "#6071BF",
          "400": "#5463AE",
          "500": "#48569D",
          "600": "#3C498C",
          "700": "#30407B",
          "800": "#24326A",
          "850": "#182059",
          "900": "#0C1448",
          "950": "#010E37",
          "1000": "#000000",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        gradient: {
          "100": "hsla(22, 100%, 67%, 0.1)",
          "200": "hsla(230, 80%, 16%, 0.1)",
        },
      },
      gridTemplateColumns: {
        repeat4: "repeat(4, minmax(100px, 500px))",
        responsive300: "repeat(auto-fit, minmax(300px, 1fr))",
        responsive250: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionTimingFunction: {
        "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
      },
      keyframes: {
        "reveal-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(80%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "reveal-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-80%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "content-blur": {
          "0%": {
            filter: "blur(0.3rem)",
          },
          "100%": {
            filter: "blur(0)",
          },
        },
        "marquee-x": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-y": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        trail: {
          "0%": {
            "--angle": "0deg",
          },
          "100%": {
            "--angle": "360deg",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "marquee-horizontal": "marquee-x var(--duration) infinite linear",
        "marquee-vertical": "marquee-y var(--duration) linear infinite",
        "fade-in-up": "fadeInUp 0.7s ease-in-out forwards",
        trail: "trail var(--duration) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate, tailwindTypography, addVariablesForColors],
};
export default config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
