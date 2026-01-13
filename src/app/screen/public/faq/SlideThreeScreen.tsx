import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SlideThreeScreen = () => {
  return (
        <SafeAreaView style={styles.mainContainer}>
            <Text>SlideThree</Text>
        </SafeAreaView>
      )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'lightgreen',
    }
});

export default SlideThreeScreen;
