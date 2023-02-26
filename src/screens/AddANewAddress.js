import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {theme, addresses} from '../constants';

const AddANewAddress = ({navigation}) => {
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const renderHeader = () => {
    return <components.Header goBack={true} title='Add a new address' />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingTop: 25,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={{marginLeft: 20, marginBottom: 40}}>
          <components.ImageLoader
            source={{
              uri: 'https://dl.dropbox.com/s/zgmbb65sxvyzqj7/01.jpg?dl=0',
            }}
            containerStyle={{height: 361, width: '100%'}}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <components.InputField
            title='title'
            placeholder='Enter your title'
            containerStyle={{marginBottom: 20}}
          />
          <components.InputField
            title='new address'
            placeholder='Enter your address'
            containerStyle={{marginBottom: 20}}
          />
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => setUseCurrentLocation(!useCurrentLocation)}
          >
            <View
              style={{
                width: 18,
                height: 18,
                borderWidth: 1,
                borderRadius: 3,
                borderColor: theme.colors.strokeColor,
                backgroundColor: '#F8FBFD',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {useCurrentLocation && (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: theme.colors.strokeColor,
                    borderRadius: 3,
                  }}
                />
              )}
            </View>
            <Text
              style={{
                marginLeft: 10,
                ...theme.fonts.textStyle14,
                color: theme.colors.textColor,
              }}
            >
              Use current location
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  };

  const renderButton = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingBottom: 20, paddingTop: 10}}>
        <components.Button
          title='save address'
          onPress={() => navigation.goBack()}
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

export default AddANewAddress;
