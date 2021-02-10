import React from 'react'
import Employees from './pages/Employees'
import EmployeesForm from './pages/EmployeesForm'


const routes  = [
    { path: '/', exact: true, name: 'Home' },
    {path: '/employee', name: 'Employees', component: Employees},
    {path: '/employeesform', name: 'EmployeesForm', component: EmployeesForm},
]

export default routes;