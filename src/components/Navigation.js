import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import LogoImage from "./../assets/logo.png";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        padding: 0,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'transparent',
    },
}));

const Navigation = ({onMenuClickHandler}) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.container}>
            <Link to="/">
                <img src={LogoImage} alt="logo" width="220px" />
            </Link>
        </Toolbar>
    </AppBar>
  );
};

export default Navigation;