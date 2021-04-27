import React from 'react';
import {Box, Button, Container, Grid, LinearProgress, makeStyles, Typography} from "@material-ui/core";
import HeadingWithDivider from "../Universal/HeadingWithDivider";
import Image from 'next/image';
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    helpSection: {
        background: theme.palette.lightGray.main,
        padding: '8rem 0'
    },
    HelpSectionContent: {
        marginTop: '3rem',
    },
    helpSectionTextContainer: {
        marginBottom: '3rem',
    },
    progressContainer: {
        margin: '2rem',
    },
    progressLabelContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearProgressContainer: {
        maxWidth: '90%',
    },
    linearProgressLabelContainer: {
        // marginLeft: 'calc(100% - 250px)',
        // zIndex: 999,
    },
    linearProgressLabel: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.primary.main,

        padding: '.5rem',
        color: 'white',
        borderRadius: '50%',
        height: '50px',
        width: '50px',
    },
    progressTitle: {
        [theme.breakpoints.down('xs')]: {
            marginBottom: '.5rem',
        }
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '3rem',
            maxWidth: '30rem',
            height: '50rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '1.5rem',
            maxWidth: '30rem',
            height: '35rem',
        },
    },
    imageBoxContainer: {
        padding: '0 2rem',
        [theme.breakpoints.down('sm')]: {
            padding: 0
        }
    },
    imageLabel: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        height: '80px',
        background: theme.palette.darkGray.main,
        padding: '0 0 0 1.3rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    imageBtns: {
        display: 'Grid',
        height: '100%',
        gridTemplateRows: '1fr 1fr'
    },
    sideBtn: {
        height: '100%',
        borderRadius: '0',
        width: '100%',
    },
    sideBtnFirst: {
        borderBottom: '.5px solid #fff',
    },
    sideBtnLast: {
        borderTop: '.5px solid #fff',

    },
    imageBtnsContainer: {
        height: '100%',
        overflow: 'hidden',
    },
}))

const HelpSection = () => {

    const classes = useStyles();

    const progressBarsArr = [
        {
            id: 1,
            title: 'Mobile Design',
            value: '80'
        },
        {
            id: 2,
            title: 'UI/UX Design',
            value: '85'
        },
        {
            id: 3,
            title: 'Content Marketing',
            value: '95'
        },
        {
            id: 4,
            title: 'Growth Hacking',
            value: '88'
        },
        {
            id: 5,
            title: 'Wordpress',
            value: '90'
        },

    ]

    return (
        <Box className={classes.helpSection}>
            <Container maxWidth={'lg'}>

                <HeadingWithDivider heading={'HOW WE CAN HELP'}/>

                <Grid className={classes.HelpSectionContent} container align={'center'} justify={'center'}
                      style={{width: '100%'}}>
                    <Grid item xs={12} md={6}>
                        {/* side text of help section*/}
                        <Box className={classes.helpSectionTextContainer}>
                            <Typography variant={'body1'} align={'left'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam delectus
                                illum iure officiis quas rerum soluta voluptates! Deleniti doloremque doloribus minima
                                mollitia voluptatibus. Aspernatur dolorum ex facere inventore magnam?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet blanditiis
                                dignissimos eveniet excepturi magni maxime minus, molestiae molestias mollitia nobis
                                officiis pariatur perspiciatis quisquam quos sapiente tempora unde velit.
                            </Typography>
                        </Box>

                        {/* progress bars */}

                        {progressBarsArr.map(({id, title, value}) => (
                            <Box key={id} className={classes.progressContainer}>
                                <Box className={classes.progressTitle}>
                                    <Typography align={'left'} variant={'h4'}>{title}</Typography>
                                </Box>
                                <Box className={classes.progressLabelContainer}>
                                    <Box className={classes.linearProgressContainer}>
                                        <LinearProgress variant={'determinate'} value={+value}/>
                                    </Box>
                                    <Box className={classes.linearProgressLabelContainer}>
                                        <Typography className={classes.linearProgressLabel} variant={'body1'}>
                                            {value}%
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))
                        }

                    </Grid>

                    <Grid item xs={12} md={6} className={classes.imageBoxContainer}>
                        {/*image section */}
                        <Box className={classes.imageContainer}>
                            <Image priority alt={'achievement image'} layout={'fill'} objectFit={'cover'}
                                   src={'/achievement/1.jpg'}/>

                            {/* label of images*/}

                            <Box className={classes.imageLabel}>
                                <Box>
                                    <Box>
                                        <Typography align={'left'} variant={'h5'}>
                                            Awwards Winning
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography align={'left'} variant={'h5'}>
                                            Business
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box className={classes.imageBtnsContainer}>
                                    <Box className={classes.imageBtns}>

                                        <Box>
                                            <Button color={'primary'}
                                                    className={`${classes.sideBtn} ${classes.sideBtnFirst}`}
                                                    variant={'contained'}>
                                                <ArrowForwardIosOutlined/>
                                            </Button>
                                        </Box>
                                        <Box>
                                            <Button color={'primary'}
                                                    className={`${classes.sideBtn} ${classes.sideBtnLast}`}
                                                    variant={'contained'}>
                                                <ArrowBackIosOutlined/>
                                            </Button>
                                        </Box>

                                    </Box>
                                </Box>

                            </Box>

                        </Box>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default HelpSection;
