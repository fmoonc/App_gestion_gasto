import React from 'react';
import {View, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();

const CustomStatusBar = ({backgroundColor, darkContent, lightContent}) => {
  return (
    <View
      style={{
        width: '100%',
        height: backgroundColor ? statusBarHeight : 0,
        backgroundColor: backgroundColor,
      }}
    >
      <StatusBar
        barStyle={
          darkContent ? 'dark-content' : lightContent && 'light-content'
        }
        translucent={true}
        backgroundColor={'transparent'}
      />
    </View>
  );
};

export default CustomStatusBar;
