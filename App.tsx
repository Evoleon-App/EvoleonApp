import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import type {ReactNode} from 'react';
// import { SafeAreaView,ScrollView,StyleSheet,Text,Button,View,} from 'react-native'




// const App: () => Node = () => {
  

// GoogleSignin.configure({
//   webClientId: '28830424326-hfou87j4113esa490l75m2ull3kmnau0.apps.googleusercontent.com',
// });
// const signInWithGoogleAsync = async () => {
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   const user_sign_in = auth().signInWithCredential(googleCredential);
// user_sign_in.then((user)=>{
//   console.log(user);
// })
// .catch((error)=>{
//   console.log(error);
// })

// return (
//   <view style={{flex:1,justifyContent:'center',alignItems:'center' }}>
//     <Button 
//     title='sign in with google'
//     onPress={signInWithGoogleAsync}
//     />
//   </view>
// )
// };

// }

export default function App() 
{
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />        
        <StatusBar />
      </SafeAreaProvider>
    );
  // }
}
