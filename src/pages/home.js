import React from "react";
import Container from "@material-ui/core/Container";
import CountDown from "../components/countDown";
import Title from "./../components/Title";

import theme1 from "./../theme1";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const Home = () => {
  return (
    <ThemeProvider theme={theme1}>
        <CssBaseline />
        <Container maxWidth="lg">
            <CountDown />
            <Title />
        </Container>
    </ThemeProvider>
  );
};

export default Home;