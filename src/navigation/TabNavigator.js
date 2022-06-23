import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    Image,
    Alert
} from 'react-native';
// react native paper
import {Avatar} from 'react-native-paper';
//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
// icons
import {AntDesign} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// screens
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import ArticlesScreen from '../screens/Articles/ArticlesScreen';
import ArticleDetailScreen from '../screens/Articles/ArticleDetailScreen';
import AnalyticsScreen from '../screens/Analytics/AnalyticsScreen';
import UserAccountScreen from '../screens/User/UserAccountScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import AddScreen from '../screens/Calendar/AddScreen';
import PreferenceScreen from '../screens/User/Preferences';
import PersonalInformation from '../screens/User/PersonalInformation'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (<Image
    resizeMode='center'
        style={{
        height: 35,
        width: 100
    }}
        source={require('../assets/logos/Giddy_blue.png')}/>)
}
function GiddyToday() {
    return (<Image
    resizeMode='center'
        style={{
        height: 35,
        width: 150
    }}
        source={require('../assets/logos/giddy_today.png')}/>)
}

const CalendarStack = () => {

    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name=" "
                component={CalendarScreen}
                options={{
                headerTitle: (props) => <LogoTitle {...props}/>,
                headerShown: true,
                headerRight: () => (
                    <Pressable onPress={() => navigation.navigate("Account")}>
                        <Avatar.Image
                            size={40}
                            style={{
                            backgroundColor: '#777',
                            
                        }}
                            source={require('../assets/images/avatar.jpg')}/>
                    </Pressable>
                ),
                headerTransparent: true,
                // headerBlurEffect: 'light',
                // headerStyle: {
                //     backgroundColor: '#161c45'
                // }
                
            }}/>
            <Stack.Screen name="Account" component={UserAccountScreen} options={{
                headerTransparent: true,
                headerTitle: (props) => <LogoTitle {...props}/>,
            }}/>
            <Stack.Screen
                name="Preferences"
                component={PreferenceScreen}
                options={{
                presentation: "modal",
                headerTitle: (props) => <LogoTitle {...props}/>,
                headerTransparent: true,
            }}/>
            <Stack.Screen
                name="Personal Info"
                component={PersonalInformation}
                options={{
                presentation: "modal",
                headerTransparent: true,
                headerTitle: (props) => <LogoTitle {...props}/>,
            }}/>
        </Stack.Navigator>
    )
}
const AnalyticStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Analytic Screen" component={AnalyticsScreen} options={{
                headerTitle: (props) => <LogoTitle {...props}/>,
                headerShown: true,
                headerTransparent: true,
            }}/>
        </Stack.Navigator>
    )
}

const AddStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="New Event"
                component={AddScreen}
                options={{
                    headerTitle: (props) => <LogoTitle {...props}/>
                }}
              />
        </Stack.Navigator>
    )
}

const ArticleStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            
        }}>
            <Stack.Screen name=" " component={ArticlesScreen}   options={{
                headerTitle: (props) => <GiddyToday {...props}/>,
                headerShown: true,
                headerTransparent: true,
                headerRight: () => 
                (
                <Pressable onPress={() => Alert.alert('Open Favorites page')}>
                    <FontAwesome5 name="grin-hearts" size={28} color="#aad0f8" />
                </Pressable>
                )
                // headerBlurEffect: 'light',
                // headerStyle: {
                //     backgroundColor: '#161c45'
                // }
                
            }}/>
            <Stack.Screen name="Article Detail" component={ArticleDetailScreen}  options={{
                headerShown: true,
                headerTitle: ' ',
                headerTransparent: true,
                headerTintColor: "#161c45"
            }}/>
        </Stack.Navigator>
    )
}
const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name=" " component={SearchScreen} options={{
                headerTitle: (props) => <LogoTitle {...props}/>,
                headerShown: true,
                headerTransparent: true,
                // headerBlurEffect: 'light',
                // headerStyle: {
                //     backgroundColor: '#161c45'
                // }
                
            }}/>
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: '#aad0f8',
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#161c45',
                borderRadius: 15,
                height: 80,
            }
        }}>
            <Tab.Screen
                name="Home"
                component={CalendarStack}
                options={{
                tabBarIcon: ({size, color}) => {
                    return (
                        <View
                            style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 10
                        }}>
                            <AntDesign name="calendar" size={size} color={color}/>
                            <Text style={styles.tabBarText}>Calendar</Text>
                        </View>
                    )
                }
            }}/>
            <Tab.Screen
                name="Analytics"
                component={AnalyticStack}
                options={{
                headerShown: false,
                headerTransparent: true,
                tabBarIcon: ({size, color}) => {
                    return (
                        <View
                            style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 10
                        }}>
                            <AntDesign name="barschart" size={size} color={color}/>
                            <Text style={styles.tabBarText}>Analytics</Text>
                        </View>
                    )
                }
            }}/>                       
            <Tab.Screen
                name="Articles"
                component={ArticleStack}
                options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => {
                    return (
                        <View
                            style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 10
                        }}>
                            <Entypo name="news" size={size} color={color}/>
                            <Text style={styles.tabBarText}>Articles</Text>
                        </View>
                    )
                }
            }}/>

            <Tab.Screen
                name="Search"
                component={SearchStack}
                options={{
                tabBarIcon: ({size, color}) => {
                    return (
                        <View
                            style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 10
                        }}>
                            <AntDesign name="search1" size={size} color={color}/>
                            <Text style={styles.tabBarText}>Search</Text>
                        </View>
                    )
                }
            }}/>
        </Tab.Navigator>
    )
};

export default TabNavigator;


const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.5,
        elevation: 5
    },
    tabBarText: {
        color: '#ededed',
        fontSize: 10,
        paddingTop: 10
    }
})
