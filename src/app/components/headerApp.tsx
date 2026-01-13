import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import stylesApp from '../../styles/HomeScreenStyles/styles';

type CardProps = { /* hacer que el componente pueda tener 'hijos' */
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

const HeaderApp = ({ children, style }: CardProps) => {
  return (
    <View style={[styles.headerApp, style]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  headerApp: {
    flexDirection: 'row',
    marginTop: 0,
    justifyContent: 'space-around',
    width: '100%',
    height: 60,
    alignItems: 'center',
  },
});

export default HeaderApp;