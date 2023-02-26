import {ScrollView} from 'react-native';
import React from 'react';

import {components} from '../components';

const TrackYourOrder = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header goBack={true} title='Track your order' />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 25,
          paddingBottom: 20,
        }}
      >
        <components.DescriptionCategory
          leftContent='Your order:'
          rightContent='#648752'
        />
        <components.DescriptionCategory
          leftContent='Date'
          rightContent='Feb 25, 2023 at 8:32 PM'
          containerStyle={{marginBottom: 30}}
        />
        <components.OrderStatus
          title='Order confirmed'
          description='Your order has been confirmed'
          status={true}
        />
        <components.OrderStatus
          title='Order shipping'
          description='Estimated for Feb 27, 2023'
          status={true}
        />
        <components.OrderStatus
          title='Courier delivering'
          description='Estimated for Feb 27, 2023'
        />
        <components.OrderStatus
          title='Receiving'
          description='Estimated for Feb 27, 2023'
        />
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

export default TrackYourOrder;
