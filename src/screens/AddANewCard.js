import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets';

const AddANewCard = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header goBack={true} title='Add a new card' />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 27,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{marginBottom: 30, flexDirection: 'row', alignItems: 'center'}}
        >
          <Image
            source={{
              uri: 'https://dl.dropbox.com/s/q4wpyoarxhqu7nd/01.png?dl=0',
            }}
            style={{height: 12, width: 39.43, marginRight: 17.57}}
          />
          <Image
            source={{
              uri: 'https://dl.dropbox.com/s/5qc6uetcohcqjm7/02.png?dl=0',
            }}
            style={{height: 16, width: 25.93}}
          />
        </View>
        <components.InputField
          placeholder='Mariah Franklin'
          title='Name'
          containerStyle={{marginBottom: 20}}
        />
        <components.InputField
          placeholder='xxxx xxxx xxxx 1234'
          title='card number'
          icon={<svg.CameraSvg />}
          containerStyle={{marginBottom: 20}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <components.InputField
            title='MM/yy'
            placeholder='12/23'
            containerStyle={{width: '47%'}}
            secureTextEntry={true}
          />
          <components.InputField
            title='cvv'
            placeholder='•••'
            containerStyle={{width: '47%'}}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              paddingLeft: 20,
              height: 50,
              width: '47%',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#DBE9F5',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                ...theme.fonts.textStyle16,
                color: theme.colors.mainColor,
              }}
            >
              - Choose -
            </Text>
            <View
              style={{
                position: 'absolute',
                top: -12,
                left: 10,
                paddingHorizontal: 10,
                backgroundColor: theme.colors.white,
              }}
            >
              <Text
                style={{
                  ...theme.fonts.DMSans_500Medium,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  color: theme.colors.textColor,
                  lineHeight: 12 * 1.7,
                }}
              >
                country
              </Text>
            </View>
          </TouchableOpacity>
          <components.InputField
            title='zip code'
            placeholder='00000'
            secureTextEntry={true}
            containerStyle={{width: '47%'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <components.Button
            title='cancel'
            transparent={true}
            containerStyle={{width: '47%'}}
            onPress={() => navigation.goBack()}
          />
          <components.Button
            title='save'
            containerStyle={{width: '47%'}}
            onPress={() => navigation.goBack()}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderHeader()}
      {renderContent()}
    </components.CustomSafeArea>
  );
};

export default AddANewCard;
