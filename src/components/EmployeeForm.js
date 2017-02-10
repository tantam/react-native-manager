/**
 * Created by kei on 10/2/17.
 */
import React, {Component
} from 'react';

import {Picker, View} from 'react-native'

import {FormLabel, FormInput, Card, Button} from 'react-native-elements'

export class EmployeeForm extends Component {
	render() {
		return (
			<View>
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
      </View>
		);
	}
}

export default EmployeeForm;
