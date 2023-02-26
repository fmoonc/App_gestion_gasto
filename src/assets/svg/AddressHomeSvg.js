import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const AddressHomeSvg = () => (
  <Svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path fill='#fff' d='M0 0h16v16H0z' />
    <Path
      d='m2 6 6-4.667L14 6v7.334a1.333 1.333 0 0 1-1.333 1.333H3.333A1.333 1.333 0 0 1 2 13.334V6Z'
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M6 14.667V8h4v6.667'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default AddressHomeSvg;
