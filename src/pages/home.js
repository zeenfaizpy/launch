import React from "react";
import Container from "@material-ui/core/Container";
import CountDown from "../components/countDown";
import Navigation from "./../components/Navigation";

const Home = () => {
  return (
    <Container maxWidth="lg">
        <Navigation data-testid="nav" />
        <CountDown />
    </Container>
  );
};

export default Home;