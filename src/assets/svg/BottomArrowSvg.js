import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const BottomArrowSvg = () => (
  <Svg width={8} height={5} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G clipPath='url(#a)'>
      <Path
        d='M.8.8 4 4 7.2.8'
        stroke='#4A5F73'
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='rotate(90 4 4)' d='M0 0h4.8v8H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BottomArrowSvg;
