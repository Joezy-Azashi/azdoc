import React, { Component } from 'react';
import Welcome from './welcome';
import Categorypage from './categorypage';
import Visitor from './forms/visitorform';
import Business from "./forms/businessform";
import Contractor from "./forms/contractorform";
import Delivery from "./forms/deliveryform";
import {Switch, Route, Redirect} from 'react-router-dom';


class MainRoutes extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/welcome" component={Welcome}/>
                    <Route exact path="/category" component={Categorypage} />
                    <Route path="/category/visitorform" component={Visitor} />
                    <Route path="/category/businessform" component={Business} />
                    <Route path="/category/contractorform" component={Contractor} />
                    <Route path="/category/deliveryform" component={Delivery} />
                    <Redirect to='./welcome' />
                </Switch>
            </div>
        )
    }
    
}
export default MainRoutes