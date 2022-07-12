import React, {useState} from 'react'
import {StyleSheet, Text, View, Dimensions} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button } from 'react-native-paper';
// navigation
import { useNavigation } from '@react-navigation/native';

// TODO: add redux && asyncstorage

const windowWidth = Dimensions.get('window').width
    

export default function TrackerScreen() {
    const navigation = useNavigation();

    const [isChecked,
        setIsChecked] = useState(true);
         const [btnDisabled, setBtnDisabled] = useState(true);

        const handleSubmit = () => {
            if(isChecked !== 1 && isChecked <= 0) {
                alert("Please select one tracker. You can choose up to one more tracker later.");
            } else {
                navigation.navigate('Quiz');
            }
        }

    return (
        <View style={styles.container}>
            <View style={styles.trackerCard}>
                <Text style={styles.header}>Select your Tracker</Text>
            </View>
            <View style={styles.questionsCard}>
                <BouncyCheckbox
                    style={styles.bouncyCheck}
                    useNativeDriver="true"
                    text="Erectile Dysfunction Tracker"
                    fillColor='#0B2B50'
                    textStyle={{
                    color: '#333',
                    textDecorationLine: "none",
                }}
                    onPress={(value) => setIsChecked(value)}/>
            </View>

            <View style={styles.questionsCard}>
                
                <BouncyCheckbox
                style={styles.bouncyCheck}
                    useNativeDriver="true"
                    text="Sexual Health Tracker"
                    fillColor='#D55015'
                    textStyle={{
                    color: '#333',
                    textDecorationLine: "none",
                }}
                    onPress={(value) => setIsChecked(value)}/>
            </View>
            <View style={styles.questionsCard}>
                <BouncyCheckbox
                style={styles.bouncyCheck}
                    useNativeDriver="true"
                    text="Fertility Tracker"
                    fillColor="#500B45"
                    textStyle={{
                    color: '#333',
                    textDecorationLine: "none",
                }}
                    onPress={(value) => setIsChecked(value)}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    disabled={!btnDisabled}
                    onPress={handleSubmit}
                    mode='contained'
                    color="#0b2b50">Take a Quiz</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        paddingTop: '30%'
    },
    trackerCard: {
        width: '100%',
    },
    questionsCard: {
        // flex: 2,
        width: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        top: 55,
        left: 10,
        marginBottom: 50
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        left: 10
    },
    bouncyCheck: {
        left: 10,
    },
    buttonContainer: {
        width: windowWidth - 40,
        top: "50%",
     }

})