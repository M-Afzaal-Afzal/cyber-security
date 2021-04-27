import React from 'react';
import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import HeadingWithDivider from "../Universal/HeadingWithDivider";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    teamSection: {
        background: theme.palette.lightGray.main,
        padding: '8rem 0'
    },
    teamTextContainer: {
        maxWidth: '50rem',
        margin: 'auto auto 4rem'
    },
    imageContainer: {
        width: '100%',
        height: '25rem',
        position: 'relative',
        // background: 'blue'
    },
    entityContainer: {
        padding: '2rem',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '25rem'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1rem 0'
        }
    },
    memberNameContainer: {
        marginTop: '1rem',
    },
    memberRoleContainer: {
        marginBottom: '1rem',
    }
}))

const TeamSection = () => {

    const classes = useStyles();

    const teamMembers = [
        {
            id: 1,
            imageURL: '/achievement/1.jpg',
            name: 'M Afzaal Afzal',
            title: 'Founder (CEO)',
            desc: 'Lorem ips elit. Assumenda atque dolorum molestias natus recusandae! At distinctio eius esse ex exercitationem reiciendis voluptatum.',
        }, {
            id: 2,
            imageURL: '/achievement/2.jpg',
            name: 'M Afzaal Afzal',
            title: 'Creative Director',
            desc: 'Lorem ips elit. Assumenda atque dolorum molestias natus recusandae! At distinctio eius esse ex exercitationem reiciendis voluptatum.',
        }, {
            id: 3,
            imageURL: '/achievement/3.jpg',
            name: 'M Afzaal Afzal',
            title: 'Art Director',
            desc: 'Lorem ips elit. Assumenda atque dolorum molestias natus recusandae! At distinctio eius esse ex exercitationem reiciendis voluptatum.',
        },
    ]

    return (
        <Box className={classes.teamSection}>
            <Container maxWidth={'lg'}>
                <HeadingWithDivider heading={'Meet Our Team'}/>
                <Box className={classes.teamTextContainer}>
                    <Typography align={'center'} variant={'body1'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa dolorem dolores error eum eveniet exercitationem id in incidunt ipsam ipsum libero natus nesciunt, odit, placeat quia quis reprehenderit repudiandae!
                    </Typography>
                </Box>

                {/*     Taem members pics with some description      */}

                <Grid container align={'center'} justify={'center'}>

                    {
                        teamMembers.map(({id, name, title, imageURL, desc}) => (
                            <Grid key={id} md={4} item className={classes.entityContainer}>
                                {/* team person Image container*/}
                                <Box className={classes.imageContainer}>
                                    <Image layout={'fill'} objectFit={'cover'} src={imageURL}/>
                                </Box>

                                <Box className={classes.memberNameContainer}>
                                    <Typography gutterBottom align={'left'} variant={'h6'}>
                                        {name}
                                    </Typography>
                                </Box>

                                <Box className={classes.memberRoleContainer}>
                                    <Typography align={'left'} variant={'body2'}>
                                        {title}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography align={'left'} variant={'body1'}>
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

export default TeamSection;
