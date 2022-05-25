import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import DatabaseScreen from '../screens/DatabaseScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import ClientsScreen from '../screens/ClientsScreen';
import { DrawerParamList, DatabaseParamList, MyAccountParamList, ClientsParamList } from '../types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Database"
        component={DatabaseNavigator}/>
      <Drawer.Screen
        name="MyAccount"
        component={MyAccountNavigator}
      />
      <Drawer.Screen
        name="Clients"
        component={ClientsNavigator}
      />
    </Drawer.Navigator>
  );
}

const DatabaseStack = createStackNavigator<DatabaseParamList>();

function DatabaseNavigator() {
  return (
    <DatabaseStack.Navigator>
      <DatabaseStack.Screen
        name="DatabaseScreen"
        component={DatabaseScreen}
      />
    </DatabaseStack.Navigator>
  )
}

const MyAccountStack = createStackNavigator<MyAccountParamList>();

function MyAccountNavigator() {
  return (
    <MyAccountStack.Navigator>
      <MyAccountStack.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
      />
    </MyAccountStack.Navigator>
  )
}

const ClientsStack = createStackNavigator<ClientsParamList>();

function ClientsNavigator() {
  return (
    <ClientsStack.Navigator>
      <ClientsStack.Screen
        name="ClientsScreen"
        component={ClientsScreen}
      />
    </ClientsStack.Navigator>
  )
}
