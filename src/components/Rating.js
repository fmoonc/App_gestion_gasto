import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {svg} from '../assets';
import {theme} from '../constants';

const Rating = ({item, containerStyle}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      <svg.StarSvg />
      <Text
        style={{
          marginLeft: 4,
          color: theme.colors.textColor,
          fontSize: 12,
          lineHeight: 12 * 1.7,
          ...theme.fonts.DMSans_400Regular,
        }}
      >
        {item.rating.toFixed(1)}
      </Text>
    </TouchableOpacity>
  );
};

export default Rating;
