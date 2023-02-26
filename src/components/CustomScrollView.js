import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import {theme} from '../constants';

const CustomScrollView = ({
  // currentSlideIndex,
  children,
  horizontal,
  pagingEnabled,
  contentContainerStyle,
  showsHorizontalScrollIndicator,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <ScrollView
      horizontal={horizontal}
      pagingEnabled={pagingEnabled}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      onMomentumScrollEnd={updateCurrentSlideIndex}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </ScrollView>
  );
};

export default CustomScrollView;
