import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';

import ImageLoader from './ImageLoader';

const SearchCategoryItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        width: '48%',
        height: 200,
        borderRadius: 5,
        marginBottom: 14,
        backgroundColor: '#E5E9EE',
      }}
      onPress={() => {}}
    >
      <ImageLoader
        source={{uri: item.image}}
        containerStyle={{width: '100%', height: '100%'}}
        borderRadius={5}
        childrenStyle={{
          paddingHorizontal: 14,
          paddingVertical: 12,
          alignItems: 'flex-start',
        }}
        imageStyle={{borderRadius: 5}}
        activityIndicatorStyle={{borderRadius: 5}}
      >
        <View
          style={{
            alignItems: 'flex-start',
            height: '100%',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              backgroundColor: theme.colors.white,
              paddingHorizontal: 8,
              borderRadius: 3,
              borderWidth: 1,
              borderColor: '#DBE9F5',
            }}
          >
            <Text
              style={{
                ...theme.fonts.textStyle14,
                color: theme.colors.textColor,
              }}
            >
              {item.quantity}
            </Text>
          </View>

          <Text
            style={{
              ...theme.fonts.textStyle14,
              color: theme.colors.mainColor,
              textTransform: 'capitalize',
            }}
          >
            {item.title}
          </Text>
        </View>
      </ImageLoader>
    </TouchableOpacity>
  );
};

export default SearchCategoryItem;
