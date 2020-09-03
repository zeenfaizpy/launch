import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import TimerItem from "./timerItem";
import Divider from "./divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        border: '1px solid #aaa',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',

        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),
        },
    },
    timeBox: {
        

    }
}));


const Timer = ({ launchTime }) => {
    const initialTime = {
        days: "--",
        hours: "--",
        minutes: "--",
        seconds: "--",
    };
    const [currTime, setCurrTime] = useState(initialTime);

    useEffect(() => {
        const getLaunchTime = () => {
            const now = moment();
            const liftoff = moment(launchTime);
            const diff = liftoff.diff(now);
            const diffDuration = moment.duration(diff);
            
            const days = parseInt(diffDuration.asDays());
            setCurrTime({
                days: days.toString().padStart(2, "0"),
                hours: diffDuration.hours().toString().padStart(2, "0"),
                minutes: diffDuration.minutes().toString().padStart(2, "0"),
                seconds: diffDuration.seconds().toString().padStart(2, "0"),
            });
        };
        let timer = setInterval(() => getLaunchTime(), 1000);
        return () => {
            clearInterval(timer);
            window.removeEventListener("mousemove", () => {});
        };
    }, [launchTime]);

    const { container, timeBox } = useStyles();

    return (
        <Grid container justify="space-between" className={container}>
            <Grid item xs={3} className={timeBox}>
                <TimerItem value={currTime.days}>Days</TimerItem>
            </Grid>
            <Divider />
            <Grid item xs={2} className={timeBox}>
                <TimerItem value={currTime.hours}>Hours</TimerItem>
            </Grid>
            <Divider />
            <Grid item xs={2} className={timeBox}>
                <TimerItem value={currTime.minutes}>Minutes</TimerItem>
            </Grid>
            <Divider />
            <Grid item xs={2} className={timeBox}>
                <TimerItem value={currTime.seconds}>Seconds</TimerItem>
            </Grid>
        </Grid>
    );
};

export default Timer;