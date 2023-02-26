import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const WishlistTabSvg = ({bgColor = '#fff', iconColor = '#142535'}) => (
  <Svg width={50} height={58} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle cx={25} cy={33} r={25} fill={bgColor} />
    <Path
      d='M32.925 9.3h-15.85l2.878-1.059A4.251 4.251 0 0 0 18.485 0H15h20-3.484a4.251 4.251 0 0 0-1.468 8.241L32.925 9.3Z'
      fill={bgColor}
    />
    <Path
      d='M33.84 25.61a5.5 5.5 0 0 0-7.78 0L25 26.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L25 42.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z'
      stroke={iconColor}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default WishlistTabSvg;
