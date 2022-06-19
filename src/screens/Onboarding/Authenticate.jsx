import React, {useState} from 'react'
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image
} from 'react-native'

export default function AuthenticateScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <View style={styles.bottomView}>
                <Text style={styles.heading}>Welcome {`\n`}
                    Back</Text>
                <View style={styles.formView}>
                    <TextInput
                        allowFontScaling
                        autoCapitalize='none'
                        autoCorrect="false"
                        // ios only
                        keyboardAppearance='email-address'
                        placeholderTextColor={"#fff"}
                        placeholder='Email'
                        style={styles.textInput}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </View>
                <View style={styles.formView}>
                    <TextInput
                        allowFontScaling
                        autoCapitalize='none'
                        autoCorrect="false"
                        secureTextEntry
                        placeholderTextColor={"#fff"}
                        placeholder='password'
                        style={styles.textInput}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                        />
                </View>
                <View style={styles.forgotPasswordView}>
                    <Text style={styles.forgotText}>Forgot your password?</Text>
                </View>
            </View>

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
        height: '40%',
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
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold",
        marginLeft: 30,
        marginTop: 60
    },
    formView: {
        width: '100%',
        alignItems: "center",
        marginTop: 40
    },
    textInput: {
        width: "90%",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.2)",
        height: 50,
        borderRadius: 10,
        paddingLeft: 5
    },
    forgotPasswordView: {
        padding: 20,
        alignItems: "flex-end"

    },
    forgotText: {
        color: 'rgba(255, 255, 255, 0.7)'
    }
})