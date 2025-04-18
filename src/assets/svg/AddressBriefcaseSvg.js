import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const AddressBriefcaseSvg = () => (
  <Svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M13.333 4.667H2.667c-.737 0-1.334.596-1.334 1.333v6.666c0 .737.597 1.334 1.334 1.334h10.666c.737 0 1.334-.597 1.334-1.334V6c0-.737-.597-1.333-1.334-1.333Z'
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M10.667 14V3.333A1.334 1.334 0 0 0 9.333 2H6.667a1.333 1.333 0 0 0-1.334 1.333V14'
      stroke='#4A5F73'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default AddressBriefcaseSvg;
