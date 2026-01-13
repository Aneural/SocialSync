import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Routes from './routes/Routes'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
         <Routes />
        </NavigationContainer>
    </SafeAreaProvider>
     
  )
}

export default App
