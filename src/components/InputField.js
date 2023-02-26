import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets';

const InputField = ({
  title,
  placeholder,
  icon,
  containerStyle,
  secureTextEntry,
  keyboardType,
  checkIcon,
  eyeOffIcon = false,
}) => {
  return (
    <View
      style={{
        paddingLeft: 20,
        height: 50,
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#DBE9F5',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          ...theme.fonts.DMSans_400Regular,
          fontSize: 16,
          color: theme.colors.mainColor,
        }}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'#A7AFB7'}
        secureTextEntry={secureTextEntry}
      />
      {title && (
        <View
          style={{
            position: 'absolute',
            top: -12,
            left: 13,
            paddingHorizontal: 10,
            backgroundColor: theme.colors.white,
          }}
        >
          <Text
            style={{
              ...theme.fonts.DMSans_500Medium,
              fontSize: 12,
              textTransform: 'uppercase',
              color: theme.colors.textColor,
              lineHeight: 12 * 1.7,
            }}
          >
            {title}
          </Text>
        </View>
      )}
      {checkIcon && (
        <View style={{paddingHorizontal: 20}}>{<svg.InputCheckSvg />}</View>
      )}
      {eyeOffIcon && (
        <TouchableOpacity style={{paddingHorizontal: 20}}>
          <svg.EyeOffSvg />
        </TouchableOpacity>
      )}
      {icon && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
