import React, {useState} from 'react'
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native'
// navigation
import {useNavigation} from '@react-navigation/native';
// third party libraries
import {Button, Divider} from 'react-native-paper'
// redux
import { useDispatch, useSelector } from 'react-redux';
import { signInUser, signupUser } from '../../redux/slices/AuthSlice';

const AuthenticateScreen = () => {
    // const dispatch = useDispatch();
    // const [auth ,setAuth] = useState("signIn");

    const [email,
        setEmail] = useState('');

    const [password,
        setPassword] = useState('');
        
        // const AuthenticateUser = () => {
        //  if(auth == "signIn") {
        //     dispatch(signInUser({email, password}))
        //  } else {
        //     dispatch(signupUser({email, password}))
        //  }
        // }
    
            return (
                <SafeAreaView style={styles.container}>
                    <View  
                
                        style={styles.topView}>
                        <Image
                            style={{
                            width: 250,
                            height: 350
                        }}
                            source={require("../../assets/logos/Giddy_blue.png")}
                            resizeMode="center"/>
                    </View>
                    <View
                    
                        style={styles.bottomView}>
                        <Text style={styles.heading}>Hey there,{`\n`}
                            good lookin'</Text>
                        <View style={styles.formView}>
                            <TextInput
                                keyboardType='email-address'
                                allowFontScaling
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholderTextColor={"#d6d6d7"}
                                placeholder='Email'
                                style={styles.textInput}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </View>
                        <View style={styles.formView}>
                            <TextInput
                                allowFontScaling
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry
                                placeholderTextColor={"#d6d6d7"}
                                placeholder='password'
                                style={styles.textInput}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </View>
                        <View style={styles.submitButton}>
                            {/* { auth =="signIn" ?
                            <Button onPress={() => setAuth("signup")} mode='contained' color='#aad0f8'>
                                Sign-Up
                            </Button>
                            :
                            <Button  onPress={() => setAuth("signIn")} mode='contained' color='#aad0f8'>
                                Sign-In
                            </Button>
                            }                             */}
                        </View>
                        <View style={styles.forgotPasswordView}>
        
                            <Text style={styles.forgotText}>Reset Password</Text>
        
                        </View>
                        <Divider color="#ededed"/>
                        <View style={styles.registerView}>
                            <Button onPress={() => Alert.alert("Biometrics Recognition")}>
                            <Image source={require('../../assets/icons/thumb.png')} style={{width: 35, height: 35}} resizeMode="contain"/>
                            </Button>
                            <Button
                                onPress={() => alert('Hold the button a little longer 😉')}>
                                <Image source={require('../../assets/icons/numbers.png')} style={{width: 35, height: 35}} resizeMode="contain"/>
                            </Button>
                        </View>
                    </View>
        
                </SafeAreaView>
            )

        }

export default AuthenticateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topView: {
        width: "100%",
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent"
    },
    bottomView: {
        width: "100%",
        height: '70%',
        backgroundColor: "#161c45",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    heading: {
        color: "#aad0f8",
        fontSize: 40,
        fontWeight: "bold",
        marginLeft: 30,
        marginTop: 50,
        fontFamily: "Lato_400Regular_Italic"
    },
    formView: {
        width: '100%',
        alignItems: "center",
        marginTop: 25
    },
    textInput: {
        width: "89%",
        borderWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.8)",
        borderTopColor: 'transparent',
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        height: 40,
        borderBottomRightRadius: 0,
        paddingLeft: 5
    },
    forgotPasswordView: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    forgotText: {
        color: 'rgba(255,255,255,0.5)'
    },
    codeText: {
        color: '#161c45'
    },
    registerView: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row"
    },
    registerText: {
        color: 'rgba(255,255,255,0.5)'
    },
    submitButton: {
        paddingTop: 25,
        paddingLeft: 20,
        paddingRight: 20
    }
})