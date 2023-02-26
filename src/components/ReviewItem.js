import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {theme} from '../constants';
import {svg} from '../assets';

import ImageLoader from './ImageLoader';

const ReviewItem = ({item}) => {
  return (
    <View
      style={{
        marginBottom: 14,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.strokeColor,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        flexDirection: 'row',
        paddingRight: 20,
        marginLeft: 20,
      }}
    >
      <View style={{alignItems: 'center', marginRight: 14}}>
        <ImageLoader
          source={{uri: item.image}}
          containerStyle={{
            width: 50,
            height: 50,
            marginBottom: 10,
          }}
          imageStyle={{
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        />
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            ...theme.fonts.DMSans_400Regular,
            marginBottom: 5,
            color: theme.colors.textColor,
          }}
        >
          {item.date}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <svg.ReviewStarSvg />
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              ...theme.fonts.DMSans_400Regular,
              marginLeft: 4,
              color: theme.colors.textColor,
            }}
          >
            {item.rating.toFixed(1)}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          paddingBottom: 19,
          paddingTop: 15,
        }}
      >
        <View
          style={{
            marginBottom: 19,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              ...theme.fonts.H5,
              color: theme.colors.mainColor,
              textTransform: 'capitalize',
            }}
            numberOfLines={1}
          >
            {item.name}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                ...theme.fonts.DMSans_400Regular,
                fontSize: 12,
                color: theme.colors.mainColor,
                lineHeight: 12 * 1.7,
              }}
            >
              reply
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            ...theme.fonts.textStyle14,
            color: theme.colors.textColor,
          }}
        >
          {item.comment}
        </Text>
      </View>
    </View>
  );
};

export default ReviewItem;
