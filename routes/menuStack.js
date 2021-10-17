import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/login';
import Register from '../screens/register';

const screens = {
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
};

const MenuStack = createStackNavigator(screens);

export default createAppContainer(MenuStack);
