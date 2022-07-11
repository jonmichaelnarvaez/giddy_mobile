import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React, {useState} from 'react'
// third party libraries
import {Avatar, Button, Divider} from 'react-native-paper'
import { MotiView } from 'moti'
// storage
// import AsyncStorage from '@react-native-async-storage/async-storage';
//icons
import {EvilIcons} from '@expo/vector-icons'

const windowWidth = Dimensions.get('screen').width

export default function PersonalInformation() {

  const [isOpened, setIsOpened] = useState(true)

  return (
    <>
    <MotiView style={styles.container} transition={{type: "timing", duration: 1000, delay: 100}} from={{opacity: 0}} animate={{opacity: isOpened ? 1 : 0}} exit={{opacity: 0}}>
          <View style={styles.avatarContainer}>  
              <Avatar.Image
                  size={110}
                  style={{
                  backgroundColor: '#777',
                  margin: 0,
                  padding: 0,
              }}
              // add user imageUrl params 
                  source={require('../../assets/images/avatar.jpg')}
                  />
          </View>
    </MotiView>
    <Divider style={{backgroundColor: 'transparent', padding: 10}}/>
    <MotiView style={{margin: 0, padding: 0}} transition={{type: "timing", duration: 1500, delay: 300}} from={{opacity: 0}} animate={{opacity: isOpened ? 1 : 0}} exit={{opacity: 0}}>
            <View style={styles.contentWrapper}>
              <Text>Edit your profile</Text>
              <EvilIcons name="chevron-right" size={25} color={"#171717"}/>
            </View>
            <Divider/>
    </MotiView>
    <MotiView style={{margin: 0, padding: 0}} transition={{type: "timing", duration: 1500, delay: 300}} from={{opacity: 0}} animate={{opacity: isOpened ? 1 : 0}} exit={{opacity: 0}}>
            <View style={styles.contentWrapper}>
              <Text>Refer your partner</Text>
              <EvilIcons name="share-google" size={25} color="black" />
            </View>
            <Divider/>
    </MotiView>
    <MotiView transition={{type: "timing", duration: 1500, delay: 300}} from={{opacity: 0}} animate={{opacity: isOpened ? 1 : 0}} exit={{opacity: 0}} style={styles.containerTwo}>
      {/* call profile delete api here */}
      <Button onPress={() => {}} color="#c60000" mode="contained" >
          Delete your data
        </Button>
    </MotiView>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: '30%',
    paddingLeft: "35%",
    paddingBottom: "5%"
  },
  containerTwo: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'flex-start'
  },
  avatarContainer:{
    flexDirection: 'row',
    justifyContent  : 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth,
    padding: 15
  },
  userName: {
    justifyContent :'center',
    paddingLeft: 15,
  },
  editProfile: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    
  },
  editProfileText: {
    justifyContent: 'center', alignItems: 'center', color: "#aad0f8"
  },
});