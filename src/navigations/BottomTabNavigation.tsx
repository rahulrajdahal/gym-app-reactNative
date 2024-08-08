import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {DumbellIcon, HomeIcon, ProfileIcon} from '../../assets/icons';
import sizes from '../../assets/sizes';
import {HomeScreen, ProfileScreen, WorkoutScreen} from '../screens';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#24A19C',
        tabBarInactiveTintColor: '#24A19C80',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#D3ECEB',
          borderRadius: sizes.appWidth(1.96875),
          maxWidth: sizes.appWidth(20.9375),
          elevation: 0,
          width: '100%',
          position: 'absolute',
          bottom: sizes.appHeight(3.37),
          left: sizes.appWidth(1.25),
          right: sizes.appWidth(1.25),
          height: sizes.appHeight(3.9375),
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <DumbellIcon name="workout" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <HomeIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <ProfileIcon name="profile" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
