import React from 'react'
import ProfilePhoto from '../../assets/Adrian.jpg'
import { ProfileImg, Panel, ProfileContent, Content, Title } from './styles'
import ScrollAnimation from 'react-animate-on-scroll'

export const About = () => {
    return (

        <Panel>
            <ProfileContent>
                <ScrollAnimation
                    animateIn="bounceInLeft"
                    initiallyVisible={true}
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
                        <Title occupation>Web Developer</Title>
                    </ScrollAnimation>
                </Content>
                <Content contentGrow>
                    <ScrollAnimation
                        animateIn="bounceInRight"
                        animateOnce={true}
                        initiallyVisible={true}
                    >

                        {'Soy desarrollador web, estudiante de ingenieria informática. Entusiasta de las tecnologías Javascript, Node.js, PHP, Laravel, etc. Quiero empezar a compartir mis conocimientos a través de esta web.'}
                    </ScrollAnimation>
                </Content>
            </ProfileContent>
        </Panel>
    )
}