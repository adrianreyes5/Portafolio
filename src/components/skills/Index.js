import React from 'react'
import Node from '../../assets/skills/nodejs.png'
import Laravel from '../../assets/skills/laravel.png'
import Git from '../../assets/skills/git.png'
import PHP from '../../assets/skills/php.png'
import CSS from '../../assets/skills/css.png'
import ReactJS from '../../assets/skills/react.png'
import JS from '../../assets/skills/js.png'
import Bootstrap from '../../assets/skills/bootstrap.png'
import { Container, BorderTop, Title, GridRow, SkillContent } from './styles'

import { ImageSkill } from '../utilities/ImageSkill'

export const Skills = () => {
    return (
        <>
            <BorderTop></BorderTop>
            <Container>
                <Title>
                    <h1>Skills</h1>
                </Title>
                <GridRow>
                    <ImageSkill path={Node} />
                    <ImageSkill path={JS} />
                    <ImageSkill path={ReactJS} />
                    <ImageSkill path={CSS} />
                    <ImageSkill path={Laravel} />
                    <ImageSkill path={PHP} />
                    <ImageSkill path={Bootstrap} />
                    <ImageSkill path={Git} />
                    <SkillContent>
                        {'Construi el sitio que actualmente estas viendo usando React.js, styled components para css, i18n y Heroku deploy. Esta diseñado para mostrar mi diseño y habilidades como desarrollador. '}
                    </SkillContent>
                </GridRow>
            </Container >
        </>
    )
}