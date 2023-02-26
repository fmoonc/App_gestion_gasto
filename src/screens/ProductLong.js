import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets';

const ProductLong = ({route, navigation}) => {
  const {item} = route.params || {};
  const {colors, reviews} = item;
  const [numberOfLines, setNumberOfLines] = useState(3);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(item.colors[4]);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

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
      <View style={{marginBottom: 30}}>
        <View style={{width: theme.sizes.width, height: 500}}>
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
                  containerStyle={{width: theme.sizes.width, height: 500}}
                  childrenStyle={{padding: 10}}
                  imageStyle={{resizeMode: 'contain'}}
                ></components.ImageLoader>
              );
            })}
          </ScrollView>
          <components.Favorite
            item={item}
            containerStyle={{
              paddingRight: 20,
              paddingBottom: 24,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
            bigIcon={true}
          />
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
        </View>
      </View>
    );
  };

  const renderProductName = () => {
    return <components.SingleProductName item={item} />;
  };

  const renderProductPrice = () => {
    return (
      <components.SinglePriceAndCount
        item={item}
        containerStyle={{marginBottom: 30}}
      />
    );
  };

  const renderColors = () => {
    return (
      <View style={{paddingLeft: 20, marginBottom: 30}}>
        <Text
          style={{
            marginBottom: 20,
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
          }}
        >
          Color
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {colors.map((color, index, array) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedColor(color)}
                key={index}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 5,
                  marginBottom: 10,
                  marginRight: index === array.length - 1 ? 0 : 14,
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
    );
  };

  const renderDescription = () => {
    return (
      <View style={{paddingHorizontal: 20, marginBottom: 50}}>
        <Text
          style={{
            marginBottom: 20,
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
          }}
        >
          Description
        </Text>
        <Text
          style={{
            ...theme.fonts.textStyle16,
            color: theme.colors.textColor,
            marginBottom: 14,
          }}
          numberOfLines={numberOfLines}
        >
          {item.description}
        </Text>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setNumberOfLines(numberOfLines === 3 ? null : 3)}
        >
          <Text
            style={{
              marginRight: 6,
              ...theme.fonts.textStyle16,
              color: theme.colors.mainColor,
            }}
          >
            read more
          </Text>
          <svg.ReadMoreArrowSvg />
        </TouchableOpacity>
      </View>
    );
  };

  const renderReviews = () => {
    return (
      <View>
        <components.BlockHeading
          title='Reviews (12)'
          containerStyle={{marginBottom: 17}}
          onPress={() =>
            navigation.navigate(theme.screens.Reviews, {reviews: reviews})
          }
        />
        {reviews.map((review, index) => {
          return (
            <components.ReviewItem
              key={index}
              item={review}
              containerStyle={{marginBottom: 20}}
            />
          );
        })}
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingBottom: 20, marginTop: 6}}>
        <components.Button title='+ ADd to cart' />
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
        {renderProductName()}
        {renderProductPrice()}
        {renderColors()}
        {renderDescription()}
        {renderReviews()}
        {renderButton()}
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

export default ProductLong;
