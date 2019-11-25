import React from 'react'
import ZmovieImg from '../../assets/projects/zmovie.png'
import Lunches from '../../assets/projects/lunches.png'
import CableUnet from '../../assets/projects/cableunet.png'

import { useTranslation } from "react-i18next";
import ScrollableAnchor  from 'react-scrollable-anchor'

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
                    />
                    <Card
                        projectImg={Lunches}
                        title={t('Lunch Day Title')}
                        desc={t('Lunch Day Desc')}
                        refer={t('Go to repository')}
                    />
                    <Card
                        projectImg={CableUnet}
                        title={t('Cable Unet Title')}
                        desc={t('Cable Unet Desc')}
                        refer={t('Go to repository')}
                    />
                    {/* <Card
                    movie={ZmovieImg}
                    title={"Zmovie"}
                    desc={"Lista de peliculas consumiendo la API OMDB"}
                    refer={"Ir al repositorio"}
                /> */}
                </Grid>
            </div>
        </ScrollableAnchor>
    )
}