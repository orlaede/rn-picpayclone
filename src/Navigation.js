import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';


import PayButton from './components/PayButton';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';


const Tab = createBottomTabNavigator();

Icon.loadFont();
AntIcon.loadFont();

const icons = {
    Home: {
    lib: Ionicons, 
    name: 'home-outline',
    },
    Wallet: {
    lib: Ionicons,
    name: 'wallet-outline',
    },
    // Pay: {
    // lib: Ionicons,
    // name: 'cash-outline',
    // },
    Notifications: {
    lib: Ionicons,
    name: 'notifications-outline',
    },
    Settings: {
    lib: AntIcon,
    name: 'setting',
    },
}


export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route , navigation }) => ({
                tabBarIcon: ({ color, size , focused}) => {
                   if (route.name == 'Pay') {
                       return (
                            <PayButton 
                            onPress={() => navigation.navigate('Pay')}
                            focused={focused}
                            />
                       );
                   } 
                   const {lib: MyIcon, name } = icons[route.name];
                   //console.warn(icons[route.name]);
                   return <MyIcon name={name} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgb(255,255,255,0.2)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c'
            }}
        > 
            <Tab.Screen 
                name = "Home" 
                component = {HomeScreen} 
                options ={{
                    title: 'Início',
                    //tabBarIcon: () => <Icon name="home-outline" size={20} color={"#fff"}/>,
                }}
            />
            <Tab.Screen 
                name = "Wallet" 
                component = {WalletScreen} 
                options ={{
                    title: 'Carteira',
                    //tabBarIcon: () => <Icon name="wallet-outline" size={20} color={"#fff"} />,
                }}
            />
            <Tab.Screen 
                name = "Pay" 
                component = {PayScreen} 
                    options ={{
                    title: '',
                    //tabBarIcon: () => <Icon name="cash-outline" size={20} color={"#fff"} />,
                }}
            />

            <Tab.Screen 
                name = "Notifications" 
                component = {PayScreen} 
                    options ={{
                    title: 'Notificações',
                    //tabBarIcon: () => <Icon name="notifications-outline" size={20} color={"#fff"} />,
                }}
            />

            <Tab.Screen 
                name = "Settings" 
                component = {PayScreen} 
                    options ={{
                    title: 'Ajustes',
                    //tabBarIcon: () => <Icon name="ios-settings" size={20} color={"#fff"} />,
                }}
            />

        </Tab.Navigator>
    );
}