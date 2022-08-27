import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// navigation
import { useNavigation } from '@react-navigation/native';
// third party libraries
import Onboarding from 'react-native-onboarding-swiper';
import { StatusBar } from 'expo-status-bar';
import {useFonts, Lato_400Regular, Lato_400Regular_Italic}from '@expo-google-fonts/lato';
import SplashScreen from '../../components/Splash/SplashScreen';


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

            }}
        />
    );
}



const Skip = ({...props}) => (
    <TouchableOpacity
       OnPress={() => navigation.navigate('Select a Tracker')}
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:"#ededed", fontFamily: 'Lato_400Regular'}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:"#ededed", fontFamily: "Lato_400Regular"}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
    onPress={() => navigation.navigate('Select a Tracker')}
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16,  color:"#ededed", fontFamily: 'Lato_400Regular'}}>Done</Text>
    </TouchableOpacity>
);


const OnboardingScreen = () => {
  const navigation = useNavigation();
  
  let fontsLoaded = useFonts({
    Lato_400Regular,
    Lato_400Regular_Italic
  });

  if (!fontsLoaded){
    return <SplashScreen/>
  }

    return (
      <>
      <StatusBar hidden/>
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.navigate("Select a Tracker")}
        onDone={() => navigation.navigate("Select a Tracker")}
        titleStyles={styles.headerText}
        subTitleStyles={styles.subText}
        pages={[
          {
            backgroundColor: '#161c45',
            image: <Image resizeMode="contain" style={{height: 200, width: 300, justifyContent: 'center', alignItems: 'center'}} source={require('../../assets/sticker/Eddie_M.png')} />,
            title: 'Erectile Dysfunction',
            subtitle: 'Keep track of your ED',
          },
          {
            backgroundColor: '#D55015',
            image: <Image resizeMode="contain"  style={{height: 200, width: 300,  justifyContent: 'center', alignItems: 'center'}} source={require('../../assets/sticker/Condom_M.png')} />,
            title: 'Sexual Health',
            subtitle: 'Keep track of your Sex Life',
          },
          {
            backgroundColor: '#500B45',
            image: <Image  resizeMode="contain"  style={{height: 200, width: 300, justifyContent: 'center', alignItems: 'center'}} source={require('../../assets/sticker/Uterus_M.png')} />,
            title: 'Fertility & Ovulation',
            subtitle: "Keep Track of your Fertility Cycle",
          },
          {
            backgroundColor: '#0B2B50',
            image: <Image  resizeMode="contain" style={{height: 200, width: 300, justifyContent: 'center', alignItems: 'center'}} source={require('../../assets/sticker/GLogo_M.png')} />,
            title: 'Get Me Giddy',
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
  headerText: {
    fontFamily: 'Lato_400Regular'
  },
  subText: {
    fontFamily: 'Lato_400Regular_Italic'
  }
});