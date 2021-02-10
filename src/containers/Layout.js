import React from 'react'
import {Header,
    SideMenu,
    Content} from './index'
import {CssBaseline, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    appMain: {
    paddingLeft: '250px',
    width: '100%'
  },
})

export default function Layout(props) {
    const classes = useStyles();

    return (
        <div>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
         <Content />   
      </div>
      <CssBaseline />
    </div>
    )
}
