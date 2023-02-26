import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {func} from '../utils';

import {theme} from '../constants';
import {svg} from '../assets';

const SingleProductName = ({item}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
      }}
    >
      <Text
        style={{
          ...theme.fonts.H3,
          color: theme.colors.mainColor,
          textTransform: 'capitalize',
        }}
      >
        {item.name}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <svg.StarSvg />
        <Text
          style={{
            marginLeft: 4,
            ...theme.fonts.DMSans_400Regular,
            fonts: 12,
            color: theme.colors.textColor,
          }}
        >
          {item.rating.toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

export default SingleProductName;
