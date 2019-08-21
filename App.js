import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Pages/Home';
import TodoScreen from'./Pages/TodList';
import SignInScreen from './Auth/Login';
import SignUpScreen from './Auth/Register'

// Creating a StackNaivigator for the entire pages
    const navigator = createStackNavigator({
      Home:HomeScreen,
      Login:SignInScreen,
      Register:SignUpScreen,
      List:TodoScreen
    });
    const app = createAppContainer(navigator);
    export default app;

 