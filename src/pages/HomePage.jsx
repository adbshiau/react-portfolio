import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import HeroSection from '../components/HeroSection/HeroSection';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';

export default function HomePage() {
    return (
        <>
        <PageHeader/>
        <HeroSection/>
        <About/>
        <Skills/>
        <Portfolio/>
        </>
    )
}