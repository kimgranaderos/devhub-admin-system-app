import { Checkbox, Grid } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import {useForm, Form} from '../components/useForm';
import Controls from '../components/controls/Controls';
import * as employeeService from "../services/employeeService";
import { validate } from '@material-ui/pickers';


const genderItems = [
    {id:'male', title:'Male'},
    {id:'female', title:'Female'},
    {id:'other', title:'Other'},
]


const initialFValues = {
    id: 0,
    firstName:'',
    suffix: '',
    lastName: '',
    email: '',
    children:'',
    nationality:'',
    country:'',
    zipCode:'',
    dateOfBirth: new Date(),
    religion:'',
    telephone:'',
    mobileNo: '',
    gender: 'male',
    maritalstatusId: '',
    bdoAccount:'',
    ewAccount:'',
    presentAddress:'',
    currentAddress:'',
    personcoe:'',
    addresscpcoe:'',
    contactpcoe:'',
    hireDate: new Date(),
    isPermanent: false,
    results: [],
}
export default function EmployeesForm() {

    const validate = (fieldValues = values) => {
        let temp = {...errors}
         if('firstName' in fieldValues)
        temp.firstName = fieldValues.firstName ? "" : "This field is required."
       // temp.suffix  = values.suffix ? "" : "This field is required."
         if('lastName' in fieldValues)
        temp.lastName = fieldValues.lastName ? "" : "This field is required."
          if('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
          if('children' in fieldValues)
        temp.children = fieldValues.children ? "" : "This field is required."
          if('nationality' in fieldValues)
        temp.nationality = fieldValues.nationality ? "" : "This field is required."
          if('country' in fieldValues)
        temp.country = fieldValues.country ? "":"This field is required."
          if('zipCode' in fieldValues)
        temp.zipCode = fieldValues.zipCode?"":"This field is required."
          if('religion' in fieldValues)
        temp.religion = fieldValues.religion?"":"This field is required."
          if('telephone' in fieldValues)
        temp.telephone = fieldValues.telephone?"":"This field is required"
          if('mobileNo' in fieldValues)
        temp.mobileNo = fieldValues.mobileNo.length > 10 && fieldValues.mobileNo.length < 12? "": "Minimum 11 numbers required."
          if('maritalstatusId' in fieldValues)
        temp.maritalstatusId = fieldValues.maritalstatusId.length != 0  ? "":"This field is required."
          if('bdoAccount' in fieldValues)
        temp.bdoAccount = fieldValues.bdoAccount?"":"This field is required."
          if('ewAccount' in fieldValues)
        temp.ewAccount = fieldValues.ewAccount?"":"This field is required."
          if('presentAddress' in fieldValues)
        temp.presentAddress = fieldValues.presentAddress?"":"This field is required."
          if('currentAddress' in fieldValues)
        temp.currentAddress = fieldValues.currentAddress?"":"This field is required."
          if('personcoe' in fieldValues)
        temp.personcoe = fieldValues.personcoe?"":"This field is required."
          if('addresscpcoe' in fieldValues)
        temp.addresscpcoe = fieldValues.addresscpcoe?"":"This field is required."
          if('contactpcoe' in fieldValues)
        temp.contactpcoe = fieldValues.contactpcoe.length >10 && fieldValues.contactpcoe.length < 12? "" : "Minimum 11 numbers required."
        setErrors({
            ...temp
        })
        if(fieldValues == values)
        return Object.values(temp).every(x => x == "")
    }

    const {values, 
            setValues,
            errors,
            setErrors,
            handleInputChange,
        } = useForm(initialFValues, true, validate)

 

    const handlePost = e => {
        e.preventDefault()
    }
    
    const handleSubmit = e  => {
        e.preventDefault()
        if(validate())
        employeeService.insertEmployee(values)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container >
                <Grid item xs={6}>
                    
                <Controls.Input 
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}/>

                <Controls.Input 
                   placeholder="Optional"
                   multiline
                   label="Suffix."
                   name='suffix'
                   value={values.suffix}
                   onChange={handleInputChange}
                    error={errors.suffix}/>

                <Controls.Input 
                   label="Last Name"
                   name='lastName'
                   value={values.lastName}
                   onChange={handleInputChange}
                    error={errors.lastName}/>

                <Controls.Input 
                   label="Email"
                   name='email'
                   value={values.email}
                   onChange={handleInputChange}
                   error={errors.email}/>

                <Controls.Input 
                   label="Present Address"
                   name='presentAddress'
                   value={values.presentAddress}
                   onChange={handleInputChange}
                    error={errors.presentAddress}/>

                <Controls.Input 
                   label="Current Address"
                   name='currentAddress'
                   value={values.currentAddress}
                   onChange={handleInputChange}
                    error={errors.currentAddress}/>

                <Controls.Input 
                   maxLength = "11"
                   label="Contact No."
                   name='mobileNo'
                   value={values.mobileNo}
                   onChange={handleInputChange}
                   error={errors.mobileNo}/>

                <Controls.RadioGroup 
                    label="Gender"
                    name="gender" 
                    value={values.gender} 
                    onChange={handleInputChange}
                    items={genderItems}/>

                <Controls.Select 
                    label="Marital Status"
                    name="maritalstatusId"
                    value={values.maritalstatusId}
                    onChange={handleInputChange}
                    options={employeeService.getMaritalStatusCollection()}
                    error={errors.maritalstatusId}
                    /> 

                <Controls.DatePicker 
                    label="Hire Date"
                    name="hireDate"
                    value={values.hireDate}
                    onChange={handleInputChange}/>

                <Controls.CheckBox
                    label="Permanent Employee"
                    name="isPermanent"
                    value={values.isPermanent}
                    onChange={handleInputChange}
                    />

                <Controls.Button 
                    type="submit"
                    text="Submit"/>

                </Grid>

                <Grid item xs={6}>
                <Controls.Input 
                   label="Children"
                   name='children'
                   value={values.children}
                   onChange={handleInputChange}
                    error={errors.children}/>

                <Controls.Input 
                   label="Nationality"
                   name='nationality'
                   value={values.Nationality}
                   onChange={handleInputChange}
                    error={errors.nationality}/>

                <Controls.Input 
                   label="Country"
                   name='country'
                   value={values.country}
                   onChange={handleInputChange}
                    error={errors.country}/>   

                <Controls.Input 
                   label="Zip Code"
                   name='zipCode'
                   value={values.zipCode}
                   onChange={handleInputChange}
                    error={errors.zipCode}/>    

                <Controls.DatePicker 
                   label="Date Of Birth"
                   name='dateOfBirth'
                   value={values.dateOfBirth}
                   onChange={handleInputChange}/>

                <Controls.Input 
                   label="Religion"
                   name='religion'
                   value={values.religion}
                   onChange={handleInputChange}
                    error={errors.religion}/>   

                <Controls.Input 
                   label="Telephone"
                   name='telephone'
                   value={values.telephone}
                   onChange={handleInputChange}
                    error={errors.telephone}/>

                <Controls.Input 
                   label="BDO Account"
                   name='bdoAccount'
                   value={values.bdoAccount}
                   onChange={handleInputChange}
                    error={errors.bdoAccount}/>

                <Controls.Input 
                   label="East West Account"
                   name='ewAccount'
                   value={values.ewAccount}
                   onChange={handleInputChange}
                    error={errors.ewAccount}/>   

                <Controls.Input 
                   label="Name of Person in Case of Emergency:"
                   name='personcoe'
                   value={values.personcoe}
                   onChange={handleInputChange}
                    error={errors.personcoe}/>

                <Controls.Input 
                   fullWidth
                   label="Address of Contact Person in Case of Emergency:"
                   name='addresscpcoe'
                   value={values.addresscpcoe}
                   onChange={handleInputChange}
                    error={errors.addresscpcoe}/>

                <Controls.Input 
                   label="Contact No. of Person in Case of Emergency:"
                   name='contactpcoe'
                   value={values.contactpcoe}
                   onChange={handleInputChange}
                    error={errors.contactpcoe}/>

                </Grid>

            </Grid>
        </Form>
    )
}
