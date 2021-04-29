import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import RoundedButton from "../Buttons/RoundedButton";
import {Link} from 'react-scroll';

const useStyles = makeStyles(theme => ({
    heroSection: {
        // background: theme.palette.gray.main,
        background: `linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(/hero/hero-min.jpg) center/cover fixed`,
        position: 'relative',
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
    heroHeading: {
        position: 'relative',
        color:'white',
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
    },
    heroInfo: {
        position: 'relative',
        color: 'white',
    }
}))

const HeroSection = () => {

    const classes = useStyles();

    return (
        <Box id={'home'} className={classes.heroSection}>

            <Container style={{zIndex: 10}} maxWidth={'lg'}>
                <Box className={classes.heroHeadingContainer}>
                    <Typography className={classes.heroHeading} variant={'h1'}>
                        THE BEST CHOICE FOR YOUR NEW WEBSITE
                    </Typography>
                </Box>
                <Box className={classes.heroInfoContainer}>
                    <Typography className={classes.heroInfo} variant={'body1'}>
                        Lorem ipsum dolor sit amet,am aperiam asperiores eius eveniet iure libero magnam non numquam
                        officiis perferendis porro qui quis sequi similique sit ullam vero, voluptatibus.
                    </Typography>
                </Box>
                <Box className={classes.heroButtonContainer}>
                    <RoundedButton component={Link} to={'contactus'} smooth={true} size={'large'} variant={'contained'}
                                   color={'primary'}>
                        Contact us
                    </RoundedButton>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
