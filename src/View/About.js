import React from 'react';
import { Container } from "react-bootstrap";

import PersonalCard from "../Components/PersonalCard/PersonalCard";

function About() {
    return (
        <Container style={{ height: "calc(100vh - 56px)", display: "flex" }}>
            <PersonalCard />
        </Container>
    );
}

export default About;
