/**
 * Created by kei on 1/2/17.
 */
import React, {Component} from 'react';
import _ from 'lodash'
import {View, Text, ListView} from 'react-native';
import { List, ListItem } from 'react-native-elements'
import {employeesFetch} from '../actions'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRows(employees){
        return employees.map((l, i) => {
            return (
                <ListItem
                    key={i}
                    onPress={()=>{
                      Actions.employeeEdit({ employee: l });
 }}
                    title={l.name}
                />
            )
        });
    }

    render() {
        return (
            <View>
                <List containerStyle={{marginBottom: 20}}>
                    {this.renderRows(this.props.employees)}
                </List>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return  {
        employees: _.map(state.employees,(val,uid)=>{
            return { ...val, uid }
        })
    };
};

export default connect(mapStateToProps,{
    employeesFetch
})(EmployeeList);
