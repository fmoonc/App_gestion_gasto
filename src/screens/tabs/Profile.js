import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {LinearGradient} from 'expo-linear-gradient';

import {components} from '../../components';
import {theme} from '../../constants';
import {svg} from '../../assets';

const Profile = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderHeader = () => {
    return (
      <components.Header
        burgerMenu={true}
        title="My profile"
        border={true}
        basket={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingTop: 50, paddingBottom: 20}}
      >
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}
          onPress={() => navigation.navigate(theme.screens.EditProfile)}
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
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  ...theme.fonts.H5,
                  color: theme.colors.mainColor,
                  textTransform: 'capitalize',
                }}
              >
                Mariah Franklin
              </Text>
              <svg.EditSvg />
            </View>
            <Text
              style={{
                ...theme.fonts.textStyle14,
                color: theme.colors.textColor,
              }}
            >
              mariahfranklin@mail.com
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{paddingLeft: 20}}>
          <components.ProfileCategory
            title="My orders"
            onPress={() => navigation.navigate(theme.screens.OrderHistory)}
          />
          <components.ProfileCategory
            title="Payment method"
            onPress={() => navigation.navigate(theme.screens.PaymentMethod)}
          />
          <components.ProfileCategory
            title="Delivery address"
            onPress={() => navigation.navigate(theme.screens.MyAddress)}
          />
          <components.ProfileCategory
            title="Promocodes & gift cards"
            onPress={() => navigation.navigate(theme.screens.MyPromocodes)}
          />
          <components.ProfileCategory
            title="Sign out"
            onPress={() => setIsModalVisible(true)}
          />
        </View>
      </ScrollView>
    );
  };

  const renderModal = () => {
    return (
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        animationIn="zoomIn"
        animationOut="zoomOut"
      >
        <View
          style={{
            width: theme.sizes.width - 80,
            alignSelf: 'center',
            backgroundColor: theme.colors.white,
            paddingHorizontal: 20,
            paddingVertical: 30,
            borderRadius: 5,
          }}
        >
          <View style={{marginBottom: 14}}>
            <svg.ExitSvg />
          </View>
          <Text
            style={{
              textAlign: 'left',
              color: theme.colors.mainColor,
              marginBottom: 30,
              textTransform: 'capitalize',
              ...theme.fonts.H4,
            }}
          >
            Are you sure you want{'\n'}to sign out ?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={{
                width: '48%',
                height: 50,
                backgroundColor: theme.colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#EEEEEE',
              }}
              onPress={() => setIsModalVisible(false)}
            >
              <LinearGradient
                colors={['#142535', '#010202']}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              >
                <Text
                  style={{
                    textTransform: 'uppercase',
                    fontSize: 14,
                    color: theme.colors.white,
                    ...theme.fonts.DMSans_700Bold,
                  }}
                >
                  cancel
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '48%',
                height: 50,
                backgroundColor: theme.colors.black,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: theme.colors.textColor,
              }}
              onPress={() => {
                setIsModalVisible(false);
                navigation.replace(theme.screens.SignIn);
              }}
            >
              <Text
                style={{
                  color: theme.colors.mainColor,
                  textTransform: 'uppercase',
                  fontSize: 14,
                  ...theme.fonts.DMSans_700Bold,
                }}
              >
                Sure
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      {renderContent()}
      {renderModal()}
    </View>
  );
};

export default Profile;
