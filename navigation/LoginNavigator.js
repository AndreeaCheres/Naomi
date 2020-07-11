import { createAppContainer, createStackNavigator } from "react-navigation";
import RegisterScreen from './../screens/RegisterScreen';
import { colors } from "react-native-elements";

// import SignUp from "./screens/SignUp";
// import SignIn from "./screens/SignIn";

/* https://medium.com/the-react-native-log/building-an-authentication-flow-with-react-navigation-fb5de2203b5c */
/* https://medium.com/@juliofeferman/running-facebook-authentication-in-react-native-with-firebase-219a002588fa */

export default createAppContainer(
    createStackNavigator({
        SignUp: {
            screen: RegisterScreen,
            navigationOptions: {
                text: "log in",
                headerVisible: true,
            }
        }
    }));