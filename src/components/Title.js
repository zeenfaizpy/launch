import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LogoImage from "./../assets/logo.png";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
    },
    section: {
        marginTop: '150px'
    },
    title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "lowercase",
        padding: 0,
        fontSize: "0.5rem",
        lineHeight: 0.9,
        paddingTop: 15,
        fontFamily: 'zebulon',
        [theme.breakpoints.up("sm")]: {
            fontSize: "0.5rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2rem",
        },
    }
}));

const Title = () => {
    const classes = useStyles();

    return (
        <section id="title" className={classes.section}>
            <div className={classes.container}>
                <img src={LogoImage} alt="logo" width="220px" />
            </div>
            <Typography component="h3" className={classes.title} style={{'paddingTop': 20}}>
                Ghalib Satellite Launch
            </Typography>
        </section>
  );
};

export default Title;