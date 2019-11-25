import React, { useEffect, useState } from 'react'
// import Logo from '../../assets/logo.png'
import {
    HeaderNav,
    Option,
    SelectLang,
    LangOption,
    Anchor,
    ListLeft,
    ListRight,
    ListMenu
} from './styles'

import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { configureAnchors, goToTop } from 'react-scrollable-anchor'

export const Header = () => {

    const { t } = useTranslation()
    configureAnchors({ offset: -60, scrollDuration: 400, keepLastAnchorHash: false })
    goToTop()

    const handleChange = (event) => {
        const lang = event.target.value

        i18n.changeLanguage(lang)
        console.log('Current Languague is: ' + lang)
    }

    return (
        <>
            <HeaderNav>
                <ListMenu>
                    <ListLeft className="">
                        <Option rightAuto>
                            <SelectLang onChange={handleChange} >
                                <LangOption value="en">{t('English')}</LangOption>
                                <LangOption value="es">{t('Spanish')}</LangOption>
                            </SelectLang>
                        </Option>
                    </ListLeft>
                    <ListRight>
                        <Option><Anchor href="#About Me">{t('About Me')}</Anchor></Option>
                        <Option><Anchor href="#Projects">{t('Projects')}</Anchor></Option>
                        <Option><Anchor href="#Skills">{t('Skills')}</Anchor></Option>
                        <Option><Anchor href="#Contact">{t('Contact')}</Anchor></Option>
                    </ListRight>
                </ListMenu>
            </HeaderNav>
        </>
    )
}
