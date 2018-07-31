import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ActionSheet from 'react-native-actionsheet';
import languagesConfig from '../config/languages';

class Settings extends Component {

    onPress() {
        this.settingsActionSheet.show();
    }

    onSettingsActionSheetPress(index) {
        const language = languagesConfig[index];
        language && this.props.setLanguage(language);
    }

    render() {
        return (
            <View>
                
            </View>
        );
    }

    static CancelButtonIndex = 2;
}

export default Settings;