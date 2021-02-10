import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@material-ui/core'
import React from 'react'

export default function RadioGroup(props) {
    const {name, label, value, onChange, items} = props
    return (
        <FormControl component="fieldset">
                        <FormLabel component="legend">{label}</FormLabel>
                        <MuiRadioGroup row defaultValue={name} aria-label={name} name={name} value={value} onChange={onChange}>

                            {
                                items.map(
                                    (item, index) =>(
                                        <FormControlLabel key={index}  value={item.id} control={<Radio />} label={item.title} /> 
                                    )
                                )
                            } 
                        </MuiRadioGroup>
                    </FormControl>
    )
}
