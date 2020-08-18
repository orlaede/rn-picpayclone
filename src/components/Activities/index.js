import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

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

                <View style={styles.CardBody}>
                    <Text style={styles.UserName}>Matheus Silva</Text>
                </View>

                <View style={styles.CardFooter}>

                    <View style={styles.Details}>
                        <Text style={styles.Value}>R$ 18,00</Text>

                        <View style={styles.Divider}></View>

                        <Icon name="lock" color="#fff" sixe={14}/>
                        <Text style={styles.Date}>há 2 anos</Text> 

                    </View>

                    <View style={styles.Actions}>
                        <TouchableOpacity style={styles.Option}>
                            <MaterialCommunityIcons name="comment-outline" size={14}
                            color="#fff" />
                            <Text style={styles.OptionLabel}>0</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Option}>
                            <AntDesign name="hearto" size={14}
                            color="#fff" />
                            <Text style={styles.OptionLabel}>0</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
Container: {
    marginTop: 10,
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
CardBody: {
    marginTop:20,

},
UserName: {
    color: '#fff',
    fontSize: 20,
},
CardFooter: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between"
},
Details: {
    flexDirection: "row",
    alignItems: "center",
},
Value: {
    color: '#f75175',
    fontSize: 14,
    fontWeight: "bold",
},

Divider: {
    width: 2,
    height: 13,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 10,
},
Date: {
    color: '#fff',
    marginLeft: 5,
},

Actions: {
    flexDirection: "row",
},
Option: {
    marginLeft: 15,
    flexDirection: "row",
},
OptionLabel: {
    color: '#fff',  
    fontSize: 14,
    marginLeft:5,
},

}); 

