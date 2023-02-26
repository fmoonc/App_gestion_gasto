import {TouchableOpacity} from 'react-native';
import React from 'react';

const CustomTouchableOpacity = ({
  style,
  row,
  children,
  spaceBetween,
  itemsCenter,
  flex,
  selfEnd,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: row ? 'row' : 'column',
        justifyContent: spaceBetween ? 'space-between' : 'flex-start',
        alignItems: itemsCenter ? 'center' : 'flex-start',
        flex: flex ? 1 : 0,
        alignSelf: selfEnd ? 'flex-end' : 'flex-start',
        ...style,
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;
