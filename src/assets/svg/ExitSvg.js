import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const ExitSvg = () => (
  <Svg width={50} height={50} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='m29 30 5-5-5-5M34 25H22M22 34h-4a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2h4'
      stroke='#142535'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Circle cx={25} cy={25} r={24.4} stroke='#142535' strokeWidth={1.2} />
  </Svg>
);

export default ExitSvg;
