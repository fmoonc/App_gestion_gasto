import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const MessageSvg = () => (
  <Svg width={70} height={70} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle cx={35} cy={35} r={34} stroke='#142535' strokeWidth={2} />
    <Path
      d='M46.25 38.75a2.5 2.5 0 0 1-2.5 2.5h-15l-5 5v-20a2.5 2.5 0 0 1 2.5-2.5h17.5a2.5 2.5 0 0 1 2.5 2.5v12.5Z'
      fill='#DBE9F5'
      stroke='#142535'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default MessageSvg;
