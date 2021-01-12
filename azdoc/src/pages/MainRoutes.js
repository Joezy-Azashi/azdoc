import React, { Component } from 'react';
import Welcome from './welcome';
import Categorypage from './categorypage';
import Visitor from './forms/visitorform';
import Signout from "./forms/signoutform";
import {Switch, Route, Redirect} from 'react-router-dom';


class MainRoutes extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/welcome" component={Welcome}/>
                    <Route exact path="/category" component={Categorypage} />
                    <Route path="/category/visitorform" component={()=><Visitor name="Visitor Form" />} />
                    <Route path="/category/businessform" component={()=><Visitor name="Business Form" />} />
                    <Route path="/category/contractorform" component={()=><Visitor name="Contractor Form" />} />
                    <Route path="/category/deliveryform" component={()=><Visitor name="Delivery Form" />} />
                    <Route path="/signout" component={Signout} />
                    <Redirect to='./welcome' />
                </Switch>
            </div>
        )
    }
    
}
export default MainRoutes