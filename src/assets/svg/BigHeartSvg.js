import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({fillColor = '#fff', strokeColor = '#4A5F73'}) => (
  <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z'
      fill={fillColor}
      stroke={strokeColor}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default SvgComponent;
