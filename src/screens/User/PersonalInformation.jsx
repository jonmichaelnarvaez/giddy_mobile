import { StyleSheet, Text, View, Alert, Image, Pressable, Dimensions } from 'react-native'
import React, {useState} from 'react'
// third party libraries
import {Avatar, Button, Divider} from 'react-native-paper'
import { MotiView } from 'moti'
// import { useNavigation } from '@react-navigation/native'
//icons
import {EvilIcons} from '@expo/vector-icons'


const windowWidth = Dimensions.get('screen').width

export default function PersonalInformation() {
  // const navigation = useNavigation();

  const [isOpened, setIsOpened] = useState(true)

  return (
    <>
    <MotiView style={styles.container} transition={{type: "timing", duration: 1000, delay: 100}} from={{opacity: 0}} animate={{opacity: isOpened ? 1 : 0}} exit={{opacity: 0}}>
          <View style={styles.avatarContainer}>
          <Pressable>
              <Avatar.Image
                  size={110}
                  style={{
                  backgroundColor: '#777',
                  margin: 0,
                  padding: 0,
              }}
                  source={require('../../assets/images/avatar.jpg')}/>
          </Pressable>
          <MotiView style={styles.userName}  transition={{type: "timing", duration: 1000, delay: 100}} from={{opacity: 0}} animate={{opacity: isOpened ? 1 : 0}} exit={{opacity: 0}}>
            <Text>Jon-Michael Narvaez</Text>
            <Pressable onPress={() => alert('Edit your profile')}>
              <View style={styles.editProfile}>
              <Text style={styles.editProfileText}>Edit profile</Text>
              </View>
            </Pressable>
          </MotiView>
          </View>
    </MotiView>
    <Divider style={{backgroundColor: 'transparent', padding: 10}}/>
    <MotiView style={{margin: 0, padding: 0}} transition={{type: "timing", duration: 1500, delay: 300}} from={{opacity: 0}} animate={{opacity: isOpened ? 1 : 0}} exit={{opacity: 0}}>
            <View style={styles.contentWrapper}>
              <Text>What do we want to show here?</Text>
              <EvilIcons name="chevron-right" size={25} color={"#171717"}/>
            </View>
            <Divider/>
    </MotiView>
    <MotiView transition={{type: "timing", duration: 1500, delay: 300}} from={{opacity: 0}} animate={{opacity: isOpened ? 1 : 0}} exit={{opacity: 0}} style={styles.containerTwo}>
      <Button color="#c60000" mode="contained"  onPress={() => Alert.alert('Call deleteData from drupal backend')}>
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
    paddingTop: '15%',
    paddingLeft: "7%"
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