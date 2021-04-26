import React from 'react';
import {Box, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExtensionIcon from '@material-ui/icons/Extension';
import SpeedIcon from '@material-ui/icons/Speed';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

const useStyles = makeStyles(theme => ({
    featureSection: {
        background: theme.palette.paper,
        padding: '8rem 0'
    },
    dividerContainer: {
        padding: '3rem',
        maxWidth: '35rem',
        textAlign: 'center',
        margin: 'auto'
    },
    featureTextContainer: {
        maxWidth: '50rem',
        margin: 'auto auto 6rem'
    },
    featureItem: {
        display: 'grid',
        maxWidth: '420px',
        gridTemplateColumns: 'auto 1fr',
        padding: '2rem',
        paddingLeft: '0',
        columnGap:'1.5rem',
        [theme.breakpoints.down('xs')]: {
            paddingRight: 0,
        }
    },
    itemIconContainer: {
        width: '65px',
        height: '65px',
        background: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
    },
    itemIcon: {
        fontSize: '40px',
        color: "white"
    }
}))

const FeatureSection = () => {

    const classes = useStyles();

    const featuresArr = [
        {
            title: 'MOBILE READY',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate fugit iusto nulla qui? Deleniti dolorum eos evenietm ullam.',
            icon: <PhoneIphoneIcon className={classes.itemIcon}/>,

        },
        {
            title: 'UNIQUE DESIGN',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate fugit iusto nulla qui? Deleniti dolorum eos evenietm ullam.',
            icon: <DesktopMacIcon className={classes.itemIcon}/>,

        },
        {
            title: 'SMOOTH ANIMATION',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate fugit iusto nulla qui? Deleniti dolorum eos evenietm ullam.',
            icon: <EqualizerIcon className={classes.itemIcon}/>,

        },
        {
            title: 'EASY CUSTOMIZE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate fugit iusto nulla qui? Deleniti dolorum eos evenietm ullam.',
            icon: <ExtensionIcon className={classes.itemIcon}/>,

        },
        {
            title: 'HIGH SPEED',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate fugit iusto nulla qui? Deleniti dolorum eos evenietm ullam.',
            icon: <SpeedIcon className={classes.itemIcon}/>,

        },
        {
            title: 'VERY QUICK SUPPORT',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate fugit iusto nulla qui? Deleniti dolorum eos evenietm ullam.',
            icon: <LiveHelpIcon className={classes.itemIcon}/>,

        },
    ]

    return (
        <Box className={classes.featureSection}>
            <Container maxWidth={'lg'}>
                {/* main heading*/}
                <Box>
                    <Typography variant={'h1'} align={'center'}>Our Awesome Features</Typography>
                </Box>
                {/*divider*/}
                <Box className={classes.dividerContainer}>
                    <Divider/>
                </Box>
                {/* feature text*/}
                <Box className={classes.featureTextContainer}>
                    <Typography align={'center'} variant={'body1'}>
                        Lorem ipsum dolor sit amet, Ab dicta eaque eum ex fuga ipsa iusto magni nam neque porro
                        praesentium ratione, reprehenderit similique sit, tempore voluptate voluptatem. Assumenda, odit.
                    </Typography>
                </Box>

                {/*    Grid for feature items     */}

                <Grid container justify={'center'} align={'center'}>

                    {
                        featuresArr.map(feature => (
                            <Grid lg={4} md={6} sm={12} item>
                                <Box className={classes.featureItem}>
                                    {/* left icon part of gridItem*/}
                                    <Box>
                                        <Box className={classes.itemIconContainer}>
                                            {feature.icon}
                                        </Box>
                                    </Box>

                                    {/* right text part of gridItem*/}
                                    <Box>
                                        {/* right text part heading container*/}
                                        <Box>
                                            <Typography gutterBottom align={'left'} variant={'h4'}>{feature.title}</Typography>
                                        </Box>

                                        {/* right text part description container*/}
                                        <Box>
                                            <Typography align={'left'} variant={'body1'}>
                                                {feature.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }

                </Grid>

            </Container>
        </Box>
    );
};

export default FeatureSection;
