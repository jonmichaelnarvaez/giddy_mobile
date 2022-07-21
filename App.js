import React, {Component} from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// app stack
import AppStack from './src/navigation/AppNavigator'
import AuthStack from './src/navigation/AuthNavigator';
import SplashScreen from "./src/components/Splash/SplashScreen";
import {connect} from 'react-redux';
import {autoLogin} from "./src/redux/actions/index"
// logbox
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['EventEmitter.removeListener', 'Non-serializable']);

class App extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        this.props.dispatch(autoLogin()).then(() => {
            this.setState({loading: false});
        })
    }

    render() {
        return (
            <NavigationContainer>
                {this.state.loading
                    ? (
                        <SplashScreen/>
                    )  : this.props.auth.isAuth  ? (
                    <AppStack/>
                    )
                    : (
                    <AuthStack />
                    )}
            </NavigationContainer>
    );
    }
}

const mapStateToProps = state => ({auth: state.auth});
export default connect(mapStateToProps)(App);