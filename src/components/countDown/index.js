import React from "react";
import Timer from "./timer";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: "1.5rem",
        textAlign: "center",
        fontWeight: 200,
        textTransform: "uppercase",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),

        [theme.breakpoints.up("md")]: {
            marginBottom: 0,
            marginTop: theme.spacing(8),
            textAlign: "left",
        },
    },
}));

const CountDown = () => {
    const { heading } = useStyles();
    const launchTime = "2020-12-18 17:00:00";
    return (
        <section id="countdown">
            <Typography className={heading} component="h3" variant="button">
                LAUNCH IN
            </Typography>

            <React.Fragment>
                <Timer launchTime={launchTime} />
            </React.Fragment>
        </section>
    );
};

export default CountDown;