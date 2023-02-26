import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {theme, promocodes} from '../constants';
import {svg} from '../assets';
import {func} from '../utils';

const MyPromocodes = () => {
  const promocodes = [];

  const renderHeader = () => {
    return <components.Header goBack={true} title='My promocodes' />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 25,
          paddingLeft: 20,
          paddingBottom: 20,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        {promocodes.map((item, index, array) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                paddingHorizontal: 20,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                borderColor: theme.colors.strokeColor,
                marginBottom: array.length - 1 === index ? 0 : 14,
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => func.promocodeWasCopiedMessage(item)}
            >
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 8,
                  }}
                >
                  <svg.TagSvg />
                  <Text
                    style={{
                      marginLeft: 10,
                      ...theme.fonts.H3,
                      color: theme.colors.mainColor,
                    }}
                  >
                    {item.discount}
                  </Text>
                </View>
                <Text
                  style={{
                    ...theme.fonts.DMSans_400Regular,
                    fontSize: 12,
                    color:
                      item.status === 'active'
                        ? theme.colors.textColor
                        : '#F84C6B',
                    lineHeight: 12 * 1.5,
                  }}
                >
                  {item.expires}
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                  alignSelf: 'flex-end',
                  paddingBottom: 16,
                }}
              >
                <svg.CopySvg />
                <Text
                  style={{
                    marginTop: 6,
                    ...theme.fonts.DMSans_400Regular,
                    fontSize: 12,
                    lineHeight: 12 * 1.5,
                    color: theme.colors.textColor,
                  }}
                >
                  {item.code}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <View
          style={{
            marginTop: 24,
            flexDirection: 'row',
            marginRight: 20,
          }}
        >
          <components.InputField
            placeholder='Promocode'
            title='Enter the voucher'
            containerStyle={{flex: 1, marginRight: 10}}
          />
          <View style={{width: '30%'}}>
            <components.Button title='+ add' />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  };

  const renderPromocodesIsEmpty = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          justifyContent: 'center',
        }}
      >
        <View style={{marginBottom: 30}}>
          <svg.PromocodeGiftSvg />
        </View>
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          You don’t have{'\n'}promocodes yet!
        </Text>
        <Text
          style={{...theme.fonts.textStyle16, color: theme.colors.textColor}}
        >
          Qui ex aute ipsum duis. Incididunt adipisicing{'\n'}voluptate laborum.
        </Text>
      </ScrollView>
    );
  };

  const renderFooter = () => {
    return (
      <View>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
        >
          <components.InputField
            placeholder='Code2023'
            title='Enter the voucher'
            containerStyle={{marginBottom: 20, marginTop: 20}}
          />
          <components.Button title='Add promocode' />
        </KeyboardAwareScrollView>
      </View>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderHeader()}
      {promocodes.length > 0 ? renderContent() : renderPromocodesIsEmpty()}
      {promocodes.length > 0 ? null : renderFooter()}
    </components.CustomSafeArea>
  );
};

export default MyPromocodes;
