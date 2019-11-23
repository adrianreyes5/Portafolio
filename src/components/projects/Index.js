import React from 'react'
import ZmovieImg from '../../assets/projects/zmovie.png'
import Lunches from '../../assets/projects/lunches.png'
import CableUnet from '../../assets/projects/cableunet.png'

import { Grid, Title, BorderTop } from './styles'

import { ProjectCards as Card } from '../utilities/Card'

export const Projects = () => {
    return (
        <>
            <BorderTop />
            <Title>Observa los proyectos en los que he estado trabajando</Title>
            <Grid>
                <Card
                    movie={ZmovieImg}
                    title={"Zmovie"}
                    desc={
                        "Practicando React.js consumiendo la API pública de OMDB " +
                        "para consultar peliculas y series del momento. Tambien se  " +
                        "puede observar la descripción de cada articulo utilizando React Router."
                    }
                    refer={"Ir al repositorio"}
                />
                <Card
                    movie={Lunches}
                    title={"Jornada de almuerzos"}
                    desc={
                        "Proyecto basado en crear multíples recetas de comida aleatorias consultando los " +
                        "ingredientes en una bodega (BBDD). Si falta algun ingrediente, la receta " +
                        "queda en espera (Laravel Queues) hasta ver disponibilidad del " +
                        "ingrediente en una tienda virtual (API pública)."
                    }
                    refer={"Ir al repositorio"}
                />
                <Card
                    movie={CableUnet}
                    title={"Cable Unet"}
                    desc={"Proyecto universitario que trata de simular un sistema web para administrar paquetes de " +
                        "de servicios que contienen internet, cable o telefonía. La creación de cada paquete es dinamica, tambien" +
                        "como los planes para cada servicio. Se genera una factura para cada usuario que suscriba un paquete y " +
                        "es posible tambien hacer solicitues para cambios de paquete."}
                    refer={"Ir al repositorio"}
                />
                {/* <Card
                    movie={ZmovieImg}
                    title={"Zmovie"}
                    desc={"Lista de peliculas consumiendo la API OMDB"}
                    refer={"Ir al repositorio"}
                /> */}
            </Grid>
        </>
    )
}