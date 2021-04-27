import React from 'react';
import {Box} from "@material-ui/core";
import HeroSection from "../src/components/HeroSection/HeroSection";
import FeatureSection from "../src/components/FeatureSection/FeatureSection";
import HelpSection from "../src/components/HelpSection/HelpSection";
import WorkSection from "../src/components/WorkSection";
import TeamSection from "../src/components/TeamSection";

const Index = () => {
    return (
        <Box>
            <HeroSection/>
            <FeatureSection/>
            <HelpSection/>
            <WorkSection/>
            <TeamSection/>
        </Box>
    );
}

export default Index;