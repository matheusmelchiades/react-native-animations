import React from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import * as shape from 'd3-shape';

const { width } = Dimensions.get('window');
const heigth = 64;
const d = shape
  .line()
  .x(d => d.x)
  .y(d => d.y);

const TabBar = () => {
  return (
    <>
      <Svg>
        <Path {...{}} />
      </Svg>
      <SafeAreaView />
    </>
  );
};

export default TabBar;
