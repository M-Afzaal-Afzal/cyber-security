import React from 'react';
import {Box, Container, Divider, IconButton, makeStyles} from "@material-ui/core";
import Image from "next/image";
import {Facebook, Instagram, LinkedIn, Twitter} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    footer: {
        background: theme.palette.darkGray.main,
        padding: '8rem 0 4rem'
    },
    imageContainer: {
        width: '20rem',
        height: '20rem',
        position: 'relative',
    },
    footerImageContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerSocialMedia: {
        background: theme.palette.darkGray.main,
        padding: '.5rem'
    },
    iconsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        padding: '.5rem',
    },
    icon: {
        color: 'white',
        border: '1px solid white'
    }
}))

const Footer = () => {

    const classes = useStyles();

    return (
        <Box>

            <Box className={classes.footer}>
                <Container maxWidth={'lg'}>
                    <Box className={classes.footerImageContent}>
                        <Box className={classes.imageContainer}>
                            <Image priority alt={'Cyber Security'} src={'https://res.cloudinary.com/afzaal1721/image/upload/v1619584629/Logov_ov2lqe.png'} layout={'fill'}
                                   objectFit={'cover'}/>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Divider/>
            {/* bottom social media buttons*/}

            <Box className={classes.footerSocialMedia}>
                <Container maxWidth={'lg'}>
                    <Box className={classes.iconsContainer}>
                        <Box className={classes.iconContainer}>
                            <IconButton className={classes.icon} aria-label="facebook">
                                <Facebook/>
                            </IconButton>
                        </Box>
                        <Box className={classes.iconContainer}>
                            <IconButton className={classes.icon} aria-label="facebook">
                                <Instagram/>
                            </IconButton>
                        </Box>
                        <Box className={classes.iconContainer}>
                            <IconButton className={classes.icon} aria-label="facebook">
                                <Twitter/>
                            </IconButton>
                        </Box>
                        <Box className={classes.iconContainer}>
                            <IconButton className={classes.icon} aria-label="facebook">
                                <LinkedIn/>
                            </IconButton>
                        </Box>

                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
