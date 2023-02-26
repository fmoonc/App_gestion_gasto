import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import {components} from '../components';
import {theme} from '../constants';

const Description = ({route}) => {
  const {item} = route.params || {};

  const renderHeader = () => {
    return <components.Header goBack={true} title='Description' />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: theme.sizes.height * 0.05,
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            ...theme.fonts.H3,
            color: theme.colors.mainColor,
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            ...theme.fonts.textStyle16,
            color: theme.colors.textColor,
            marginBottom: 30,
          }}
        >
          {item.description}
        </Text>
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            marginBottom: 20,
          }}
        >
          Measurements
        </Text>
        <View>
          <components.DescriptionCategory
            leftContent='Width'
            rightContent='33.5”'
          />
          <components.DescriptionCategory
            leftContent='Depth'
            rightContent='36.125”'
          />
          <components.DescriptionCategory
            leftContent='Height'
            rightContent='37.5”'
          />
        </View>
      </ScrollView>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderHeader()}
      {renderContent()}
    </components.CustomSafeArea>
  );
};

export default Description;
