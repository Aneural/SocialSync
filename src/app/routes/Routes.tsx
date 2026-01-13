import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/public/(home)/HomeScreen';
import StartScreen from '../screen/public/(start)/StartScreen';
import  FaqScreen  from '../screen/public/faq/FaqScreen';
import { RootStackParamList } from '../../types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name='Home' 
            component={ HomeScreen } 
            options={{
              title: 'Home',
              headerShown: false,
          }}
          />
          <Stack.Screen 
            name='Start' 
            component={ StartScreen } 
            options={{
              title: 'Start',
              headerShown: false,
          }}
          />
          <Stack.Screen 
            name='Faq'
            component={ FaqScreen }
            options={{
              title: 'Faq',
              headerShown: false,
            }}/>
      </Stack.Navigator>
  )
};

export default Routes
