import React from 'react';
import {AppBar, Container, IconButton, Toolbar} from "@material-ui/core";
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';

const Header = () => {
    return (
        <AppBar color={'primary'} position={'fixed'}>
            <Container maxWidth={'lg'}>
                <Toolbar color={'gray'} disableGutters>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <DehazeOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
