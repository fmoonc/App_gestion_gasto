import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CreditCardSvg = () => (
  <Svg width={16} height={17} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M14 3.167H2c-.736 0-1.333.596-1.333 1.333v8c0 .736.597 1.333 1.333 1.333h12c.736 0 1.333-.597 1.333-1.333v-8c0-.737-.597-1.333-1.333-1.333Z'
      fill='#DBE9F5'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M.667 7.167h14.666'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default CreditCardSvg;
