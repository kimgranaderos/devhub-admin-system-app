import React, {useState} from 'react'
import EmployeesForm from './EmployeesForm'
import PageHeader from '../components/PageHeader'
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone'
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core'
import useTable from '../components/useTable'
import * as employeeService from '../services/employeeService'
import Controls from '../components/controls/Controls'
import { Add, Search } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
        pageContent: {
            margin: theme.spacing(1),
            padding: theme.spacing(3)
        
        },
        searchInput: {
            width:'75%'
        },
        newButton: {
            position: 'absolute',
            right: '10px'
        }
}))

const headCells = [
    {id: 'firstName', label: 'Employee Name'},
    {id: 'mobileNo', label: 'Mobile Number'},
    {id: 'email', label: 'Email Address (Personal)'},
    {id: 'maritalstatusId', label: 'Marital Status',disableSorting: true}
]


export default function Employees() {
    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees());
    const [filterFn, setFilterFn] = useState({fn: items => {return items; } });

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingandSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e =>{
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                return items;
                else
                  return items.filter(x => x.firstName.toLowerCase().includes(target.value) || x.email.toLowerCase().includes(target.value))
            }
        })
    }

    return (
        <>
         <PageHeader 
             title="All Employees"
             subTitle="Form design with validation"
             icon={<PeopleOutlineTwoTone fontSize="large"/>}
             />
            <Paper className={classes.pageContent}>
                {/* <EmployeesForm /> */}
                <Toolbar>
                    <Controls.Input
                    label = "Search Employees"
                    className={classes.searchInput}
                    InputProps={{
                            startAdornment:(<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                            onChange={handleSearch}
                        />
                   <Controls.ButtonLink className={classes.newButton}
                   url='/employeesform' name='Add New'/>       
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingandSorting().map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.firstName + " " + item.lastName}</TableCell>
                                    <TableCell>{item.mobileNo}</TableCell>
                                    <TableCell>{item.email}</TableCell>    
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
    )
}
