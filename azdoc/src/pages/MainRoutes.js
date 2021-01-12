import React, { Component } from 'react';
import Welcome from './welcome';
import Categorypage from './categorypage';
import Visitor from './forms/visitorform'
import {Switch, Route, Redirect} from 'react-router-dom';


class MainRoutes extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/welcome" component={Welcome}/>
                    <Route path="/category" component={Categorypage} />
                    <Route path="/visitorform" component={Visitor} />
                    <Redirect to='./welcome' />
                </Switch>
            </div>
        )
    }
    
}
export default MainRoutes