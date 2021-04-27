import React from 'react';
import {Box, Container, makeStyles} from "@material-ui/core";

const  useStyles = makeStyles(theme => ({
    teamSection: {
        background: theme.palette.lightGray.main,
        padding: '8rem 0'
    },
}))

const TeamSection = () => {

    const classes = useStyles();

    return (
        <Box className={classes.teamSection}>
           <Container maxWidth={'lg'}>
               lfkj
           </Container>
        </Box>
    );
};

export default TeamSection;
