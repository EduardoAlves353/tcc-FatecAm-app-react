import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Maps from './pages/Maps';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Titulo para Main',
        headerTitleAlign: 'center',
      },
    },
    Maps: {
      screen: Maps,
      navigationOptions: {
        title: 'Titulo para o Mapa',
      },
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#7D40E7',
      },
    },
  })
);

export default Routes;