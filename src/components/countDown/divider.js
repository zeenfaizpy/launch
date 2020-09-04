import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    divider: {
        fontSize: "2rem",
        [theme.breakpoints.up("sm")]: {
        fontSize: "2rem",
        },
        [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
        },
        [theme.breakpoints.up("lg")]: {
        fontSize: "4rem",
        },
    },
}));

const Divider = () => {
    const { divider } = useStyles();

    return <div className={divider}>:</div>;
};

export default Divider;