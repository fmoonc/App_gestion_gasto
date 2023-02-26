import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets';

const Reviews = ({route}) => {
  const {item} = route.params || {};

  const renderHeader = () => {
    return <components.Header goBack={true} title='Reviews' />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 25,
          paddingBottom: 20,
        }}
      >
        {item.reviews.map((item, index, array) => {
          return <components.ReviewItem item={item} key={index} />;
        })}
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

export default Reviews;
