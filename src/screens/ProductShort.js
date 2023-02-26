import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {func} from '../utils';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets';

const ProductShort = ({route, navigation}) => {
  const {item} = route.params || {};

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(item.colors[4]);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  const dispatch = useDispatch();

  const renderHeader = () => {
    return (
      <components.Header
        goBack={true}
        bag={true}
        border={true}
        navigation={navigation}
      />
    );
  };

  const renderCarousel = () => {
    return (
      <View>
        <View style={{width: theme.sizes.width, height: 412}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            pagingEnabled={true}
            style={{
              position: 'absolute',
              right: 0,
              left: 0,
              top: 0,
              bottom: 0,
            }}
            contentContainerStyle={{backgroundColor: '#F5F9FC'}}
          >
            {item.images.map((image, index) => {
              return (
                <components.ImageLoader
                  key={index}
                  source={{uri: image}}
                  containerStyle={{width: theme.sizes.width, height: 412}}
                  childrenStyle={{padding: 10}}
                  resizeMode='contain'
                ></components.ImageLoader>
              );
            })}
          </ScrollView>
          <components.Favorite
            item={item}
            containerStyle={{
              padding: 23,
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            bigIcon={true}
          />
          {item.is_sale && (
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                margin: 20,
                backgroundColor: theme.colors.white,
                borderWidth: 1,
                paddingHorizontal: 14,
                paddingVertical: 6,
                borderRadius: 3,
                borderColor: theme.colors.strokeColor,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  ...theme.fonts.DMSans_700Bold,
                  fonts: 12,
                  textTransform: 'uppercase',
                  color: theme.colors.mainColor,
                }}
              >
                Sale
              </Text>
            </View>
          )}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              position: 'absolute',
              bottom: 31,
              left: 0,
              right: 0,
            }}
          >
            {item.images.map((_, index) => (
              <View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  marginHorizontal: 5,
                  borderRadius: 50,
                  backgroundColor:
                    currentSlideIndex === index
                      ? theme.colors.mainColor
                      : theme.colors.white,
                  borderColor:
                    currentSlideIndex === index
                      ? theme.colors.mainColor
                      : theme.colors.strokeColor,
                  borderWidth: 1,
                }}
              />
            ))}
          </View>
          <View style={{position: 'absolute', right: 0, bottom: 0, margin: 20}}>
            {item.colors.map((color, index) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedColor(color)}
                  key={index}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 5,
                    marginBottom: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      color === 'color01'
                        ? '#F8E7CD'
                        : color === 'color02'
                        ? '#FFA462'
                        : color === 'color03'
                        ? '#67A0A4'
                        : color === 'color04'
                        ? '#6B6D7B'
                        : color === 'color05'
                        ? '#142535'
                        : null,
                  }}
                >
                  {selectedColor === color && <svg.CheckColorSvg />}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    );
  };

  const renderItemInfo = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingTop: 18,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.strokeColor,
            marginBottom: 30,
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                textTransform: 'uppercase',
                color: theme.colors.mainColor,
                ...theme.fonts.DMSans_700Bold,
                fontSize: 12,
                textAlign: 'center',
                lineHeight: 12 * 1.5,
              }}
            >
              price
            </Text>
            <View
              style={{
                width: '100%',
                height: 4,
                backgroundColor: theme.colors.mainColor,
                borderRadius: 2,
                marginTop: 18,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(theme.screens.Description, {item})
            }
          >
            <Text
              style={{
                textTransform: 'uppercase',
                color: theme.colors.textColor,
                ...theme.fonts.DMSans_700Bold,
                fontSize: 12,
                textAlign: 'center',
                lineHeight: 12 * 1.5,
              }}
            >
              description
            </Text>
            <View
              style={{
                width: '100%',
                height: 4,
                backgroundColor: theme.colors.transparent,
                borderRadius: 2,
                marginTop: 18,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(theme.screens.Reviews, {item})}
          >
            <Text
              style={{
                textTransform: 'uppercase',
                color: theme.colors.textColor,
                ...theme.fonts.DMSans_700Bold,
                fontSize: 12,
                textAlign: 'center',
                lineHeight: 12 * 1.5,
              }}
            >
              reviews
            </Text>
            <View
              style={{
                width: '100%',
                height: 4,
                backgroundColor: theme.colors.transparent,
                borderRadius: 2,
                marginTop: 18,
              }}
            />
          </TouchableOpacity>
        </View>
        <components.SingleProductName item={item} />
        <components.SinglePriceAndCount
          item={item}
          containerStyle={{marginBottom: 20}}
        />
        <components.Button
          title='+ ADd to cart'
          containerStyle={{marginHorizontal: 20, marginBottom: 20}}
          onPress={() => func.addToCart(item, dispatch)}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
      >
        {renderCarousel()}
        {renderItemInfo()}
      </ScrollView>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderHeader()}
      {renderContent()}
    </components.CustomSafeArea>
  );
};

export default ProductShort;
