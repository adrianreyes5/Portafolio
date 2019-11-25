import React from 'react'
import { FaFacebookF, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import {
    Footer as Container,
    Div, BorderBottom,
    IconContainer,
    IconsList,
    InconAnchor,
    Span
} from './styles'

import { useTranslation } from "react-i18next";
import ScrollableAnchor from 'react-scrollable-anchor'

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <ScrollableAnchor id={'Contact'}>
            <Container>
                <Div>
                    <IconContainer>
                        <IconsList> <InconAnchor href="http://facebook.com/adrian.patinoreyes"><FaFacebookF size={32}></FaFacebookF></InconAnchor></IconsList>
                        <IconsList> <InconAnchor href="www.linkedin.com/in/adrian-reyes-0511"><FaLinkedin size={32}></FaLinkedin></InconAnchor></IconsList>
                        <IconsList> <InconAnchor href="https://github.com/adrianreyes5"><FaGithub size={32}></FaGithub></InconAnchor></IconsList>
                        <IconsList> <InconAnchor href="https://www.instagram.com/adrianreyes5"><FaInstagram size={32}></FaInstagram></InconAnchor></IconsList>
                    </IconContainer>
                </Div>
                <Div>
                    <Span>{t('Contact me')}</Span>
                </Div>
                <BorderBottom />
                <Div>
                    <Span>{'©2019 - Adrian Reyes'}</Span>
                </Div>
            </Container>
        </ScrollableAnchor>
    )
}