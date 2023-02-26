import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import {components} from '../components';
import {theme, notifications} from '../constants';
import {svg} from '../assets';

const Notifications = ({navigation}) => {
  const renderHeader = () => {
    return (
      <components.Header
        goBack={true}
        navigation={navigation}
        title='Notifications'
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 25,
        }}
      >
        {notifications.map((item, index) => {
          return (
            <components.NotificationItem
              item={item}
              key={index}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    );
  };

  return (
    <components.CustomSafeArea edges={['left', 'right', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </components.CustomSafeArea>
  );
};

export default Notifications;
