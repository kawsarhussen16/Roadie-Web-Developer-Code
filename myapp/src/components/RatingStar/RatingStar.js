import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "row",
            fontSize: 12,
            "& > * + *": {
                marginTop: theme.spacing(-0.2),
                marginLeft: theme.spacing(1)
            }
        }
    })
);

const RatingStar = ({ value }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Rating name="size-large" defaultValue={value} size="medium" readOnly />
            <p> {value} out of 5</p>
        </div>
    );
};

export default RatingStar;
