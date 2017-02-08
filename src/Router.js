/**
 * Created by kei on 1/2/17.
 */
import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop:65}}>
            <Scene key="auth">
                <Scene initial key="login" component={LoginForm} title="Please login"/>
            </Scene>
            <Scene key="main">
                <Scene key="employeeList"
                       component={EmployeeList}
                       title="Employees"
                       rightTitle="Add"
                       onRight={()=>Actions.employeeCreate()}
                />
             <Scene key="employeeCreate"
                       component={EmployeeCreate} title="Employee Create"/>
            </Scene>
        </Router>
    )
};

export default RouterComponent;