import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {components} from '../../components';

const Wishlist = ({navigation}) => {
  const wishlist = useSelector((state) => state.wishlist.list);
  console.log('wishlist', wishlist);

  const renderHeader = () => {
    return (
      <components.Header
        burgerMenu={true}
        title='Wishlist'
        basket={true}
        border={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{paddingTop: 20}}>
        {wishlist?.map((item, index, array) => {
          return (
            <components.HorizontalProductItem
              item={item}
              key={index}
              navigation={navigation}
              containerStyle={{
                marginBottom: array.length - 1 === index ? 0 : 14,
              }}
            />
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

export default Wishlist;
