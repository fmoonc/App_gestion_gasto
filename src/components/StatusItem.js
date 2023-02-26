import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {theme} from '../constants';

const StatusItem = ({title, containerStyle, defaultSelected = false}) => {
  const [selected, setSelected] = useState(defaultSelected);

  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={{
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        paddingHorizontal: 18,
        paddingVertical: 6,
        alignSelf: 'baseline',
        backgroundColor: selected ? theme.colors.mainColor : '#FAFCFE',
        borderWidth: 1,
        borderColor: selected ? theme.colors.mainColor : '#DBE9F5',
        ...containerStyle,
      }}
    >
      <Text
        style={{
          ...theme.fonts.DMSans_700Bold,
          fontSize: 12,
          lineHeight: 12 * 1.7,
          textTransform: 'uppercase',
          color: selected ? theme.colors.white : theme.colors.mainColor,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default StatusItem;
