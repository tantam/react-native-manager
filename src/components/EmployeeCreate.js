/**
 * Created by kei on 1/2/17.
 */
import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {FormLabel, FormInput, Card, Button} from 'react-native-elements'
import {employeeUpdate, employeeCreate} from '../actions/EmployeeActions'
import EmployeeForm from './EmployeeForm'


class EmployeeCreate extends Component {
    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift});
    }

    render() {
        return (
            <View>

                <EmployeeForm {...this.props} />

                <View style={{marginTop:10}}>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                        backgroundColor='#397af8'
                        raised
                        title={'Create'}
                    />
                </View>
            </View>
        )
    }
}


const mapStateToProps = state => {
    const  {name, phone, shift} = state.employeeForm
    return  {name, phone, shift};
};

export default connect(mapStateToProps, {
    employeeCreate, employeeUpdate
})(EmployeeCreate);
