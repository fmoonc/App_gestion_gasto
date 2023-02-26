import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';

import {theme, dummyData} from '../constants';
import {svg} from '../assets';

import ImageLoader from './ImageLoader';
import BurgerMenuItem from './BurgerMenuItem';

const BurgerMenuModal = ({showModal, setShowModal}) => {
  const navigation = useNavigation();

  const sales = dummyData.filter((item) => item.is_sale);
  const bestSellers = dummyData.filter((item) => item.is_bestseller);
  const newArrivals = dummyData.filter((item) => item.is_new);

  const user = 'https://dl.dropbox.com/s/h1iflemdghrjahy/01.jpg?dl=0';

  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={() => setShowModal(false)}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      style={{margin: 0}}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
    >
      <View
        style={{
          width: '80%',
          height: '100%',
          backgroundColor: theme.colors.white,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginBottom: theme.sizes.height * 0.06,
              padding: 10,
            }}
            onPress={() => setShowModal(false)}
          >
            <svg.CloseMenuSvg />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 20,
              borderBottomWidth: 1,
              paddingLeft: 20,
              borderBottomColor: '#DBE9F5',
              marginBottom: 20,
            }}
          >
            <ImageLoader
              source={{uri: user}}
              containerStyle={{width: 60, height: 60, marginRight: 13}}
              imageStyle={{borderRadius: 30}}
              activityIndicatorStyle={{borderRadius: 30}}
            />
            <View>
              <Text
                style={{
                  ...theme.fonts.H5,
                  color: theme.colors.mainColor,
                  textTransform: 'capitalize',
                  marginBottom: 6,
                }}
                numberOfLines={1}
              >
                Mariah Franklin
              </Text>
              <Text
                style={{
                  ...theme.fonts.textStyle14,
                  color: theme.colors.textColor,
                }}
                numberOfLines={1}
              >
                mariahfranklin@mail.com
              </Text>
            </View>
          </View>
          <BurgerMenuItem title=">  Categories" onPress={() => {}} />
          <BurgerMenuItem title=">  Sale" quantity={135} onPress={() => {}} />
          <BurgerMenuItem
            title=">  New arrivals"
            quantity={285}
            onPress={() => {}}
          />
          <BurgerMenuItem
            title=">  Best sellers"
            quantity={642}
            onPress={() => {}}
          />
          <BurgerMenuItem title=">  Featured products" quantity={168} />
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderTopWidth: 1,
              marginLeft: 20,
              borderBottomLeftRadius: 5,
              borderTopLeftRadius: 5,
              borderColor: theme.colors.strokeColor,
              paddingHorizontal: 20,
              paddingVertical: 14,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              marginTop: 25,
            }}
            onPress={() => {
              navigation.navigate(theme.screens.Notifications);
              setShowModal(false);
            }}
          >
            <svg.BellSvg />
            <Text
              style={{
                ...theme.fonts.textStyle16,
                color: theme.colors.mainColor,
                marginLeft: 10,
              }}
            >
              Notifications
            </Text>
            <View
              style={{
                marginLeft: 'auto',
                backgroundColor: '#F84C6B',
                borderRadius: 100,
                paddingHorizontal: 6,
                paddingVertical: 2,
              }}
            >
              <Text
                style={{
                  ...theme.fonts.DMSans_700Bold,
                  fontSize: 8,
                  color: theme.colors.white,
                  lineHeight: 8 * 1.5,
                }}
              >
                1
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderTopWidth: 1,
              marginLeft: 20,
              borderBottomLeftRadius: 5,
              borderTopLeftRadius: 5,
              borderColor: theme.colors.strokeColor,
              paddingHorizontal: 20,
              paddingVertical: 14,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <svg.HelpSvg />
            <Text
              style={{
                ...theme.fonts.textStyle16,
                color: theme.colors.mainColor,
                marginLeft: 10,
              }}
            >
              Support
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default BurgerMenuModal;
