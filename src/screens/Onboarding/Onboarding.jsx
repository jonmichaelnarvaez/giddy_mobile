import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import { StatusBar } from 'expo-status-bar';



const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                borderRadius: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
       OnPress={() => navigation.navigate('Authenticate')}
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:"#ededed"}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:"#ededed"}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
    onPress={() => navigation.navigate('Authenticate')}
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16,  color:"#ededed"}}>Done</Text>
    </TouchableOpacity>
);


const OnboardingScreen = () => {

  const navigation = useNavigation();

    return (
      <>
      <StatusBar hidden/>
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.navigate("Authenticate")}
        onDone={() => navigation.navigate("Authenticate")}
        pages={[
          {
            backgroundColor: '#D55015',
            image: <Image resizeMode="center"  style={{height: 130, width: 370,  justifyContent: 'center', alignItems: 'center'}} source={require('../../assets/logos/Giddy_white.png')} />,
            title: 'Sexual Health Tracker',
            subtitle: 'Keep track of your Sex Life',
          },
          {
            backgroundColor: '#161c45',
            image: <Image resizeMode="center" style={{height: 130, width: 370, justifyContent: 'center', alignItems: 'center'}} source={require('../../assets/logos/Giddy_white.png')} />,
            title: 'ED Tracker',
            subtitle: 'Keep track of your ED',
          },
          {
            backgroundColor: '#500B45',
            image: <Image  resizeMode="center"  style={{height: 130, width: 370, justifyContent: 'center', alignItems: 'center'}} source={require('../../assets/logos/Giddy_white.png')} />,
            title: 'Period & Ovulation',
            subtitle: "Keep Track of your Period & Ovulation Cycle",
          },
          {
            backgroundColor: '#0B2B50',
            image: <Image  resizeMode="center" style={{height: 130, width: 370, justifyContent: 'center', alignItems: 'center'}} source={require('../../assets/logos/Giddy_white.png')} />,
            title: 'Giddy',
            subtitle: "The worlds leading Sexual Health Platform",
          },
        ]}
      />
      </>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});