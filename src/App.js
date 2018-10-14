import firebase from 'firebase';
import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Button, Spinner, Card, CardSection} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {logged: null}
	}

	componentDidMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyCpyQW7jdsQeQC09Y2rwmBywCDNkGvI0qo",
			authDomain: "auth-7e295.firebaseapp.com",
			databaseURL: "https://auth-7e295.firebaseio.com",
			projectId: "auth-7e295",
			storageBucket: "auth-7e295.appspot.com",
			messagingSenderId: "672282633404"
		});

		//user returns undefined if not logged in
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({logged:true});
			} else this.setState({logged:false});
		});
	}

	renderContent() {

		switch(this.state.logged) {
			case true:
				return (
					<Card><CardSection><Button onPress={() => firebase.auth().signOut()}>Log out</Button></CardSection></Card>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />
		}

	}

	render() {
		return(
			<View>
			<Header headerText="Authentication" />
			{this.renderContent()}
			</View>
		);
	}
}

export default App;





    // Method 1: Explicitly binding inside the render method using this.increment.bind(this).
    // Method 2: Wrapping a callback function around the event handler using () => this.increment().
    // Binding is assured because we are invoking the method, rather than simply referring to it.
    // Method 3: Binding the method inside the constructor using this.increment = this.increment.bind(this).
