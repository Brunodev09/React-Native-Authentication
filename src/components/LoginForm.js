import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {

	constructor(props) {
		super(props); 
		this.state = {email: '', password: '', error: '', loading: false}; 
	}
	
	onButtonPress() {
		const {email, password}  = this.state;
		this.setState({error: '', loading: true});

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(this.onLoginSuccess.bind(this))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(this.onLoginFailed.bind(this));

		});

	}

	onLoginFailed() {
		this.setState({error: 'Authentication failed!', loading: false});
	}

	onLoginSuccess() {
		this.setState({email:'', password: '', error: '', loading: false});
	}

	renderButton() {
		if (this.state.loading) {
			return (<Spinner size="small" />);
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
			Log in
			</Button>

		);
	}

	render() {
		return(
			<Card>

			<CardSection>
			<Input placeholder="Enter your email" label="Email" value={this.state.email} onChangeText={newText => this.setState({email: newText})}  />
			</CardSection>

			<CardSection>
			<Input secure placeholder="password" label="Password" value={this.state.password} onChangeText={pw => this.setState({password: pw})} />
			</CardSection>

			<Text style={styles.errorTextStyle}>{this.state.error}</Text>

			<CardSection> 
				{this.renderButton()}
			</CardSection>
			</Card>
			);
	}
}

const styles = {
	errorTextStyle: {
		fontSize:20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;