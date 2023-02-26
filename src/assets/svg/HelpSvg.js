import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HelpSvg = () => (
  <Svg width={16} height={17} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M8 15.167A6.667 6.667 0 1 0 8 1.833a6.667 6.667 0 0 0 0 13.334Z'
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M8 11.833h.008M6.06 6.5a2 2 0 0 1 3.887.667c0 1.333-2 2-2 2'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default HelpSvg;
