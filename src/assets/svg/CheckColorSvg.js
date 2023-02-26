import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const CheckColorSvg = () => (
  <Svg width={14} height={10} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G clipPath='url(#a)'>
      <Path
        d='M12.333 1 5 8.333 1.667 5'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h14v10H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CheckColorSvg;
