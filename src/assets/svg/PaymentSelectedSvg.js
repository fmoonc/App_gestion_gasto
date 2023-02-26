import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const PaymentSelectedSvg = () => (
  <Svg width={15} height={10} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <G clipPath='url(#a)'>
      <Path
        d='m12.842 1-7.52 7.333L1.906 5'
        stroke='#00824B'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='translate(.196)' d='M0 0h14.356v10H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default PaymentSelectedSvg;
