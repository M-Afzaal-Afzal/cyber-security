import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import RoundedButton from "../Buttons/RoundedButton";
import {Link} from 'react-scroll';

const useStyles = makeStyles(theme => ({
    heroSection: {
        background: theme.palette.gray.main,
        padding: '8rem 12rem',
        [theme.breakpoints.down('md')]: {
            padding: '8rem 6rem',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '6rem 1rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '4rem 0',
        },
    },
    heroHeadingContainer: {
        maxWidth: '45rem',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },
    },
    heroButtonContainer: {
        marginTop: '2rem',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },
    },
    heroInfoContainer: {
        marginTop: '1rem',
        maxWidth: '38rem',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },
    }
}))

const HeroSection = () => {

    const classes = useStyles();

    return (
        <Box id={'home'} className={classes.heroSection}>
            <Container maxWidth={'lg'}>
                <Box className={classes.heroHeadingContainer}>
                    <Typography variant={'h1'}>
                        THE BEST CHOICE FOR YOUR NEW WEBSITE
                    </Typography>
                </Box>
                <Box className={classes.heroInfoContainer}>
                    <Typography variant={'body1'}>
                        Lorem ipsum dolor sit amet,am aperiam asperiores eius eveniet iure libero magnam non numquam
                        officiis perferendis porro qui quis sequi similique sit ullam vero, voluptatibus.
                    </Typography>
                </Box>
                <Box className={classes.heroButtonContainer}>
                    <RoundedButton component={Link} to={'contactus'} smooth={true} size={'large'} variant={'contained'} color={'primary'}>Contact us</RoundedButton>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
