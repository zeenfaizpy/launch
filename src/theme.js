import { createMuiTheme } from "@material-ui/core/styles";

import launchBg1 from './assets/launchBg1.jpg';

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
    },
    overrides: {
        MuiCssBaseline: {
          "@global": {
            body: {
                backgroundImage: `url(${launchBg1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                fontFamily: 'zebulon'
            }
          }
        }
    }
});

export default theme;