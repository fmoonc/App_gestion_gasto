import {View, Text} from 'react-native';
import React from 'react';
import DashedLine from 'react-native-dashed-line';
import {theme} from '../constants';

const DescriptionCategory = ({leftContent, rightContent, containerStyle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 14,
        ...containerStyle,
      }}
    >
      <Text style={{...theme.fonts.textStyle14, color: theme.colors.textColor}}>
        {leftContent}
      </Text>
      <View style={{flex: 1, marginHorizontal: 14}}>
        <DashedLine
          dashLength={3}
          dashThickness={2}
          dashGap={4}
          dashColor={theme.colors.strokeColor}
          dashStyle={{borderRadius: 5}}
        />
      </View>
      <Text style={{...theme.fonts.textStyle14, color: theme.colors.mainColor}}>
        {rightContent}
      </Text>
    </View>
  );
};

export default DescriptionCategory;
