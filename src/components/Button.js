import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';

import {theme} from '../constants';

const Button = ({title, onPress, containerStyle, transparent = false}) => {
  return (
    <View style={{...containerStyle}}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: transparent ? 1 : 0,
          borderColor: theme.colors.textColor,
        }}
        onPress={onPress}
      >
        <LinearGradient
          colors={[
            transparent ? theme.colors.transparent : '#142535',
            transparent ? theme.colors.transparent : '#010202',
          ]}
          style={{
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        >
          <Text
            style={{
              color: transparent ? theme.colors.mainColor : theme.colors.white,
              textTransform: 'uppercase',
              ...theme.fonts.DMSans_700Bold,
              fontSize: 14,
            }}
          >
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
