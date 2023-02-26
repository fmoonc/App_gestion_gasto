import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

import {components} from '../components';
import {svg} from '../assets';
import {theme, sortingBy} from '../constants';

const Shop = ({navigation, route}) => {
  const {items, title} = route.params || {};
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState(sortingBy[0].title);

  const renderHeader = () => {
    return (
      <components.Header
        goBack={true}
        basket={true}
        title={title}
        border={true}
        navigation={navigation}
      />
    );
  };

  const renderFilter = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 14,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.navigate(theme.screens.Filter)}
        >
          <svg.SettingsSvg />
          <Text
            style={{
              marginLeft: 8,
              ...theme.fonts.textStyle14,
              color: theme.colors.textColor,
            }}
          >
            Filter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setShowModal(true)}
        >
          <Text
            style={{
              marginRight: 7,
              ...theme.fonts.textStyle14,
              color: theme.colors.textColor,
            }}
          >
            Sorting by
          </Text>
          <svg.BottomArrowSvg />
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <FlatList
        data={items}
        renderItem={({item}) => (
          <components.ShopItem item={item} navigation={navigation} />
        )}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        horizontal={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      />
    );
  };

  const renderModal = () => {
    return (
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
        animationIn='zoomIn'
        animationOut='zoomOut'
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            marginHorizontal: 40,
            borderRadius: 5,
            paddingHorizontal: 20,
          }}
        >
          {sortingBy.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  height: 49,
                  borderBottomWidth: array.length - 1 === index ? 0 : 1,
                  marginBottom: 4,
                  borderBottomColor: theme.colors.strokeColor,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                onPress={() => {
                  setSort(item.title);
                  setShowModal(false);
                }}
              >
                <Text
                  style={{
                    ...theme.fonts.textStyle14,
                    color: theme.colors.mainColor,
                  }}
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderWidth: 1,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: theme.colors.textColor,
                  }}
                >
                  <View
                    style={{
                      backgroundColor:
                        sort === item.title
                          ? theme.colors.mainColor
                          : theme.colors.white,
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderHeader()}
      {renderFilter()}
      {renderContent()}
      {renderModal()}
    </components.CustomSafeArea>
  );
};

export default Shop;
