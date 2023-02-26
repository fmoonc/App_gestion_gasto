import {View, ScrollView, Image} from 'react-native';
import React from 'react';

import {components} from '../components';
import {theme} from '../constants';

const PaymentMethod = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header goBack={true} title='Payment method' />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingLeft: 20,
          paddingTop: 5,
        }}
      >
        <components.PaymentItem
          cardNumber='**** 4864'
          edit={true}
          icon={
            <Image
              source={{
                uri: 'https://dl.dropbox.com/s/q4wpyoarxhqu7nd/01.png?dl=0',
              }}
              style={{width: 40.43, height: 12, marginRight: 20}}
            />
          }
        />
        <components.PaymentItem
          cardNumber='**** 3597'
          edit={true}
          icon={
            <Image
              source={{
                uri: 'https://dl.dropbox.com/s/5qc6uetcohcqjm7/02.png?dl=0',
              }}
              style={{width: 26.59, height: 16, marginRight: 20}}
            />
          }
        />
        <components.PaymentItem
          add={true}
          icon={
            <Image
              source={{
                uri: 'https://dl.dropbox.com/s/mvojflodvrceyab/03.png?dl=0',
              }}
              style={{width: 92.13, height: 16, marginRight: 10}}
            />
          }
        />
        <components.PaymentItem
          edit={true}
          selected={true}
          icon={
            <Image
              source={{
                uri: 'https://dl.dropbox.com/s/ef38mkggc33g45r/04.png?dl=0',
              }}
              style={{width: 40.2, height: 16, marginRight: 10}}
            />
          }
        />
        <components.PaymentItem
          add={true}
          selected={true}
          icon={
            <Image
              source={{
                uri: 'https://dl.dropbox.com/s/lzufhs3z50ojcpp/05.png?dl=0',
              }}
              style={{width: 61.77, height: 16, marginRight: 10}}
            />
          }
        />
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
        <components.Button
          title='Add new card'
          onPress={() => navigation.navigate(theme.screens.AddANewCard)}
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

export default PaymentMethod;
