import React from 'react';
import {Box, Button, Container, makeStyles, Typography} from "@material-ui/core";
import RoundedButton from "../Buttons/RoundedButton";

const useStyles = makeStyles(theme => ({
    heroSection: {
        background: theme.palette.gray.main,
        padding: '8rem 12rem'
    },
    heroHeadingContainer: {
        maxWidth: '40rem'
    },
    heroHeading: {
        lineHeight: '1.3',
        letterSpacing: '1.5'
    },
    heroButtonContainer: {
        marginTop: '2rem',
    },
    heroInfoContainer: {
        marginTop: '1rem',
        maxWidth: '38rem'
    }
}))

const HeroSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.heroSection}>
            <Container maxWidth={'lg'}>
                <Box className={classes.heroHeadingContainer}>
                    <Typography className={classes.heroHeading} variant={'h1'}>
                        THE BEST CHOICE FOR YOUR NEW WEBSITE
                    </Typography>
                </Box>
                <Box className={classes.heroInfoContainer}>
                    <Typography>
                        Lorem ipsum dolor sit amet,am aperiam asperiores eius eveniet iure libero magnam non numquam officiis perferendis porro qui quis sequi similique sit ullam vero, voluptatibus.
                    </Typography>
                </Box>
                <Box className={classes.heroButtonContainer}>
                    <RoundedButton size={'large'} variant={'contained'} color={'primary'}>Contact us</RoundedButton>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
