import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {theme} from '../constants';

import CustomStatusBar from './CustomStatusBar';

const CustomSafeArea = ({children, containerStyle, safeArea = true}) => {
  const renderStatusBar = () => {
    return <CustomStatusBar darkContent backgroundColor={theme.colors.white} />;
  };

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={{flex: 1, backgroundColor: theme.colors.white, ...containerStyle}}
    >
      {safeArea && renderStatusBar()}
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeArea;
