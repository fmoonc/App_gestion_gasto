import {View, Text} from 'react-native';
import React from 'react';

const FeaturedProducts = ({item, data}) => {
  return (
    <View style={{marginBottom: 50}}>
      <components.BlockHeading
        title='Featured products'
        onPress={() => {
          navigation.navigate(theme.screens.Shop, {
            title: 'Featured products',
            items: data,
          });
        }}
      />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 20}}
      >
        {data
          ?.filter((item) => item.is_featured)
          .map((item, index) => {
            return (
              <components.FeaturedItem key={index} item={item} index={index} />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default FeaturedProducts;
