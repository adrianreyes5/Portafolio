import React from 'react'
import ZmovieImg from '../../assets/projects/zmovie.png'
import Lunches from '../../assets/projects/lunches.png'
import CableUnet from '../../assets/projects/cableunet.png'
import Firestore from '../../assets/projects/crudFirestore.png'

import Laravel from '../../assets/skills/laravel.png'
import PHP from '../../assets/skills/php.png'
import ReactJS from '../../assets/skills/react.png'

import { useTranslation } from "react-i18next";
import ScrollableAnchor from 'react-scrollable-anchor'

import { Grid, Title, BorderTop } from './styles'

import { ProjectCards as Card } from '../utilities/Card'

export const Projects = () => {
    const { t } = useTranslation()
    return (
        <ScrollableAnchor id={'Projects'}>
            <div>
                <BorderTop />
                <Title>{t("Look at the projects I'm working on")}</Title>
                <Grid>
                    <Card
                        projectImg={ZmovieImg}
                        title={'Zmovie'}
                        desc={t('Zmovie Description')}
                        refer={t('Go to repository')}
                        web={t('Go to page')}
                        linkWeb={'https://zmovie.herokuapp.com'}
                        target={'_blank'}
                        skill={ReactJS}
                        linkSkill={'https://es.reactjs.org/'}
                    />
                    <Card
                        projectImg={Lunches}
                        title={t('Lunch Day Title')}
                        desc={t('Lunch Day Desc')}
                        refer={t('Go to repository')}
                        web={t('Go to page')}
                        linkWeb={'http://jornada-almuerzos.herokuapp.com/'}
                        target={'_blank'}
                        skill={Laravel}
                        linkSkill={'https://laravel.com/'}
                    />
                    <Card
                        projectImg={CableUnet}
                        title={t('Cable Unet Title')}
                        desc={t('Cable Unet Desc')}
                        refer={t('Go to repository')}
                        skill={PHP}
                        linkSkill={'https://www.php.net/manual/es/intro-whatis.php'}
                    />
                    <Card
                        projectImg={Firestore}
                        title={(t('Crud Title'))}
                        desc={t('Crud Desc')}
                        refer={t('Go to repository')}
                        web={t('Go to page')}
                        linkWeb={'https://react-crud-firestore.herokuapp.com/'}
                        target={'_blank'}
                        skill={ReactJS}
                        linkSkill={'https://es.reactjs.org/'}
                    />
                </Grid>
            </div>
        </ScrollableAnchor>
    )
}