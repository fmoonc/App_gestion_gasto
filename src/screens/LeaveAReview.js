import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets';

const LeaveAReview = () => {
  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          flexGrow: 1,
          justifyContent: 'center',
        }}
        enableOnAndroid={true}
      >
        <View style={{marginBottom: 30}}>
          <svg.MessageSvg />
        </View>

        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          Please rate the quality of{'\n'}service for the order!
        </Text>
        <View style={{marginBottom: 25}}>
          <components.RatingSelect />
        </View>
        <Text
          style={{
            ...theme.fonts.DMSans_400Regular,
            fontSize: 16,
            color: theme.colors.textColor,
            marginBottom: 50,
            lineHeight: 16 * 1.7,
          }}
        >
          Your comments and suggestions help us improve the service quality
          better!
        </Text>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: '100%',
              height: 131,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: theme.colors.strokeColor,
            }}
          >
            <TextInput
              style={{
                width: '100%',
                height: '100%',
                paddingHorizontal: 20,
                paddingTop: 23,
                paddingBottom: 23,
              }}
              placeholder='Enter your comment'
              textAlignVertical='top'
              multiline={true}
            />
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
                comment
              </Text>
            </View>
          </View>
        </View>
        <components.Button title='submit' />
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

export default LeaveAReview;
