import React from 'react'
import { View, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';

import Test from './src/screens/Test';
import AppContext from './src/context/AppContext';


import CreateExpense from './src/screens/CreateExpense';
import CreateGoal from './src/screens/CreateGoal';
import Stats from './src/screens/Stats';

import Tabs from './src/navigation/tabs';
import ExpensiveDetail from './src/screens/ExpensiveDetail';
import GoalDetail from './src/screens/GoalDetail';
import AddingAmount from './src/screens/AddingAmount';


const Stack = createStackNavigator();

export default function App() {
  return (
    <AppContext>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#B0B0B0" />
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Main"
              component={Tabs}
            />
            <Stack.Screen name="Create Goal" component={CreateGoal} />

            <Stack.Screen name="Stats" component={Stats} />
            <Stack.Screen name="Create Expense" component={CreateExpense} />

            <Stack.Screen name="Expense Detail" component={ExpensiveDetail} />

            <Stack.Screen name="Goal Detail" component={GoalDetail} />

            <Stack.Screen name="Adding Amount" component={AddingAmount} />
            
            <Stack.Screen name="Test" component={Test} />
            
            {/* <Tabs /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </AppContext>
  )
}
