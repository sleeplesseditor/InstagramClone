import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './AppNavigator';
import ProgressSpinner from '../../components/ProgressSpinner';

class NavigationContainerBase extends Component {
    render() {
        const navHelpersConfig = {
            dispatch: this.props.dispatch,
            state: this.props.nav
        };
        const { container } = styles;
        return (
            <View style={container}>
                {
                    this.props.language && 
                    <AppNavigator navigation={addNavigationHelpers(navHelpersConfig)} ref={(o) => this.appNavigator = o}/>
                }
                {
                    this.props.isAppWorking && <ProgressSpinner />
                }
            </View>
        );
    }

    static mapStateToProps(state) {
        return {
            nav: state.nav,
            language: state.language,
            isAppWorking: state.isAppWorking
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    }
});

export default NavigationContainerBase;