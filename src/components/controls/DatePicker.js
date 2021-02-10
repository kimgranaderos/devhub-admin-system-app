import React from 'react'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns'

export default function DatePicker(props) {

     const convertDefEventPara =(name, value) => ({
        target: {
            name, value
        }
    }) 

    const {name, label , value, onChange} = props
    return (
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
           <KeyboardDatePicker autoOk  variant="inline" inputVariant="outlined" 
           label={label}
           format="MMM/dd/yyyy"
           name={name}
           value={value}
           onChange={date =>onChange(convertDefEventPara(name, date))}>
           </KeyboardDatePicker>
       </MuiPickersUtilsProvider>
    )
}
