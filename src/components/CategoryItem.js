import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';

import {theme} from '../constants';

import ImageLoader from './ImageLoader';

const CategoryItem = ({
  image,
  title,
  quantity,
  source,
  onPress,
  containerStyle,
}) => {
  return (
    <View
      style={{
        backgroundColor: '#E5E9EE',
        width: '31%',
        borderRadius: 5,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <TouchableOpacity onPress={onPress}>
        <ImageLoader
          source={source}
          containerStyle={{
            width: '100%',
            height: 102,
            borderRadius: 5,
          }}
          imageStyle={{borderRadius: 5}}
          childrenStyle={{
            paddingHorizontal: 10,
            paddingTop: 10,
            paddingBottom: 8,
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              height: 14,
              backgroundColor: theme.colors.white,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 3,
              borderWidth: 1,
              borderColor: theme.colors.strokeColor,
              paddingHorizontal: 3,
              alignSelf: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 8,
                color: theme.colors.textColor,
                ...theme.fonts.DMSans_400Regular,
              }}
            >
              {quantity}
            </Text>
          </View>
          <Text
            style={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 10,
              color: theme.colors.mainColor,
              lineHeight: 10 * 1.5,
            }}
            numberOfLines={1}
          >
            {title}
          </Text>
        </ImageLoader>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
