import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from './style';

export default class Ticker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    _onPressButton = () => {
        this.setState({
            selected: !this.state.selected,
        })
    };

    
    render(){

    	const imageUrl=this.state.selected==true? require('../../images/check-orange.png') :require('../../images/check.png')
        
        return (
            <TouchableHighlight onPress={this._onPressButton}>
		      <Image
		      	style={styles.tickImg}
		        source={imageUrl}
		      />
		    </TouchableHighlight>
        );
    }
}

 