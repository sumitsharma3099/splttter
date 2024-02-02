/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "powderblue": "#c5e4e7",
        "lightseagreen": {
          "100": "#26c2ad",
          "200": "#21c3ac"
        },
        "white": "#fff",
        "darkslategray": {
          "100": "#406667",
          "200": "#004849",
          "300": "#00474b"
        },
        "paleturquoise": {
          "100": "#9fe8df",
          "200": "#9fe8dd",
          "300": "#85cfc7"
        },
        "cadetblue": "#649ba0",
        "rosybrown": "#b48372",
        "gray": {
          "100": "#6b7777",
          "200": "rgba(255, 255, 255, 0)"
        },
        "aliceblue": "#f3f8fb",
        "teal": {
          "100": "#337a7d",
          "200": "#0d686d"
        },
        "mediumturquoise": "#85cfc4",
        "silver": "#a9c3c6",
        "darkcyan": "#338f94",
        "gainsboro": "#d9dee0"
      },
      "spacing": {},
      "fontFamily": {
        "ibm-plex-mono": "'IBM Plex Mono'"
      },
      "borderRadius": {
        "mini": "15px",
        "3xs": "10px"
      }
    },
    "fontSize": {
      "5xl": "24px",
      "lgi": "19px",
      "7xl": "26px",
      "21xl": "40px",
      "13xl": "32px",
      "base": "16px",
      "xl": "20px",
      "3xl": "22px",
      "lg": "18px",
      "inherit": "inherit"
    },
    "screens": {
      "lg": {
        "max": "1200px"
      },
      "mq1050": {
        "raw": "screen and (max-width: 1050px)"
      },
      "mq750": {
        "raw": "screen and (max-width: 750px)"
      },
      "mq450": {
        "raw": "screen and (max-width: 450px)"
      }
    }
  },
  "corePlugins": {
    "preflight": false
  }
}