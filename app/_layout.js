import { View, Text } from "react-native-web";
import React from "react";
import { Stack } from "expo-router";

export default function _layout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{title : "Home"}} />
            <Stack.Screen name="registration" options={{title : "Registeration"}} />
            <Stack.Screen name="user/sign_in" options={{title : "Sign In"}} />
            <Stack.Screen name="user/sign_up" options={{title : "Sign Up"}} />
            <Stack.Screen name="(tabs)" options={{headerShown:false}} />
        </Stack>
    )
}