import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {func} from '../utils';

import {theme} from '../constants';

import ImageLoader from './ImageLoader';

const HomeOneCategoryItem = ({item, navigation}) => {
  const url = 'https://api.jsonbin.io/v3/b/63aabf14dfc68e59d571e16c';
  const {response, error, loading} = func.useFetchData(url);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(theme.screens.Shop, {
          title: item.title,
          items: response,
        });
      }}
    >
      <ImageLoader
        containerStyle={{width: 90, height: 90, marginRight: 14}}
        source={{uri: item.image}}
        childrenStyle={{
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingBottom: 8,
          justifyContent: 'space-between',
        }}
        imageStyle={{borderRadius: 5}}
      >
        <View
          style={{
            height: 14,
            backgroundColor: theme.colors.white,
            alignSelf: 'flex-start',
            paddingHorizontal: 3,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            borderWidth: 1,
            borderColor: '#DBE9F5',
          }}
        >
          <Text style={{fontSize: 8}}>{item.quantity}</Text>
        </View>
        <Text
          style={{
            ...theme.fonts.DMSans_400Regular,
            fontSize: 10,
            lineHeight: 10 * 1.5,
            color: theme.colors.mainColor,
          }}
          numberOfLines={1}
        >
          {item.title}
        </Text>
      </ImageLoader>
    </TouchableOpacity>
  );
};

export default HomeOneCategoryItem;
