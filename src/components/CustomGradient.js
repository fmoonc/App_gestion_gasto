import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';

const CustomGradient = ({children}) => {
  return (
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
      {children}
    </LinearGradient>
  );
};

export default CustomGradient;
