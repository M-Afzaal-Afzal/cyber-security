import React from 'react';
import {Box, Container, makeStyles} from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    footer: {
        background: theme.palette.darkGray.main,
        padding: '8rem 0'
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
    }
}))

const Footer = () => {

    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Container maxWidth={'lg'}>
                <Box className={classes.footerImageContent}>
                    <Box className={classes.imageContainer}>
                        <Image priority alt={'Cyber Security'} src={'/logov.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
