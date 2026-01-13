import React from 'react';
import {Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SlideOneScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <Text>SlideOne</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'lightblue',
    }
});

export default SlideOneScreen;