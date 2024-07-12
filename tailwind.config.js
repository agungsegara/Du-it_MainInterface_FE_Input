/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f4f4f4",
        lightslategray: "#72829b",
        gray: {
          "100": "#1c1c1c",
          "200": "rgba(255, 255, 255, 0.4)",
        },
        lightseagreen: {
          "100": "#1caba2",
          "200": "rgba(28, 171, 162, 0.1)",
        },
        "t-colors-base-white": "#fff",
        "d-colors-base-neutral": "#374151",
        "d-colors-base-base-300": "#d1d5db",
        silver: "#c0c0c0",
        mediumturquoise: "rgba(54, 196, 189, 0.1)",
      },
      spacing: {
        "t-spacing-2": "8px",
        "t-spacing-3": "12px",
        "t-spacing-05": "2px",
        "t-spacing-1": "4px",
        "t-spacing-21": "8px",
      },
      fontFamily: {
        "ibm-plex-mono": "'IBM Plex Mono'",
        "daisyui-text-xs": "Roboto",
      },
      borderRadius: {
        "9980xl": "9999px",
        "t-borders-radius-rounded-lg": "8px",
        "t-borders-radius-rounded-full": "9999px",
        "t-spacing-21": "8px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
