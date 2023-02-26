import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const MapPinSvg = () => (
  <Svg width={16} height={17} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G
      clipPath='url(#a)'
      stroke='#4A5F73'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <Path
        d='M14 7.167c0 4.666-6 8.666-6 8.666s-6-4-6-8.667a6 6 0 0 1 12 0Z'
        fill='#DBE9F5'
      />
      <Path d='M8 9.166a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='translate(0 .5)' d='M0 0h16v16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MapPinSvg;
