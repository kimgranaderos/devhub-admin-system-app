import { FormControl, FormControlLabel, Checkbox as MuiCheckBox } from '@material-ui/core'
import React from 'react'

export default function CheckBox(props) {
    const {name, label, value, onChange} = props

    const convertDefEventPara =(name, value) => ({
        target: {
            name, value
        }
    }) 
    
    return (
        <div>
            <FormControl>
                <FormControlLabel
                control={<MuiCheckBox 
                name={name}
                color="primary"
                checked={value}
                onChange={ e => onChange(convertDefEventPara(name, e.target.checked))}/>}
                label={label}
                />
            </FormControl>
        </div>
    )
}
