import React from 'react'
import { ZoomIcon } from '../skills/styles'

export const ImageSkill = ({ path }) => {
    return (
        <ZoomIcon>
            <img src={path} alt="img" width={80} height={76} />
        </ZoomIcon>
    )
}