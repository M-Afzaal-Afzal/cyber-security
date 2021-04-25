import {Button} from "@material-ui/core";

const {withStyles} = require("@material-ui/core");

const RoundedButton = withStyles((theme) => ({
    root: {
        borderRadius: '25px',
    },
}))(Button);

export default RoundedButton;