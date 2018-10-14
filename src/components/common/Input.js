import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secure}) => {

	const {inputStyle, labelStyle, containerStyle} = styles;

	return(
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput 
				secureTextEntry={secure}
				placeholder={placeholder}
				autoCorrect={false}
				autoCapitalize={'none'}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);

};

//Sum flex values. 2 + 1 = 3
//inputStyle space = 2/3 of space
//labelStyle space = 1/3 of space
//containerStyle is not sibling with input and label so dont sum up
const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height:40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export {Input};