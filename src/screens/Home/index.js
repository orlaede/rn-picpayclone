import React from 'react';
import { Text, StyleSheet, SafeAreaView , StatusBar, View, ScrollView } from 'react-native';
import MaterialCommunityIcons from  'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

MaterialCommunityIcons.loadFont();
AntDesign.loadFont();

//import { Wrapper } from './styles';
 
export default function Home() {
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <SafeAreaView style={styles.container}>
          <ScrollView>
              <View style={styles.header}>

                <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                
                <View style={styles.balanceContainer}>
                  <Text style={styles.balanceTitle}>Meu Saldo</Text>
                  <Text style={styles.balance}>R$ 0,00</Text>
                </View>

                <AntDesign name="gift" size={30} color="#10c86e" />
                
              </View>

              <Suggestions />
              <Activities />
              <Tips />
              <Banner />

            </ScrollView>
        </SafeAreaView>
        </>
        );

}  

const styles = StyleSheet.create({
container: {
    backgroundColor: '#000', 
    flex: 1,
},
header: {
    height: 50, 
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
},
  balanceContainer: {

},
balanceTitle: {
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: 14,
  textAlign: "center",
},
balance: {
  color: '#fff',
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "center",

},
}); 

