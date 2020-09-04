import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    value: {
        fontSize: "3rem",
        lineHeight: 0.9,
        fontFamily: 'zebulon',
        [theme.breakpoints.up("sm")]: {
            fontSize: "3rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "5rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "7rem",
        },
    },
    label: {
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
            fontSize: "1.5rem",
        },
    },
}));



const TimerItem = ({ value, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <Typography component="p" className={classes.value} color="secondary">
            {value}
        </Typography>
        <Typography component="p" variant="button" className={classes.label}>
            {children}
        </Typography>
    </div>
  );
};

export default TimerItem;