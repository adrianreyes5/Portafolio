import React from 'react'
import Node from '../../assets/skills/nodejs.png'
import Laravel from '../../assets/skills/laravel.png'
import Git from '../../assets/skills/git.png'
import PHP from '../../assets/skills/php.png'
import CSS from '../../assets/skills/css.png'
import ReactJS from '../../assets/skills/react.png'
import JS from '../../assets/skills/js.png'
import Bootstrap from '../../assets/skills/bootstrap.png'
import {
    Container,
    BorderTop,
    Title,
    GridRow,
    SkillContent
} from './styles'

import { useTranslation } from "react-i18next";
import ScrollableAnchor from 'react-scrollable-anchor'

import { ImageSkill } from '../utilities/ImageSkill'

export const Skills = () => {
    const { t } = useTranslation()
    return (
        <>
            <ScrollableAnchor id={'Skills'}>
                <BorderTop></BorderTop>
            </ScrollableAnchor>
            <Container>
                <Title>
                    <h1>{t('Skills')}</h1>
                </Title>
                <GridRow>
                    <ImageSkill path={Node} skillText={"Node.js"}  refer={"https://nodejs.org/"} />
                    <ImageSkill path={JS} skillText={"Javascript"} refer={"https://www.javascript.com/"} />
                    <ImageSkill path={ReactJS} skillText={"React.js"} refer={"https://es.reactjs.org/"} />
                    <ImageSkill path={CSS} skillText={"CSS3"} refer={"https://developer.mozilla.org/es/docs/Web/CSS"} />
                    <ImageSkill path={Laravel} skillText={"Laravel"} refer={"https://laravel.com/"} />
                    <ImageSkill path={PHP} skillText={"PHP"} refer={"https://www.php.net/manual/es/intro-whatis.php"} />
                    <ImageSkill path={Bootstrap} skillText={"Bootstrap 4"} refer={"https://getbootstrap.com/"} />
                    <ImageSkill path={Git} skillText={"GitHub"} refer={"https://github.com/"} />
                    <SkillContent>
                        {t('About the website')}
                    </SkillContent>
                </GridRow>
            </Container >
        </>
    )
}