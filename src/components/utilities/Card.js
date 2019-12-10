import React from 'react'
import {
    Card,
    CardImg,
    Img,
    CardFooter,
    TitleFooter,
    DescFooter,
    Button,
    Anchor,
    ImgSkillInline,
    DecButtons
} from '../projects/styles'

import ScrollAnimation from 'react-animate-on-scroll'

export const ProjectCards = (props) => {

    const { projectImg,
        title,
        desc,
        refer,
        web,
        linkWeb,
        target,
        skill,
        linkSkill } = props

    return (
        <Card>
            <ScrollAnimation
                animateIn='zoomIn'
                animateOnce={true}
            >
                <CardImg>
                    <Img src={projectImg} alt="img" />
                </CardImg>
                <CardFooter>
                    <TitleFooter>
                        <h2>{title}</h2>
                    </TitleFooter>
                    <DescFooter>
                        <small>{desc}</small>
                    </DescFooter>
                    <DecButtons>
                        <Button>
                            <Anchor href="">{refer}</Anchor>
                        </Button>
                        {web && (
                            <Button>
                                <Anchor href={linkWeb} target={target}>{web}</Anchor>
                            </Button>
                        )}
                        <ImgSkillInline>
                            <a href={linkSkill} target="_blank">
                                <img src={skill} width={25} height={25} alt="" />
                            </a>
                        </ImgSkillInline>
                    </DecButtons>
                </CardFooter>
            </ScrollAnimation>
        </Card>
    )
}