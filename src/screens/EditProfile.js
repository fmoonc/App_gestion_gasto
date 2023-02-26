import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-input';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';

const EditProfile = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header goBack={true} title='Edit Profile' />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: theme.sizes.height * 0.07,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 40}}
        >
          <components.ImageLoader
            source={{
              uri: 'https://dl.dropbox.com/s/h1iflemdghrjahy/01.jpg?dl=0',
            }}
            containerStyle={{
              width: 60,
              height: 60,
              marginRight: 13,
              borderRadius: 30,
            }}
            imageStyle={{borderRadius: 30}}
          />
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
          >
            <svg.EditProfileCameraSvg />
            <Text
              style={{
                marginLeft: 10,
                ...theme.fonts.textStyle14,
                color: theme.colors.textColor,
              }}
            >
              Upload new photo
            </Text>
          </TouchableOpacity>
        </View>
        <components.InputField
          placeholder='Mariah Franklin'
          title='Name'
          containerStyle={{marginBottom: 20}}
        />
        <components.InputField
          placeholder='mariahfranklin@mail.com'
          title='Email'
          containerStyle={{marginBottom: 20}}
        />
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#DBE9F5',
            marginBottom: 20,
          }}
        >
          <PhoneInput
            style={{
              paddingVertical: 16,
              paddingHorizontal: 25,
            }}
            initialCountry={'us'}
            initialValue='123456789'
            textStyle={{
              ...theme.fonts.DMSans_400Regular,
              fontSize: 16,
              color: theme.colors.mainColor,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: -12,
              left: 13,
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
              phone number
            </Text>
          </View>
        </View>
        <components.InputField
          placeholder='Chicago, USA'
          title='location'
          containerStyle={{marginBottom: 20}}
        />
        <components.Button
          title='save changes'
          onPress={() => navigation.goBack()}
        />
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

export default EditProfile;
