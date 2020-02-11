import LinearProgress from "@material-ui/core/LinearProgress";
import { lighten, withStyles } from "@material-ui/core/styles";

const RatingBar = withStyles({
    root: {
        height: 20,
        backgroundColor: lighten("#FFFFFF", 0.5),
        border: "1px solid pink"
    },
    bar: {
        backgroundColor: "#ff6c5c"
    }
})(LinearProgress);

export default RatingBar;
