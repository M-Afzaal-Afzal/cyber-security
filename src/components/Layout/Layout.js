import React, {useEffect} from 'react';
import Header from "./Header";
// import Footer from "./Footer";
import {makeStyles, Paper} from "@material-ui/core";
import darkTheme from "../../theme/DarkTheme";
import lightTheme from "../../theme/LightTheme";
import {ThemeProvider} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import {selectIsDarkMode} from "../../store/darkMode/darkModeSlice";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    mainPaperContainer: {
        width: '100%',
        minHeight: '100vh',
        border: '0',
        boxShadow: 'none',
        borderRadius: '0',
    },
    toolbarMargin: {
        ...theme.mixins.toolbar
    }
}))

const Layout = ({children}) => {

    useEffect(() => {

        //     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/6088b57a5eb20e09cf373a76/1f4b09pkj';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();

    }, []);


    const classes = useStyles();

    const isDarkMode = useSelector(selectIsDarkMode);

    return (
        <>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <Paper className={classes.mainPaperContainer}>
                    <Header/>
                    <div className={classes.toolbarMargin}/>
                    {children}
                    <Footer/>
                </Paper>

                {/* in future if we may have footer we will use that */}

                {/*<Footer/>*/}

            </ThemeProvider>

        </>
    );
};

export default Layout;
