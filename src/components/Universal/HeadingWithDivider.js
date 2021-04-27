import React from 'react';
import {Box, Divider, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    dividerContainer: {
        padding: '3rem',
        maxWidth: '35rem',
        textAlign: 'center',
        margin: 'auto'
    },
}))

const HeadingWithDivider = ({heading}) => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <Typography variant={'h1'} align={'center'}>{heading}</Typography>
            </Box>
            {/*divider*/}
            <Box className={classes.dividerContainer}>
                <Divider/>
            </Box>
        </>
    );
};

export default HeadingWithDivider;
