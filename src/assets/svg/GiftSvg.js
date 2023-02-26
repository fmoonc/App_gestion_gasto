import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const GiftSvg = () => (
  <Svg width={16} height={17} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path d='M13.333 8.5v6.667H2.667V8.5' fill='#DBE9F5' />
    <Path
      d='M13.333 8.5v6.667H2.667V8.5'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M14.667 5.167H1.333V8.5h13.334V5.167Z'
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M8 15.166v-10'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M8 5.167H5a1.667 1.667 0 0 1 0-3.333c2.333 0 3 3.333 3 3.333ZM8 5.167h3a1.667 1.667 0 1 0 0-3.333c-2.333 0-3 3.333-3 3.333Z'
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default GiftSvg;
