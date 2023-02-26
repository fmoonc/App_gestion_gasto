import {View, Text} from 'react-native';
import React from 'react';

const CustomView = ({
  style,
  row,
  children,
  spaceBetween,
  itemsCenter,
  flex,
}) => {
  return (
    <View
      style={{
        flexDirection: row ? 'row' : 'column',
        justifyContent: spaceBetween ? 'space-between' : 'flex-start',
        alignItems: itemsCenter ? 'center' : 'flex-start',
        flex: flex ? 1 : 0,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default CustomView;
