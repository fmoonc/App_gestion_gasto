import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {theme, carousel} from '../constants';

import ImageLoader from './ImageLoader';
import ShopNow from './ShopNow';

const Carousel = ({navigation, data}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <View style={{marginBottom: 20}}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        style={{flexGrow: 0}}
      >
        {carousel.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate(theme.screens.Shop, {
                  title: 'Featured products',
                  items: data,
                });
              }}
            >
              <ImageLoader
                source={{uri: item.image}}
                containerStyle={{
                  width: theme.sizes.width,
                  height: 500,
                }}
                childrenStyle={{
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                  padding: 20,
                }}
              >
                <Text
                  style={{
                    marginBottom: 30,
                    textTransform: 'capitalize',
                    ...theme.fonts.H1,
                    color: theme.colors.mainColor,
                  }}
                >
                  {item.title}
                </Text>
                <View style={{marginBottom: 60}}>
                  <ShopNow />
                </View>
              </ImageLoader>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 20,
          left: 20,
        }}
      >
        {carousel.map((_, index) => (
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
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
