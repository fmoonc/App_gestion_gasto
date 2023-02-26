import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';

import {theme} from '../constants';

const BottomBarWrapper = ({children}) => {
  return (
    <LinearGradient
      colors={['#142535', '#010202']}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopColor: '#EEEEEE',
        backgroundColor: theme.colors.mainColor,
        paddingBottom: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        // marginTop: 10,
      }}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
    >
      {children}
    </LinearGradient>
  );
};

export default BottomBarWrapper;
