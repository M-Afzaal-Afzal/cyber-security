import React from 'react';
import {Box, Container, IconButton, makeStyles, Typography} from "@material-ui/core";
import HeadingWithDivider from "../Universal/HeadingWithDivider";
import {Facebook, Instagram, LinkedIn, Twitter} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    contactusSection: {
        background: theme.palette.primary.main,
        padding: '8rem 0'
    },
    contactTextContainer: {
        maxWidth: '50rem',
        margin: '3rem auto 0'
    },
    contactText: {
        color: 'white'
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

const ContactusSection = () => {

    const classes = useStyles();

    return (
        <Box id={'contactus'} className={classes.contactusSection}>
            <Container maxWidth={'lg'}>

                <Box>
                    <HeadingWithDivider white heading={'Contact Us'}/>
                </Box>

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

                <Box className={classes.contactTextContainer}>
                    <Typography align={'center'} className={classes.contactText} variant={'body1'}>
                        Contact us on the social platform of your choice. You can also contact us by using the contact
                        us chat button available on the bottom right corner of the page.
                    </Typography>
                </Box>


            </Container>
        </Box>
    );
};

export default ContactusSection;
