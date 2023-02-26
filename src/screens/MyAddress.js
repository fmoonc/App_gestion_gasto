import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

import {components} from '../components';
import {theme, addresses} from '../constants';
import {svg} from '../assets';

const MyAddress = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header goBack={true} title='My address' />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingTop: 25, paddingBottom: 20}}
      >
        {addresses.map((item, index, array) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                marginLeft: 20,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                borderColor: theme.colors.strokeColor,
                borderRadius: 5,
                padding: 20,
                marginBottom: array.length - 1 === index ? 0 : 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}
                >
                  <item.icon />
                  <Text
                    style={{
                      marginLeft: 10,
                      ...theme.fonts.H5,
                      color: theme.colors.mainColor,
                    }}
                    numberOfLines={1}
                  >
                    {item.type}
                  </Text>
                </View>
                <Text
                  numberOfLines={1}
                  style={{
                    ...theme.fonts.DMSans_400Regular,
                    fontSize: 12,
                    lineHeight: 12 * 1.5,
                    color: theme.colors.mainColor,
                  }}
                >
                  {item.address}
                </Text>
              </View>
              <svg.EditSvg />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingBottom: 20, paddingTop: 10}}>
        <components.Button
          title='+ add new address'
          onPress={() => navigation.navigate(theme.screens.AddANewAddress)}
        />
      </View>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </components.CustomSafeArea>
  );
};

export default MyAddress;
