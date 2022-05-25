import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

import { Text, View } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import { useEffect } from 'react';
import main from '../styles/main';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';


export default function FileSystemScreen() {
    const navigation = useNavigation();
    
    useEffect(() => {
      navigation.setOptions({
        headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
      });
    });
  
    return (
       

      <View style={main.centered}>
          
        <Text
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
            
          Evoleon APP
        </Text>
        <br></br>
      <div id="login-box">
       
         {/* <!-- <img class="evoleon-logo" src="desktop/Evoleon Final.jpg" alt="logo"> --> */}
         {/* <h1>Sign up</h1> */}

         <input type="text" id="email" name="email" placeholder="E-mail" />
         <input type="password" id="password" name="password" placeholder="Password" />

         <input type="submit" id="saveData" name="signup_submit" value="Sign in" />
       </div>
      {/* <button onclick="login()">login</button> */}
      <button class="social-signin google" id='login'>Log in with Google</button>
      </View>
    
    )
  };

