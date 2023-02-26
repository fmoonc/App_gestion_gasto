import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const NotificationItem = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        marginBottom: 14,
        padding: 20,
        backgroundColor: '#FAFCFE',
        borderRadius: 5,
        borderColor: '#DBE9F5',
      }}
    >
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 14}}
      >
        {item.icon && <item.icon />}
        <Text
          style={{
            marginLeft: 8,
            ...theme.fonts.textStyle16,
            color: theme.colors.mainColor,
          }}
        >
          {item.title}
        </Text>
      </View>
      {item.image && (
        <Image
          source={{uri: item.image}}
          style={{
            width: '100%',
            height: 130,
            borderRadius: 5,
            marginBottom: 14,
          }}
        />
      )}
      {item.description && (
        <View
          style={{
            paddingBottom: 14,
            borderBottomWidth: 1,
            marginBottom: 14,
            borderBottomColor: '#CED6E1',
          }}
        >
          <Text
            style={{...theme.fonts.textStyle14, color: theme.colors.textColor}}
          >
            {item.description}
          </Text>
        </View>
      )}

      <Text>{item.date}</Text>
    </TouchableOpacity>
  );
};

export default NotificationItem;
