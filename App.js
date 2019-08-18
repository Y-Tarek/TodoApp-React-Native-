import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Home';
import SignInScreen from './Auth/Login';
import SignUpScreen from './Auth/Register'

// Creating a StackNaivigator for the entire pages
    const navigator = createStackNavigator({
      Home:HomeScreen,
      Login:SignInScreen,
      Register:SignUpScreen
      
    });
    const app = createAppContainer(navigator);
    export default app;

 