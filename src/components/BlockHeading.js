import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets';

const BlockHeading = ({title, onPress, containerStyle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 11,
        ...containerStyle,
      }}
    >
      <Text
        style={{
          ...theme.fonts.H3,
          textTransform: 'capitalize',
          color: theme.colors.mainColor,
        }}
      >
        {title}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={{flexDirection: 'row', alignItems: 'center'}}
      >
        <Text
          style={{
            ...theme.fonts.textStyle16,
            color: theme.colors.mainColor,
            marginRight: 6,
          }}
        >
          View all
        </Text>
        <svg.ViewAllArrowSvg />
      </TouchableOpacity>
    </View>
  );
};

export default BlockHeading;
