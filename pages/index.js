import React from 'react';
import {Box} from "@material-ui/core";
import HeroSection from "../src/components/HeroSection/HeroSection";
import FeatureSection from "../src/components/FeatureSection/FeatureSection";
import HelpSection from "../src/components/HelpSection/HelpSection";

const Index = () => {
    return (
        <Box>
            <HeroSection/>
            <FeatureSection/>
            <HelpSection/>
        </Box>
    );
}

export default Index;