import { View, Text,Image } from "react-native-web";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function _layout(){
    return (
        <Tabs >   
            <Tabs.Screen name="Home" options={{
                headerTitle:"Find a Doc",
                tabBarLabel: "Find",
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size, focused }) => (
                    <AntDesign
                      name="home"
                      size={size}
                      color={focused ? 'red' : color}  when focused
                    />
                  ),
            }} />
            <Tabs.Screen name="appointments" options={{
                headerTitle:"My Appt",
                tabBarLabel: "My Appt",
                tabBarIcon: ({ color, size, focused }) => (
                    <MaterialIcons
                      name="schedule"
                      size={size}
                      color={focused ? 'red' : color}  when focused
                    />
                  ),
            }} />
            <Tabs.Screen name="Profile" options={{
                headerTitle:"Profile",
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size, focused }) => (
                    <AntDesign
                      name="user"
                      size={size}
                      color={focused ? 'red' : color}  when focused
                    />
                  ),
            }} />
            <Tabs.Screen name="Records" options={{
                headerTitle:"Records",
                tabBarLabel: "Records",
                tabBarIcon: ({ color, size, focused }) => (
                    <Entypo
                      name="documents"
                      size={size}
                      color={focused ? 'red' : color}  when focused
                    />
                  ),
            }} />
        </Tabs>
    )
}