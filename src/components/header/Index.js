import React from 'react'
import Logo from '../../assets/logo.png'

import { HeaderNav, Option, Anchor, ListMenu } from './styles'

export const Header = () => {
    return (
        <>
            <HeaderNav>
                <ListMenu>
                    <Option><Anchor href="/">PROYECTOS</Anchor></Option>
                    <Option><Anchor href="/">SKILLS</Anchor></Option>
                    <Option><Anchor href="/">SOBRE MI</Anchor></Option>
                    <Option><Anchor href="/">CONTACTO</Anchor></Option>
                </ListMenu>
            </HeaderNav>
        </>
    )
}