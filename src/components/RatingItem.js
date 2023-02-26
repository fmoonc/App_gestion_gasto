import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {theme} from '../constants';
import {svg} from '../assets';

const RatingItem = ({rating, containerStyle}) => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'orange',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: selected ? theme.colors.mainColor : '#FAFCFE',
        borderWidth: 1,
        borderColor: selected ? theme.colors.mainColor : '#DBE9F5',
        ...containerStyle,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <svg.RatingStarSvg
        strokeColor={selected ? theme.colors.white : theme.colors.textColor}
        fillColor={selected ? theme.colors.white : theme.colors.textColor}
      />
      <Text
        style={{
          ...theme.fonts.DMSans_700Bold,
          fontSize: 12,
          lineHeight: 12 * 1.7,
          textTransform: 'uppercase',
          color: selected ? theme.colors.white : theme.colors.textColor,
          marginLeft: 4,
        }}
      >
        {rating}
      </Text>
    </TouchableOpacity>
  );
};

export default RatingItem;
