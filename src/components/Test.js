import {View, Text, Image} from 'react-native';
import React from 'react';

const Test = () => {
  return (
    <View style={{flex: 1, borderTopWidth: 1}}>
      <Image
        source={{uri: 'https://dl.dropbox.com/s/urnhxslijapijsj/03.jpg?dl=0'}}
        style={{width: '100%', height: 300}}
      />
    </View>
  );
};

export default Test;
