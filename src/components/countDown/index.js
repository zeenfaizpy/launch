import React from "react";
// import Timer from "./timer";
import Banner from './banner';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: "1.5rem",
        textAlign: "center",
        fontWeight: 200,
        marginTop: theme.spacing(25),
        marginBottom: theme.spacing(2),

        [theme.breakpoints.up("md")]: {
            marginBottom: 0,
            marginTop: theme.spacing(25),
            textAlign: "left",
        },
    },
}));

const CountDown = () => {
    const { heading } = useStyles();
    // const launchTime = "2021-02-05 00:00:00";
    return (
        <section id="countdown" className={heading}>
            {/* <Timer launchTime={launchTime} /> */}
            <Banner />
        </section>
    );
};

export default CountDown;