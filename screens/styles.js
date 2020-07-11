import { StyleSheet, Dimensions, Platform } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /3;
import {
  SafeAreaView
} from 'react-native';



export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#71cb67',
  },
  container: {
    backgroundColor: '#71cb67',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
       //headerMode: 'none',
  },
  LogInButton:{
        backgroundColor: "#fff",
        borderRadius: 5,
        height: 54,
        marginTop: 30,
        width: 200,
        textAlign: "center",
        fontSize: 20,
        alignSelf: "center",
      },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 0,
    padding: 20,
    marginTop: 0
  },
  RegisterButton: {
      backgroundColor: "#fff",
      borderRadius: 5,
      borderColor: 'black',
      height: 54,
      marginTop: 30,
      width: 300,
      textAlign: "center",
      fontSize: 20,
      alignSelf: "center",
      },
  contentContainer: {
    paddingTop: 30,
    },

    developmentModeText: {
      marginBottom: 10,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },

    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },

    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 0,
      marginLeft: -10,
    },

    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },

    homeScreenFilename: {
      marginVertical: 7,
    },

    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },

    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },

    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },

    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },

    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },

    navigationFilename: {
      marginTop: 5,
    },

    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },

    helpLink: {
      paddingVertical: 15,
    },

    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },

  });


// import { StyleSheet, Dimensions } from 'react-native';
// const window = Dimensions.get('window');

// export const IMAGE_HEIGHT = window.width / 2;
// export const IMAGE_HEIGHT_SMALL = window.width /7;

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