import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const EditSvg = () => (
  <Svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M8 13.334h6'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M11 2.333a1.414 1.414 0 1 1 2 2l-8.333 8.334L2 13.332l.667-2.667L11 2.333Z'
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default EditSvg;
