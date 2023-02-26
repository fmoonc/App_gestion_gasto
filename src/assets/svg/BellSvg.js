import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BellSvg = () => (
  <Svg width={16} height={17} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M12 5.833a4 4 0 1 0-8 0c0 4.667-2 6-2 6h12s-2-1.333-2-6Z'
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M9.153 14.5a1.333 1.333 0 0 1-2.306 0'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default BellSvg;
