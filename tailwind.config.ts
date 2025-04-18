/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
// const colors = require("tailwindcss/colors");
import svgToDataUri from "mini-svg-data-uri";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	container: {
    		center: true,
    		padding: {
    			DEFAULT: '1rem',
    			md: '2rem',
    			lg: '4rem'
    		},
    		screens: {
    			'2xl': '1400px',
    			sm: '300px',
    			md: '768px',
    			lg: '1024px',
    			xl: '1280px'
    		}
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			tertiary: {
    				DEFAULT: 'hsl(var(--tertiary))',
    				foreground: 'hsl(var(--tertiary-foreground))'
    			},
    			subtle: {
    				DEFAULT: 'hsl(var(--subtle))',
    				foreground: 'hsl(var(--subtle-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		fontFamily: {
    			'heading': [
    				'var(--font-aeonik)'
    			],
    			'default': [
    				'var(--font-inter)'
    			]
    		},
    		keyframes: {
    			scroll: {
    				to: {
    					transform: 'translate(calc(-50% - 0.5rem))'
    				}
    			},
    			spotlight: {
    				'0%': {
    					opacity: '0',
    					transform: 'translate(-72%, -62%) scale(0.5)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translate(-50%,-40%) scale(1)'
    				}
    			},
    			'move-left': {
    				'0%': {
    					transform: 'translateX(0%)'
    				},
    				'100%': {
    					transform: 'translateX(-50)'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'grid': {
    				'0%': {
    					transform: 'translateY(-50%)'
    				},
    				'100%': {
    					transform: 'translateY(0)'
    				}
    			},
    			'wiggle': {
    				'0%, 100%': {
    					transform: 'translateX(0%)',
    					transformOrigin: '50% 50%'
    				},
    				'15%': {
    					transform: 'translateX(-4px) rotate(-4deg)'
    				},
    				'30%': {
    					transform: 'translateX(6px) rotate(4deg)'
    				},
    				'45%': {
    					transform: 'translateX(-6px) rotate(-2.4deg)'
    				},
    				'60%': {
    					transform: 'translateX(2px) rotate(1.6deg)'
    				},
    				'75%': {
    					transform: 'translateX(-1px) rotate(-0.8deg)'
    				}
    			},
    			'spinner': {
    				'0%': {
    					opacity: '1'
    				},
    				'100%': {
    					opacity: '0'
    				}
    			},
    			'blink': {
    				'0%': {
    					opacity: '0.2'
    				},
    				'20%': {
    					opacity: '1'
    				},
    				'100%': {
    					opacity: '0.2'
    				}
    			},
    			'shimmer': {
    				'0%, 90%, 100%': {
    					'background-position': 'calc(-100% - var(--shimmer-width)) 0'
    				},
    				'30%, 60%': {
    					'background-position': 'calc(100% + var(--shimmer-width)) 0'
    				}
    			},
    			'image-glow': {
    				'0%': {
    					'opacity': '0',
    					'animation-timing-function': 'cubic-bezier(.74, .25, .76, 1)'
    				},
    				'10%': {
    					'opacity': '0.5',
    					'animation-timing-function': 'cubic-bezier(.12, .01, .08, .99)'
    				},
    				'100%': {
    					'opacity': '0.7'
    				}
    			},
    			'border-beam': {
    				'100%': {
    					'offset-distance': '100%'
    				}
    			},
    			'marquee': {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'flip': {
    				to: {
    					transform: 'rotate(360deg)'
    				}
    			},
    			'rotate': {
    				to: {
    					transform: 'rotate(90deg)'
    				}
    			},
    			'caret-blink': {
    				'0%,70%,100%': {
    					opacity: '1'
    				},
    				'20%,50%': {
    					opacity: '0'
    				}
    			},
    			'loading': {
    				'0%': {
    					transform: 'rotate(0deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'grid': 'grid 15s linear infinite',
    			'wiggle': 'wiggle 0.75s infinite',
    			'spinner': 'spinner 1.2s linear infinite',
    			'blink': 'blink 1.4s infinite both',
    			'shimmer': 'shimmer 5s infinite',
    			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
    			'image-glow': 'image-glow 4s ease-out 0.6s forwards',
    			'marquee': 'marquee var(--duration) linear infinite',
    			'flip': 'flip 6s infinite steps(2, end)',
    			'rotate': 'rotate 3s linear infinite both',
    			'caret-blink': 'caret-blink 1.25s ease-out infinite',
    			'loading': 'loading 0.5s linear infinite',
    			'move-left': 'move-left 1s linear infinite',
    			spotlight: 'spotlight 2s ease .75s 1 forwards',
    			scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
    		}
    	}
    },
    plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    ],
} satisfies Config ;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};
export default config;
