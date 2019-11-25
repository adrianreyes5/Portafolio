import React from 'react'
import { Wrapper } from '../../GlobalStyles/grid'
import { Header } from '../header/Index'
import { About } from '../about/Index'
import { Skills } from '../skills/Index'
import { Projects } from '../projects/Index'
import { Footer } from '../footer/Index'

export const CenterPanel = () => {
    return (
        <Wrapper>
            <Header />
            <About />
            <Projects />
            <Skills />
            <Footer />
        </Wrapper>
    )
}
