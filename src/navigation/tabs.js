import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Pic from "../images/Ellipse.png"

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Remind from "../screens/Remind";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 65,
        height: 65,
        borderRadius: 45,
        // backgroundColor: THEME.COLORS.primary,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);
const MockupScreenForModal = () => <></>;
const Tabs = () => {
  //  const {setShowNewTaskModal} = useData();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          backgroundColor: 'white',
          borderRadius: 15,
          borderBottomColor: '#ccc',
          borderBottomWidth: 4,
          borderRightColor: '#ccc',
          borderRightWidth: 4,
          borderLeftColor: '#ccc',
          borderLeftWidth: 1,
          // height: SIZES.tabBarHeight,
          paddingBottom: 20,
          ...styles.shadow,
        },


        headerStyle: {
          borderBottomColor: 'transparent',
          borderBottomWidth: 1,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 4,
        },
        headerTitleAlign: 'center',

        headerTitleStyle: {
          textTransform: 'uppercase',
          fontWeight: '700',
          fontSize: 24,
        },
      }}>
      <Tab.Screen
        name="Homee"
        component={Home}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>

              <Image source={Pic} style={{ height: 50, width: 50, }} />

            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image source={Pic} style={{ height: 50, width: 50, }} />
              {/* <FontAwesomeIcon
                  color={focused ? THEME.COLORS.primary : '#748c94'}
                  size={24}
                  icon={faCalendar}
                /> */}
              {/* {focused && (
                  <Text
                    style={{
                      //color: focused ? THEME.COLORS.primary : '#748c94',
                      fontSize: 9,
                      textTransform: 'uppercase',
                    }}>
                    Calendar
                  </Text>
                )} */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={Pic} color="#fff" />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();

            //Any custom code here
            // setShowNewTaskModal(true);
          },
        }}
      />

      <Tab.Screen
        name="Profilee"
        component={Home}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image source={Pic} style={{ height: 50, width: 50, }} />
              {/* <FontAwesomeIcon
                  color={focused ? THEME.COLORS.primary : '#748c94'}
                  icon={faCog}
                  size={24}
                /> */}
              {/* {focused && (
                  // <Text
                  //   style={{
                  //     //color: focused ? THEME.COLORS.primary : '#748c94',
                  //     fontSize: 9,
                  //     textTransform: 'uppercase',
                  //   }}>
                  //   Settings
                  // </Text>
                )} */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profileee"
        component={Home}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image source={Pic} style={{ height: 50, width: 50, }} />
              {/* <FontAwesomeIcon
                  color={focused ? THEME.COLORS.primary : '#748c94'}
                  icon={faCog}
                  size={24}
                /> */}
              {/* {focused && (
                  // <Text
                  //   style={{
                  //     //color: focused ? THEME.COLORS.primary : '#748c94',
                  //     fontSize: 9,
                  //     textTransform: 'uppercase',
                  //   }}>
                  //   Settings
                  // </Text>
                )} */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
