import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterOptionScreen from './screens/RegisterOptionScreen';
import RegistrationScreen from './screens/UserRegistration';
import CompanyRegistration from './screens/CompanyRegistration';
import UserProfile from './screens/UserProfile';
import Dashboard from './screens/DashBoard';
import ParkingDetailsScreen from './screens/ParkingOption';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }} 
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ParkingDetails" component={ParkingDetailsScreen} />
        <Stack.Screen 
          name="RegistrationOptions" 
          component={RegisterOptionScreen} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegistrationScreen} 
        />
        {/* Added Company Registration Screen */}
        <Stack.Screen 
          name="CompanyRegister" 
          component={CompanyRegistration} 
        />
        {/* Added UserProfile Screen */}
        <Stack.Screen 
          name="UserProfile" 
          component={UserProfile} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}