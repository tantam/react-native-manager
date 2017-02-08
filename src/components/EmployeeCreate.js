/**
 * Created by kei on 1/2/17.
 */
import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {FormLabel, FormInput, Card, Button} from 'react-native-elements'
import {employeeUpdate, employeeCreate} from '../actions/EmployeeActions'


class EmployeeCreate extends Component {
    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift});
    }

    render() {
        return (
            <Card
                title='Create Form'>
                <FormLabel>Name</FormLabel>
                <FormInput
                    onChangeText={value=>this.props.employeeUpdate({prop:'name',value:value})}
                    value={this.props.name}/>

                <FormLabel>Phone</FormLabel>
                <FormInput
                    onChangeText={value=>this.props.employeeUpdate({prop:'phone',value:value})}
                    value={this.props.phone}/>

                <FormLabel>Phone</FormLabel>

                <Picker
                    selectedValue={this.props.shift}
                    onValueChange={value=>this.props.employeeUpdate({prop:'shift',value:value})}
                >
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                </Picker>

                <View style={{marginTop:10}}>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                        backgroundColor='#397af8'
                        raised
                        title={'Create'}
                    />
                </View>
            </Card>
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