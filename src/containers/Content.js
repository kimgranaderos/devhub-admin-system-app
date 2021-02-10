import React from 'react'
import {Container} from '@material-ui/core';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
//routes config
import routes from '../routes'


export default function Content() {
    return (
        <main>
           <Container maxWidth="lg">
               <Switch>
                    {routes.map((route, idx) => {
                     return route.component &&(
                        <Route
                             key={idx}
                             path={route.path}
                             exact={route.exact}
                             name={route.name}
                             render={props => (
                            <route.component {...props}/>
                             )}
                             /> 
                             )
                          })}    
                </Switch>
           </Container>
        </main>
    )
}
