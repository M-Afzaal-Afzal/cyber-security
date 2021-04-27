import React from 'react';
import {Box} from "@material-ui/core";
import HeroSection from "../src/components/HeroSection/HeroSection";
import FeatureSection from "../src/components/FeatureSection/FeatureSection";
import HelpSection from "../src/components/HelpSection/HelpSection";
import WorkSection from "../src/components/WorkSection/WorkSection";
import TeamSection from "../src/components/TeamSection/TeamSection";
import ContactusSection from "../src/components/ContactusSection/ContactusSection";

const Index = () => {
    return (
        <Box>
            <HeroSection/>
            <FeatureSection/>
            <HelpSection/>
            <WorkSection/>
            <TeamSection/>
            <ContactusSection/>
        </Box>
    );
}

export default Index;