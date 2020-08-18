import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, Text, View } from 'react-native';

import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

const items =[
    {
        key: String(Math.random()),
        img:img1,
        Label: 'Recarga',
    },
    {
        key: String(Math.random()),
        img: img2,
        Label: 'Uber',
    },
    {
        key: String(Math.random()),
        img: img3,
        Label: 'Ônibus',
    },
    {
        key: String(Math.random()),
        img: img4,
        Label: 'TV',
    },
    {
        key: String(Math.random()),
        img: img5,
        Label: 'Doações',
    },
    {
        key: String(Math.random()),
        img: img6,
        Label: 'Barras',
    },
    {
        key: String(Math.random()),
        img: img7,
        Label: 'FAQ',
    },

]

export default function Suggestions() {
    return (
        <ScrollView 
            horizontal={true}  // se horizontal scroll
            showsHorizontalScrollIndicator={false} 
            style={styles.container} contentContainerStyle= {{
            alignItems:'center',
            justifyContent:'center',
            flexGrow: 1,
            paddingLeft:16
        }}>        
            {items.map((item) => (
                <TouchableOpacity key={item.key} style={styles.Option}>
                <Image source={item.img} />
                <Text style={styles.Label}>{item.Label}</Text>
                </TouchableOpacity>
            ))}                
        </ScrollView> 
    );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1e222b', 
      height: 130,
    },
Option: {
    width: 80,
    marginLeft: 16,
    alignItems: "center",
}, 
Img: {

}, 
Label: {
    color: '#fff',
    fontWeight: "bold",
    marginTop: 8,
    fontSize: 14,
},
}); 

