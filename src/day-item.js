

//import some codes we need
'use strict';
import React, { 
  StyleSheet,
  Text,
   View
} from 'react-native';

//create our component
var DayItem = React.createClass({
	render: function(){
		return <Text style={styles.day}>
			{this.props.day}
		</Text>	
	}
});

//style our component
var styles = StyleSheet.create({
	day: {
		fontSize: 18,
		color: '#0000ff'
	}
});


//make this code available elsewhere
module.exports = DayItem;
