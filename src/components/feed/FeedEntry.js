import React, { Component } from 'react';
import {
    Dimensions, 
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as imageUtils from '../../utils/images';
import buttonStyles from '../../styles/common/buttons';
import LikeButton from '../LikeButton';
import IconButton from '../IconButton';
import { locationIcon, commentIcon, moreIcon } from '../../utils/icons';
import { blackColor, lightGray } from '../../styles/colors';

export default class FeedEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageWidth: Math.ceil(Dimensions.get('window').width)
        };
    }

    onLocationPress() {

    }
    
    render() {
        return (
            <View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    feedEntry: {
		borderBottomColor: blackColor,
		borderBottomWidth: 1,
	},
	top: {
		height: 60,
		padding: 10,
		flexDirection: 'row'
	},
	logoImage: {
		width: 40,
		height: 40
	},
	image: {
		height: 400
	},
	captionContainer: {
		padding: 10
	},
	captionText: {
		fontSize: 16,
		color: lightGray
	},
	bottom: {
		padding: 10,
		paddingBottom: 5,
		flexDirection: 'row'
	},
	rightButtonWrapper: {
		flex: 1,
		alignItems: 'flex-end'
	}
});