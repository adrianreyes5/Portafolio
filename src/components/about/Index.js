import React from 'react'
import ProfilePhoto from '../../assets/Adrian.jpg'
import {
    ProfileImg,
    Panel,
    ProfileContent,
    Content,
    Title
} from './styles'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'

import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation()
    return (

        <ScrollableAnchor id={'About Me'}>
            <Panel>
                <ProfileContent>
                    <ScrollAnimation
                        animateIn="bounceInLeft"
                        animateOnce={true}>
                        <Content centerImg>
                            <ProfileImg src={ProfilePhoto} alt="profile-photo" />
                        </Content>
                    </ScrollAnimation>
                    <Content centerText>
                        <ScrollAnimation
                            animateIn="bounceInRight"
                            animateOnce={true}
                            initiallyVisible={true}
                        >
                            <Title name>Adrian Reyes</Title>
                            <Title occupation>{t('Web Developer')}</Title>
                        </ScrollAnimation>
                    </Content>
                    <Content contentGrow>
                        <ScrollAnimation
                            animateIn="bounceInRight"
                            animateOnce={true}
                            initiallyVisible={true}
                        >
                            {t('Summary')}
                        </ScrollAnimation>
                    </Content>
                </ProfileContent>
            </Panel>
        </ScrollableAnchor>
    )
}