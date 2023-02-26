import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const SaleBadge = ({item, containerStyle}) => {
  return (
    item.is_sale && (
      <View
        style={{
          height: 16,
          width: 32,
          backgroundColor: theme.colors.white,
          borderWidth: 1,
          borderRadius: 3,
          borderColor: '#DBE9F5',
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-start',
          marginTop: 'auto',
          ...containerStyle,
        }}
      >
        <Text
          style={{
            fontSize: 8,
            textTransform: 'uppercase',
            color: theme.colors.mainColor,
            ...theme.fonts.DMSans_700Bold,
          }}
        >
          sale
        </Text>
      </View>
    )
  );
};

export default SaleBadge;
