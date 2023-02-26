import {View, ScrollView} from 'react-native';
import React from 'react';

import {categories} from '../../constants';
import {components} from '../../components';

const Categories = ({navigation}) => {
  const renderHeader = () => {
    return (
      <components.Header
        search={true}
        basket={true}
        burgerMenu={true}
        border={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          {categories.search.map((item, index) => {
            return (
              <components.SearchCategoryItem
                key={index}
                item={item}
                navigation={navigation}
              />
            );
          })}
        </View>
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

export default Categories;
