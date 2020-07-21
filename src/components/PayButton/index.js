import React from 'react';
import { Button } from './styles';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

// export default function PayButton(){
//     //return <Text style={{color:'#fff'}}>PayButton</Text >
//     return <Button style={{color:'#fff'}}>PayButton</Button>
//     // return (
//     //     <Button
//     //         colors={['#00fc6c', '#00ac4a']}
//     //         start={[1, 0.2]}
//     //     > 
//     //         <MaterialIcons name="attach-money" sixe={30} color="#fff"/>

//     //     </Button >
//     // ); 
// }

//<Icon name="cash-outline" size={20} color={focused ? '#000' : '#fff'}/>

export default function PayButton ({ onPress , focused }) {
    
    ButtonClickCheckFunction = () =>{
        Alert.alert("Button Clicked")
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={1} 
            style={
                focused 
                ? styles.myButtonDisabled
                : styles.myButton
            }
            //activeOpacity = { .8 }
            onPress={onPress}//{ this.ButtonClickCheckFunction }
        >
            <View style={styles.btnContainer}>
            <Icon name="cash" size={20} color={focused ? '#000' : '#fff'}/>
            </View>
            <Text style={
                focused 
                ? styles.TextStyleDisabled
                : styles.TextStyle
            }
            >Pagar</Text>    
        </TouchableOpacity>            
    </View>
    );
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#fff',
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',

      },
    myButton:{
      padding: 10,
      height: 60,
      width: 60,  //The Width must be the same as the height
      borderRadius:30, //Then Make the Border Radius twice the size of width or Height   
      backgroundColor:'#00ac4a',
      //alignContent='center'
    },
    myButtonDisabled:{
        padding: 10,
        height: 60,
        width: 60,  //The Width must be the same as the height
        borderRadius:30, //Then Make the Border Radius twice the size of width or Height   
        backgroundColor:'#fff',
        //alignContent='center'
    },
    TextStyle:{
        color:'#fff',
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize:12,
      },
    TextStyleDisabled:{
        color:'#000',
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize:12,
    }
  });