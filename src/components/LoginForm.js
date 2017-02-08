'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  StyleSheet,
  View,
  Text, ActivityIndicator
} from 'react-native';

import { FormLabel,SocialIcon, FormInput,Card, ListItem, Button, Grid, Col, Row } from 'react-native-elements'

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text)
	}

	onLoginUser(){
		const {email, password} = this.props;
		this.props.loginUser({email,password})
	}

  render() {

    return (
	    <View style={{flex: 1,justifyContent: "center"}}>
			<Spinner visible={this.props.loading} textStyle={{color: '#FFF'}} />
			<FormLabel>Email</FormLabel>
				<FormInput 
				onChangeText={this.onEmailChange.bind(this)}
				placeholder="Please input your email"
				value= {this.props.email}
				/>
		      	<FormLabel>Password</FormLabel>
				<FormInput 
				onChangeText={this.onPasswordChange.bind(this)}
				secureTextEntry={true}
				value= {this.props.password}
				placeholder="Please input your password"
				/>
				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>
				<View style={{marginTop:10}}>
				<Button
					backgroundColor='#397af8'
					  raised
					  title={'Login'}
					  onPress={this.onLoginUser.bind(this)}
					   />
				</View>

		</View>
    );
  }
}

const styles = StyleSheet.create({
    errorTextStyle: {
    	fontSize:20,
		textAlign: 'center',
		color: 'red'
	}
});

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		loading: state.auth.loading,
        error: state.auth.error,
		user: state.auth.user
	}
}

export default connect(mapStateToProps, {
	emailChanged, passwordChanged, loginUser
})(LoginForm);

