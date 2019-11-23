import React from 'react'
import { FaFacebookF, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import {
    Footer as Container,
    Div, BorderBottom,
    IconContainer,
    IconsList,
    Span
} from './styles'

export const Footer = () => {
    return (
        <Container>
            <Div>
                <IconContainer>
                    <IconsList><FaFacebookF size={32}></FaFacebookF></IconsList>
                    <IconsList><FaLinkedin size={32}></FaLinkedin></IconsList>
                    <IconsList><FaGithub size={32}></FaGithub></IconsList>
                    <IconsList><FaInstagram size={32}></FaInstagram></IconsList>
                </IconContainer>
            </Div>
            <Div>
                <Span>{'Contactame si tienes un trabajo para ofrecerme o preguntarme algo!'}</Span>
            </Div>
            <BorderBottom />
            <Div>
                <Span>{'©2019 - Adrian Reyes'}</Span>
            </Div>
        </Container>
    )
}