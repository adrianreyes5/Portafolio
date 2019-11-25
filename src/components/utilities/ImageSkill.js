import React from 'react'
import { ZoomIcon, SkillText } from '../skills/styles'

export const ImageSkill = ({ path, skillText, refer }) => {
    return (
        <ZoomIcon href={refer}>
            <img src={path} alt="img" width={80} height={76} />
            <SkillText>{skillText}</SkillText>
        </ZoomIcon>
    )
}