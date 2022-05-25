import { GestureResponderEvent } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type DrawerParamList = {
  Database: undefined;
  MyAccount: undefined;
  Clients: undefined;  
};

export type DatabaseParamList = {
  DatabaseScreen: undefined;
};

export type MyAccountParamList = {
  MyAccountScreen: undefined;
};

export type ClientsParamList = {
  ClientsScreen: undefined;
};

export type onPressFunc = (event: GestureResponderEvent) => void;
