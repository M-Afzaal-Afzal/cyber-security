import React from 'react';
import {AppBar, Box, Button, Container, makeStyles, Switch, Toolbar} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectIsDarkMode, toggleDarkMode} from "../../store/darkMode/darkModeSlice";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    leftIconsContainer: {
        textAlign: "left",
    },
    rightIconsContainer: {
        textAlign: "right",

    },
    centerIconsContainer: {
        textAlign: "center",
    },
    imageContainer: {
        position: 'relative',
        width: '200px',
        height: '50px',
    }
}))

const Header = () => {

    const classes = useStyles();

    // <!--Start of Tawk.to Script-->
    // <script type="text/javascript">
    //     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    //     (function(){
    //     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    //     s1.async=true;
    //     s1.src='https://embed.tawk.to/6088b57a5eb20e09cf373a76/1f4b09pkj';
    //     s1.charset='UTF-8';
    //     s1.setAttribute('crossorigin','*');
    //     s0.parentNode.insertBefore(s1,s0);
    // })();
    // </script>
    // <!--End of Tawk.to Script-->

    const isDarkMode = useSelector(selectIsDarkMode);

    const dispatch = useDispatch();

    const darkModeHandler = () => {
        dispatch(toggleDarkMode());
    }

    return (
        <AppBar color={'default'} elevation={5} position={'fixed'}>
            <Container maxWidth={'lg'}>
                <Toolbar color={'gray'} disableGutters>

                    {/* Left Icons*/}

                    <Box className={`${classes.grow} ${classes.leftIconsContainer}`}>
                        <Box className={classes.imageContainer}>
                            <Image alt={'Cyber Security'} src={'/logoh.png'} layout={'fill'} objectFit={'cover'}/>
                        </Box>
                    </Box>

                    {/* Center Icons*/}

                    <Box className={`${classes.grow} ${classes.centerIconsContainer}`}>
                        <Button>
                            HOME
                        </Button>
                        <Button>
                            CONTACT US
                        </Button>
                    </Box>

                    {/* Right Icons*/}

                    <Box className={`${classes.grow} ${classes.rightIconsContainer}`}>
                        <Switch
                            color={'primary'}
                            checked={isDarkMode}
                            onChange={darkModeHandler}
                            name="Dark Mode Switch"
                            inputProps={{ 'aria-label': 'Dark Mode Switch' }}
                        />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
