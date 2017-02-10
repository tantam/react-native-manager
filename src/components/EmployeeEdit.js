/**
 * Created by kei on 1/2/17.
 */
 import React, {Component} from 'react';
 import {View, Text } from 'react-native';
 import {connect} from 'react-redux';
 import {FormLabel, FormInput, Card, Button} from 'react-native-elements'
 import {employeeUpdate, employeeSave, employeeDelete} from '../actions/EmployeeActions'
 import EmployeeForm from './EmployeeForm'
 import _ from 'lodash'



 class EmployeeEdit extends Component {

     componentWillMount() {
       _.each(this.props.employee, (value, prop) => {
         this.props.employeeUpdate({ prop, value });
       });
     }

     onButtonPress() {
         const {name, phone, shift, uid} = this.props;
         this.props.employeeSave({name, phone, shift, uid});
     }

     render() {
         return (
             <Card
                 title='Edit Form'>

                 <EmployeeForm {...this.props} />

                 <View style={{marginTop:10}}>
                     <Button
                         onPress={this.onButtonPress.bind(this)}
                         backgroundColor='#397af8'
                         raised
                         title={'Save'}
                     />
                 </View>
             </Card>
         )
     }
 }


 const mapStateToProps = state => {
     const  {name, phone, shift, uid} = state.employeeForm
     return  {name, phone, shift, uid};
 };

 export default connect(mapStateToProps, {
     employeeSave,employeeDelete, employeeUpdate
 })(EmployeeEdit);
