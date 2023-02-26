import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../constants';

const BurgerMenuItem = ({title, quantity, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 20,
        flexDirection: 'row',
        height: 49,
        marginBottom: 10,
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...theme.fonts.textStyle14,
          color: theme.colors.mainColor,
          marginRight: 6,
        }}
      >
        {title}
      </Text>
      {quantity > 0 && (
        <Text
          style={{
            ...theme.fonts.DMSans_400Regular,
            fontSize: 10,
            color: theme.colors.textColor,
            lineHeight: 10 * 1.5,
            marginTop: 2,
          }}
        >
          ({quantity} {quantity > 1 ? 'items' : 'item'})
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default BurgerMenuItem;
