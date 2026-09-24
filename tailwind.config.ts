import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        // Homepage redesign faces, self-hosted through @fontsource (see src/main.tsx).
        display: ['"Bricolage Grotesque Variable"', '"Arial Narrow"', "system-ui", "sans-serif"],
        body: ['"Figtree Variable"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
      },
      colors: {
        // Redesign palette, taken from the WIGO logo: soil black, larva gold, leaf green.
        wg: {
          ground: "#F3F4EE",
          paper: "#FBFBF8",
          ink: "#131813",
          muted: "#586058",
          line: "#D9DDD3",
          gold: "#E6A417",
          "gold-ink": "#8A5B00",
          "gold-soft": "#F8EBC6",
          leaf: "#3E8A36",
          "leaf-soft": "#E1EFDB",
          soil: "#17130D",
          "soil-raised": "#221C14",
          "soil-line": "#3A3126",
          "soil-text": "#EFEAE0",
          "soil-muted": "#B3AA9B",
          // Straight from the logo: the G's sun yellow and the O's lime, plus a deep forest to carry them.
          sun: "#FFE240",
          lime: "#9BE870",
          forest: "#163A1A",
          "forest-raised": "#1F4A23",
          "forest-text": "#EEF5EA",
          "forest-muted": "#B5CDB0",
          amber: "#3B2A07",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          dark: "hsl(var(--secondary-dark))",
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
          light: "hsl(var(--accent-light))",
          dark: "hsl(var(--accent-dark))",
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
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-hero': 'var(--gradient-hero)',
        // Used across pages but previously undefined, which left icon chips and buttons blank.
        'gradient-earth': 'var(--gradient-primary)',
        'gradient-gold': 'var(--gradient-secondary)',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'medium': 'var(--shadow-medium)',
        'strong': 'var(--shadow-strong)',
        'glow-blue': 'var(--shadow-glow-blue)',
        'glow-gold': 'var(--shadow-glow-gold)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
        'bounce': 'var(--transition-bounce)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "wg-warm": {
          from: { opacity: "1" },
          to: { opacity: "0" },
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
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "slide-up": {
          "0%": {
            transform: "translateY(100px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
      },
      animation: {
        // Hero photo: the grey copy on top fades away once, revealing the colour photo.
        "wg-warm": "wg-warm 2.2s ease-in-out 0.6s forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "slide-up": "slide-up 0.7s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
