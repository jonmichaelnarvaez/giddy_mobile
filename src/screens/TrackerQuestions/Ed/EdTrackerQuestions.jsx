import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
// data
import EdData from "../Ed/ED.json";
import {TouchableOpacity} from 'react-native-gesture-handler';
// navigation
import {useNavigation} from '@react-navigation/native'
// confetti
import ConfettiCannon from 'react-native-confetti-cannon';

export default function EdTrackerQuestions() {
  
  const [skeet, setSkeet] = useState();
  const navigation = useNavigation();

  const handlePress = () => {
    setSkeet(false);
    setTimeout(() => {
      setSkeet(true);
    }, 200)
  };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.questionText}>Are you a Veteran or Active Milliary?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>
                        Yes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NoButton} onPress={() => {
                        navigation.navigate('Authenticate')
                    }}>
                    <Text >
                        No
                    </Text>
                </TouchableOpacity>

            </View>
            {skeet ? (
          <ConfettiCannon count={600} origin={{ x: -10, y: 0 }} />
        ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: '80%',
        height: 250,
        backgroundColor: 'rgba(255,255,255,0.65)',
        borderRadius: 20,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 50
    },
    questionText: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: "80%",
        top: 50
    },
    button: {
      backgroundColor: "#161c45",
      width: 50,
      height: 50, 
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    NoButton: {
      borderColor: "#161c45",
      borderWidth: 2,
      width: 50,
      height: 50, 
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText :{
      color: "#fff"
    }
})