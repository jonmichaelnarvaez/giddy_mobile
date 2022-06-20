import React, {useState} from 'react'
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Alert
} from 'react-native'
// navigation
import {useNavigation} from '@react-navigation/native';
import {Button, Divider} from 'react-native-paper'
// icons
import {Octicons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
// animation
import {View as MotiView} from 'moti'

export default function AuthenticateScreen() {
    const navigation = useNavigation();

    const [isOpened,
        setIsOpended] = useState(true)

    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
                <Image
                    style={{
                    width: 250,
                    height: 350
                }}
                    source={require("../../assets/logos/Giddy_blue.png")}
                    resizeMode="center"/>
            </View>
            <MotiView
                transition={{
                type: "timing",
                duration: 1000,
                delay: 50
            }}
                from={{
                opacity: 0
            }}
                animate={{
                opacity: isOpened
                    ? 1
                    : 0
            }}
                exit={{
                opacity: 0
            }}
                style={styles.bottomView}>
                <Text style={styles.heading}>Hey there,{`\n`}
                    good looking.</Text>
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
                    <Button mode='contained' color='#aad0f8'>
                        Submit
                    </Button>
                </View>
                <View style={styles.forgotPasswordView}>
                    {/* Do we need to add a register screen? If we can onboard with
                  just email and password, a new user to the DB should prompt an
                  agreement page & create a new user. */}
                    {/* <Text style={styles.registerText}>Register</Text> */}

                    <Text style={styles.forgotText}>Reset Password</Text>

                </View>
                <Divider color="#ededed"/>
                <View style={styles.registerView}>
                    <Button onPress={() => Alert.alert("Facial Recognition")}>
                        <MaterialCommunityIcons name="face-recognition" size={30} color="#ededed"/>
                    </Button>
                    <Button
                        onLongPress={() => Alert.alert("Wow, that was a long press! Just tap it")}
                        onPress={() => navigation.navigate('Passcode')}>
                        <Octicons name="number" size={30} color="#ededed"/>
                    </Button>
                </View>
            </MotiView>

        </SafeAreaView>
    )
}

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
        marginTop: 50
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