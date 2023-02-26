import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HeartSvg = ({fillColor = '#fff', strokeColor = '#4A5F73'}) => (
  <Svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M13.893 3.073a3.667 3.667 0 0 0-5.186 0L8 3.78l-.707-.707A3.668 3.668 0 0 0 2.107 8.26l.706.707L8 14.153l5.187-5.186.706-.707a3.667 3.667 0 0 0 0-5.187v0Z'
      fill={fillColor}
      stroke={strokeColor}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default HeartSvg;
