import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, Text, View } from 'react-native';

import avatar from '../../images/avatar.png';

export default function Activities() {
    return (
        <View style={styles.Container} >
            <View style={styles.Header} >  
                <Text style={styles.Title}>Atividades</Text>      
            </View> 

            <View style={styles.Card} > 
                <View style={styles.CardHeader}>
                    <Image source={avatar} style={styles.Avatar}/>
                    <Text style={styles.Descrition}>
                        <Text style={styles.Bold}>Você</Text> pagou a <Text style={styles.Bold}>@mateusilva</Text> 
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
Container: {
    marginTop: 20,
    paddingLeft:16,
    paddingRight:16,
    padding:15, 
},
Header: {
    height: 50,
    justifyContent: "center",
},
Title: {
    color: '#fff',
    fontWeight: "bold",
    fontSize:18,
},
Card: {
    backgroundColor: '#1e222b',
    borderRadius: 8, 
    marginTop: 20,
    padding: 15,
},
CardHeader: {
    flexDirection: 'row',
    alignItems: "center",  
},
Avatar: {
},
Descrition: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 15,
},
Bold: {
    fontWeight: "bold",
},
}); 

