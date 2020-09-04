import React from "react";
import Container from "@material-ui/core/Container";
import CountDown from "../components/countDown";
import Title from "./../components/Title";

import theme2 from "./../theme2";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const Home2 = () => {
  return (
    <ThemeProvider theme={theme2}>
        <CssBaseline />
        <Container maxWidth="lg">
            <CountDown />
            <Title />
        </Container>
    </ThemeProvider>
  );
};

export default Home2;