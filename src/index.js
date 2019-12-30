import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './Screens/Home';

const Drawer = createDrawerNavigator(
  {
    Home: {
      name: 'Home',
      screen: Home,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(Drawer);
