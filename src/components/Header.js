import React from 'react'
import {NotificationsNone, 
        ChatBubbleOutlineOutlined,
        PowerSettingsNew,
        Search,Menu} from '@material-ui/icons'
import {AppBar,  
        Toolbar, 
        Grid, 
        InputBase,
        IconButton, 
        Badge,
        Icon,
        makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff',
        transform: 'translateZ(0)'
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px, 8px',
        fontSize: '0.8rem',
    '&:hover': {
        backgroundColor: '#f2f2f2'
    }
    }
})



export default function Header() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position='static' >
               <Toolbar>
                    <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    >
                    <Menu />
                    </IconButton>
                   <Grid container style={{alignItems: 'center'}}>
                       <Grid item>
                        <InputBase 
                        placeholder="Search Topics"
                        className={classes.searchInput}
                        startAdornment={<Search/>}/>
                       </Grid>
                       <Grid item sm/>
                       <Grid item>
                           <IconButton >
                               <Badge badgeContent={4} color='secondary'>
                                   <NotificationsNone/>
                               </Badge >
                            </IconButton>
                            <IconButton >
                               <Badge badgeContent={3} color='primary'>
                                    <ChatBubbleOutlineOutlined />
                               </Badge>
                            </IconButton>
                            <IconButton >
                               <PowerSettingsNew />
                           </IconButton>
                       </Grid>
                   </Grid>
               </Toolbar>
            </AppBar>

        </div>
    )
}
