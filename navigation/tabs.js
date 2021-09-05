import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';

import { icons, COLORS } from '../constants';

const { flash, cube, search, camera, heartRed } = icons;

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    display: 'flex',
                    position: 'absolute',
                    //height: '10%'
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <Image
                            source={flash}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    ))
                }}
            />
            <Tab.Screen
                name='Box'
                component={Home}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <Image
                            source={cube}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    ))
                }}
            />
            <Tab.Screen
                name='Camera'
                component={Home}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <View
                            style={{
                                height: 50,
                                alignItems:'center',
                                justifyContent:'center',
                                width: 50,
                                borderRadius: 25,
                                backgroundColor:COLORS.primary
                            }}
                        >
                            <Image
                                source={camera}
                                resizeMode='contain'
                                style={{
                                    width: 23,
                                    height: 23
                                }}
                            />
                        </View>
                    ))
                }}
            />
            <Tab.Screen
                name='Search'
                component={Home}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <Image
                            source={search}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    ))
                }}
            />
            <Tab.Screen
                name='Favourite'
                component={Home}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <Image
                            source={heartRed}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    ))
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;