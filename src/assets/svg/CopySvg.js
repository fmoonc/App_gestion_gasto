import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CopySvg = () => (
  <Svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M16.667 7.5h-7.5c-.92 0-1.667.746-1.667 1.667v7.5c0 .92.746 1.666 1.667 1.666h7.5c.92 0 1.666-.746 1.666-1.666v-7.5c0-.92-.746-1.667-1.666-1.667Z'
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M4.167 12.5h-.834a1.667 1.667 0 0 1-1.666-1.667v-7.5a1.667 1.667 0 0 1 1.666-1.667h7.5A1.667 1.667 0 0 1 12.5 3.333v.833'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default CopySvg;
