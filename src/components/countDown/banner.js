import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        // border: '1px solid #aaa',
        // backgroundColor: 'rgba(0, 0, 0, 0.2)',

        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),
        },
    },
    innerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        fontSize: "0.5rem",
        lineHeight: 0.9,
        paddingTop: 15,
        fontFamily: 'zebulon',
        [theme.breakpoints.up("sm")]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "4rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "6rem",
        },
    }
}));


const Banner = () => {
    const { container, innerContainer, label } = useStyles();

    return (
        <Grid container justify="space-between" className={container}>
            <Grid item xs={12}>
                <div className={innerContainer}>
                    <Typography component="p" variant="button" className={label}>
                        {'To Be Advised'}
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
};

export default Banner;