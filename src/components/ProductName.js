import {Text, View} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const ProductName = ({item, containerStyle}) => {
  return (
    <View style={{...containerStyle}}>
      <Text
        style={{
          ...theme.fonts.textStyle14,
          color: theme.colors.textColor,
        }}
        numberOfLines={1}
      >
        {item.name}
      </Text>
    </View>
  );
};

export default ProductName;
