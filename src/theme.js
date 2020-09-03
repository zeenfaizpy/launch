import { createMuiTheme } from "@material-ui/core/styles";

import launchBg from './assets/launchBg.jpg'; // Import using relative path

const theme = createMuiTheme({
    palette: {
        type: "dark",
        common: {
            black: "#0F1112",
        },
        background: {
            default: "#0F1112",
            paper: "#22272B",
        },
        primary: {
            main: "#0F1112",
        },
        secondary: {
            main: "#ffffff",
        },
        text: {
            secondary: "#A7A9AC",
        },
    },
    typography: {
        h3: {
            fontSize: "2rem",
            "@media (min-width: 960px)": {
                fontSize: "3rem",
            },
        },
        h5: {
            fontSize: "1.3rem",
            "@media (min-width: 960px)": {
                fontSize: "1.5rem",
            },
        },
        fontFamily: [
            "Saira Semi Condensed",
            "Roboto",
            "Helvetica",
            "cursive",
            "Arial",
            "sans-serif",
            "Iceberg",
        ].join(","),
    },
    overrides: {
        MuiCssBaseline: {
          "@global": {
            body: {
                backgroundImage: `url(${launchBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }
          }
        }
    }
});

export default theme;