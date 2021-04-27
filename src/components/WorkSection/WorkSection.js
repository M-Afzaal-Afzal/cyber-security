import React from 'react';
import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import HeadingWithDivider from "../Universal/HeadingWithDivider";
import SearchIcon from '@material-ui/icons/Search';
import BuildIcon from '@material-ui/icons/Build';
import LaunchIcon from '@material-ui/icons/Launch';
import EventNoteIcon from '@material-ui/icons/EventNote';

const useStyles = makeStyles(theme => ({
    workSection: {
        background: theme.palette.paper,
        padding: '8rem 0'
    },
    WorkTextContainer: {
        maxWidth: '50rem',
        margin: 'auto auto 4rem'
    },
    circle: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: theme.palette.primary.main,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shortCircle: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: theme.palette.darkGray.main,
        position: "absolute",
        bottom: '-15px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    entityContainer: {
        padding: '2rem',
    },
    entityTextContainer: {
        marginTop: '2.5rem',
    },
    shortCircleText: {
        color: 'white',
    },
    circleImageContainer: {
        width: '100%',
        height:'100%',
        position: 'relative',
        borderRadius: '50%',
        overflow: 'hidden',
    },
    entityIcon: {
        fontSize: 70,
        color: "white",
    }
}))

const WorkSection = () => {

    const classes = useStyles();

    const entityData = [
        {
            id: 1,
            title: 'Research',
            desc: 'lorem ljlsjf lsfj sldfj sdlfj slfkjsd lfkdsj flsfj dslkfj lsdkfj sdlfj sdlf l',
            icon: <SearchIcon className={classes.entityIcon}/>,
        }, {
            id: 2,
            title: 'Planning',
            desc: 'lorem ljlsjf lsfj sldfj sdlfj slfkjsd lfkdsj flsfj dslkfj lsdkfj sdlfj sdlf l',
            icon: <EventNoteIcon className={classes.entityIcon}/>,
        }, {
            id: 3,
            title: 'Build',
            desc: 'lorem ljlsjf lsfj sldfj sdlfj slfkjsd lfkdsj flsfj dslkfj lsdkfj sdlfj sdlf l',
            icon: <BuildIcon className={classes.entityIcon}/>,
        }, {
            id: 4,
            title: 'Launch',
            desc: 'lorem ljlsjf lsfj sldfj sdlfj slfkjsd lfkdsj flsfj dslkfj lsdkfj sdlfj sdlf l',
            icon: <LaunchIcon className={classes.entityIcon}/>,
        },
    ]

    return (
        <Box className={classes.workSection}>
            <Container maxWidth={'lg'}>
                {/*  heading wiht divider   */}
                <HeadingWithDivider heading={'How We Work'}/>

                {/* text below heading*/}
                <Box className={classes.WorkTextContainer}>
                    <Typography align={'center'} variant={'body1'}>
                        Lorem ipsum dolor sit amet ignissimos dolorum eligendi facere facilis, libero magnam mollitia
                        nam natus, neque nesciunt odit quae ullam veritatis voluptatibus?
                    </Typography>
                </Box>

                {/*    Grid for 4 process items */}

                <Grid container align={'center'} justify={'center'}>

                    {/* Entity Data */}

                    {
                        entityData.map(({id,title,desc,icon}) => (
                            <Grid key={id} md={3} sm={6} item className={classes.entityContainer}>
                                <Box className={classes.circle}>
                                    {/* circle image*/}
                                    {/*<Box className={classes.circleImageContainer}>*/}
                                    {/*    <Image layout={'fill'} objectFit={'cover'} src={imageURL}/>*/}
                                    {/*</Box>*/}
                                    <Box>
                                        {icon}
                                    </Box>

                                    {/* bottom short circle*/}
                                    <Box className={classes.shortCircle}>
                                        <Typography align={'center'} className={classes.shortCircleText} variant={'body1'}>
                                            {id}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box className={classes.entityTextContainer}>
                                    <Typography gutterBottom variant={'h4'}>
                                        {title}
                                    </Typography>
                                    <Typography variant={'body1'}>
                                        {desc}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))
                    }

                </Grid>


            </Container>
        </Box>
    );
};

export default WorkSection;
