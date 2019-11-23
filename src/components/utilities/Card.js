import React from 'react'
import { Card, CardImg, Img, CardFooter, TitleFooter, DescFooter, Button, Anchor } from '../projects/styles'

import ScrollAnimation from 'react-animate-on-scroll'

export const ProjectCards = (props) => {

    const { movie, title, desc, refer } = props

    return (
        <Card>
            <ScrollAnimation
                animateIn='zoomIn'
                animateOnce={true}
            >
                <CardImg>
                    <Img src={movie} alt="img" />
                </CardImg>
                <CardFooter>
                    <TitleFooter>
                        <h2>{title}</h2>
                    </TitleFooter>
                    <DescFooter>
                        <small>{desc}</small>
                    </DescFooter>
                    <Button>
                        <Anchor href="">{refer}</Anchor>
                    </Button>
                </CardFooter>
            </ScrollAnimation>
        </Card>
    )
}