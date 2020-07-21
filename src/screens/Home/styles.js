import React from 'react';
import { Text, StyleSheet, SafeAreaView , StatusBar, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

//export const Wrapper = styled.SafeAreaView``;

export function Wrapper() {
    return (
        <SafeAreaView style={styles.container}></SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000', 
      flex: 1,
    },
});