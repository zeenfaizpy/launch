import React from "react";
import Container from "@material-ui/core/Container";
import CountDown from "../components/countDown";
import Title from "./../components/Title";

const Home = () => {
  return (
    <Container maxWidth="lg">
        <CountDown />
        <Title />
    </Container>
  );
};

export default Home;