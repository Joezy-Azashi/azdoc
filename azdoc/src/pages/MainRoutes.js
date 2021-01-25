import React, { Component } from 'react';
import Welcome from './welcome';
import Admin from './admin_login';
import Categorypage from './categorypage';
import Visitor from './forms/visitorform';
import Signout from "./forms/signoutform";
import {EMPLOYEE} from "../components/Mainlayout/employees"
import {Router,Switch, Route, Redirect} from 'react-router-dom';
import history from '../history';


class MainRoutes extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          employee: EMPLOYEE
        }
    }

    render(){
        return(
                <Router history={history}>
                <Switch>
                    <Route exact path="/welcome" component={Welcome}/>
                    <Route exact path="/category" component={Categorypage} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/category/visitorform" component={()=><Visitor name="Visitor Form" employee={this.state.employee}/>} />
                    <Route path="/category/businessform" component={()=><Visitor name="Business Form" employee={this.state.employee} />} />
                    <Route path="/category/contractorform" component={()=><Visitor name="Contractor Form" employee={this.state.employee}/>} />
                    <Route path="/category/deliveryform" component={()=><Visitor name="Delivery Form" employee={this.state.employee}/>} />
                    <Route path="/signout" component={Signout} />
                    <Redirect to='./welcome' />
                </Switch>
            </Router>
        )
    }
    
}
export default MainRoutes