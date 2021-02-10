import React from 'react'
import {Button as MuiButton} from '@material-ui/core'
import { Link } from '@material-ui/icons'

export default function Button(props) {

    const {text, variant, color, size,onCLick, url, ...other} = props

    return (
        
        <MuiButton
        variant={variant || "contained"}
        color={color || "primary"}
        size={size || "large"}
        onCLick={onCLick}
        {...other}
        >{text}</MuiButton>
       
    )
}
