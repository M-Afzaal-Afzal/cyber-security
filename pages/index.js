import React from 'react';
import {Box} from "@material-ui/core";
import HeroSection from "../src/components/HeroSection/HeroSection";
import FeatureSection from "../src/components/FeatureSection/FeatureSection";

const Index = () => {
    return (
        <Box>
            <HeroSection/>
            <FeatureSection/>
        </Box>
    );
}

export default Index;