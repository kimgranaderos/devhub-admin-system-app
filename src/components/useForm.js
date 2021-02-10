import React from 'react'
import { makeStyles } from '@material-ui/core'

export function useForm(initialFValues, validateOnChange=false, validate) {

    const [values, setValues] = React.useState(initialFValues)
    const [errors, setErrors] = React.useState({});
    const handleInputChange = e=> {
           const {name, value} = e.target
           
        setValues({
           ...values,
           [name]:value
        })
        if(validateOnChange)
        validate({[name]: value})
    } 

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1)
        }
    }
}))


export function Form(props) {

    const classes = useStyles();
    const {children, ...other} = props;
    return (
        <form className={classes.root} {...other}>
            {children}
        </form>
    )
}
