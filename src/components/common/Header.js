import React from 'react';
import {Text, View} from 'react-native';


//name component just like the file
const Header = (props) => {
	//props take properties from parent class

	
	const {textStyle, viewStyle} = styles; //Destructuring styles object into 2 objs so we don't have to do: styles.blabla

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

//styles object for each component
//if we don't define angles, the text will be rendered at 0x,0y in View panel

//======================= Y OFFSET =============================
//justifyContent: 'flex-start' --> renders at 0,0
//justifyContent: 'flex-end' --> renders at 0x,endOfView(y)
//justifyContent: 'flex-center' --> renders at 1/2x,1/2y

//======================= X OFFSET =============================
//alignItems: 'flex-start' --> renders at 0,0
//alignItems: 'flex-end' --> renders at endOfView(x),0y


const styles =  {
	viewStyle: {
		backgroundColor: 'lightgrey',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		elevation: 15
	},
	textStyle: {
		fontSize: 50
	}
};

//make it avaiable to other components
//this is a child from app
export {Header};
