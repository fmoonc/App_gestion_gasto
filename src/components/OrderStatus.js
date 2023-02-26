import {View, Text} from 'react-native';
import React from 'react';

import {svg} from '../assets';
import {theme} from '../constants';

const OrderStatus = ({title, description, status}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 6}}>
      <svg.StatusSvg status={status} title={title} />
      <View style={{marginLeft: 24, marginBottom: 12}}>
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            textTransform: 'capitalize',
            marginBottom: 6,
          }}
        >
          {title}
        </Text>
        <Text
          style={{...theme.fonts.textStyle14, color: theme.colors.textColor}}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default OrderStatus;
