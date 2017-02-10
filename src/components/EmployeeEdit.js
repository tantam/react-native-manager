/**
 * Created by kei on 1/2/17.
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {FormLabel, FormInput, Card, Button} from 'react-native-elements'
import {employeeUpdate, employeeSave, employeeDelete} from '../actions/EmployeeActions'
import EmployeeForm from './EmployeeForm'
import _ from 'lodash'
import Modal from 'react-native-simple-modal';

class EmployeeEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDeleteConfirm: false
        };
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        const {name, phone, shift, uid} = this.props;
        this.props.employeeSave({name, phone, shift, uid});
    }

    onDeleteButtonPress() {
        const {name, phone, shift, uid} = this.props;
        this.props.employeeDelete({uid});
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <View >
                    <EmployeeForm {...this.props} />

                    <View style={{marginTop:10}}>
                        <Button
                            onPress={this.onButtonPress.bind(this)}
                            backgroundColor='#397af8'
                            raised
                            title={'Save'}
                        />
                    </View>

                    <View style={{marginTop:10}}>
                        <Button
                            onPress={() => this.setState({openDeleteConfirm: true})}
                            backgroundColor='#397af8'
                            raised
                            title={'Delete'}
                        />
                    </View>


                </View>

                <Modal
                    open={this.state.openDeleteConfirm}
                    style={{alignItems: 'center'}}>
                    <View style={{}}>
                        <Text style={{textAlign:'center',fontSize: 20, marginBottom: 5}}>Delete this employee!</Text>
                        <Text style={{textAlign:'center',fontSize: 16, marginBottom: 10}}>Are you sure?</Text>

                        <View style={{ justifyContent:'space-around',flexDirection:'row'}}>
                            <View style={{width:150}}>
                                <Button
                                    onPress={this.onDeleteButtonPress.bind(this)}
                                    backgroundColor='#397af8'
                                    raised
                                    title={'Yes'}
                                />
                            </View>
                            <View style={{width:150}}>

                                <Button
                                    onPress={() => this.setState({openDeleteConfirm: false})}
                                    backgroundColor='#D32F2F'
                                    raised
                                    title={'No'}
                                />
                            </View>
                        </View>


                    </View>
                </Modal>
            </View>

        )
    }
}


const mapStateToProps = state => {
    const {name, phone, shift, uid} = state.employeeForm
    return {name, phone, shift, uid};
};

export default connect(mapStateToProps, {
    employeeSave, employeeDelete, employeeUpdate
})(EmployeeEdit);
