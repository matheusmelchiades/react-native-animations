import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './Screens/Home';
import TabBar from './Screens/TabBar';

const Drawer = createDrawerNavigator(
  {
    Home: {
      name: 'Home',
      screen: Home,
    },
    TabBar: {
      name: 'TabBar',
      screen: TabBar,
    },
  },
  {
    initialRouteName: 'TabBar',
  },
);

export default createAppContainer(Drawer);
