// import React, { Component } from "react";
// import styles_register from "./styles_register";
// import {
//   Keyboard, Text, View, TextInput, StyleSheet, Platform,
//   TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Image, ScrollView,
// } from 'react-native';
// import { Button, ThemeProvider } from 'react-native-elements';
// import { onSignIn } from './../appState/appStore';


// export default class RegisterScreen extends Component {
//   registerWithFacebook () {
//     //TODO: implement FB registration
//     //register ... https://medium.com/@juliofeferman/running-facebook-authentication-in-react-native-with-firebase-219a002588fa
//     console.log(this.props);
//     this.props.isUserLoggedIn = true;

//     //call on sign in function that will store authentication state
//     onSignIn().then(()=>{
//       //navigate to main view if user is loggedin
//       this.props.navigation.navigate("Main");
//     });    
//   }

//   render() {
//     console.log('render register  -> renderComponent');
//     return (
//     // <ScrollView>
//       <View style={styles.container}>
//         <KeyboardAvoidingView style={styles_register.containerView} behavior="padding">
//           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//             <View style={styles_register.registerScreenContainer}>
//               <View style={styles_register.registerFormView}>
//                <Image
//                 source={
//                   __DEV__
//                     ? require('../assets/images/logo.png')
//                     : require('../assets/images/logo.png')
//                 }
//                 style={styles.welcomeImage}
//                 />
//                 <TextInput placeholder="Server" placeholderColor = "#ffffff" style={styles.RegisterButton} />
//                 <TextInput placeholder="Password" placeholderColor = "#ffffff" style={styles.RegisterButton} secureTextEntry={true} />
//                 <TextInput placeholder="Log In" placeholderColor = "#ffffff" style={styles.LogInButton} />
               
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>
//       </View>
//     //</ScrollView>
//     );
    

//   }
// }

// RegisterScreen.navigationOptions = {
//   header: null,
// };

// //https://www.canva.com/join/entrance-triumph-disposal

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#71cb67",
//   },
//   RegisterButton: {
//   backgroundColor: "#fff",
//   borderRadius: 5,
//   borderColor: 'black',
//   height: 54,
//   marginTop: 30,
//   width: 300,
//   textAlign: "center",
//   fontSize: 20,
//   alignSelf: "center",
//   },
//   LogInButton:{
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     height: 54,
//     marginTop: 30,
//     width: 200,
//     textAlign: "center",
//     fontSize: 20,
//     alignSelf: "center",
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
//   welcomeImage: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//     marginTop: 120,
//     alignSelf: 'center',  
//   },
// });

import React, { Component } from 'react';
import { View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView,TouchableWithoutFeedback} from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import logo from './logo.png';
import styles_register from "./styles_register";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  render() {
    console.log('render register  -> renderComponent');
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles_register.registerScreenContainer}>
              <View style={styles_register.registerFormView}>
            <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />
                <TextInput placeholder="Server" placeholderColor = "#ffffff" style={styles.RegisterButton} />
                <TextInput placeholder="Password" placeholderColor = "#ffffff" style={styles.RegisterButton} secureTextEntry={true} />
                <TextInput placeholder="Log In" placeholderColor = "#ffffff" style={styles.LogInButton} />
                </View>
                </View>
              </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
};
/*
RegisterScreen.navigationOptions = {
   header: null,
 }
 */

export default Demo;