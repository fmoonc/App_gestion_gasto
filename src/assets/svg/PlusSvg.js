import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusSvg = () => (
  <Svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M8 3.333v9.334M3.333 8h9.334'
      stroke='#142535'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default PlusSvg;
