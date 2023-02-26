import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets';

const Filter = ({navigation}) => {
  const [selected, setSelected] = useState(1);
  const [selectedColor, setSelectedColor] = useState('color04');
  const [selectedBrand, setSelectedBrand] = useState('Royaloak');

  const renderHeader = () => {
    return <components.Header goBack={true} title='Filter' />;
  };

  const renderStatusButtons = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 30,
          flexWrap: 'wrap',
        }}
      >
        <components.StatusItem
          title='sale'
          containerStyle={{marginRight: 10}}
          defaultSelected={true}
        />
        <components.StatusItem title='top' containerStyle={{marginRight: 10}} />
        <components.StatusItem title='new' />
      </View>
    );
  };

  const renderPriceSlider = () => {
    const renderMarker = (e) => {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: 20,
              height: 20,
              marginHorizontal: 10,
              backgroundColor: theme.colors.mainColor,
              borderRadius: 5,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              position: 'absolute',
              bottom: -30,
              ...theme.fonts.textStyle14,
              fontSize: 14,
              color: theme.colors.textColor,
              lineHeight: 16 * 1.6,
            }}
          >
            ${e.currentValue}
          </Text>
        </View>
      );
    };

    return (
      <View style={{marginBottom: 50}}>
        <MultiSlider
          isMarkersSeparated={true}
          customMarkerLeft={(e) => renderMarker(e)}
          customMarkerRight={(e) => renderMarker(e)}
          values={[0, 800]}
          min={0}
          max={800}
          step={1}
          sliderLength={theme.sizes.width - 40}
          onValuesChange={(e) => {}}
          selectedStyle={{
            backgroundColor: theme.colors.mainColor,
            width: 300,
          }}
          unselectedStyle={{
            backgroundColor: '#DBE3F5',
            width: 300,
          }}
          containerStyle={{
            height: 20,
            width: '100%',
          }}
          trackStyle={{
            height: 3,
            width: '100%',
          }}
        />
      </View>
    );
  };

  const renderRatingButtons = () => {
    return (
      <View style={{marginBottom: 30}}>
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            marginBottom: 20,
          }}
        >
          Rating
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {[1, 2, 3, 4, 5].map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: 'orange',
                  borderRadius: 3,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor:
                    item === selected
                      ? theme.colors.mainColor
                      : theme.colors.white,
                  borderWidth: 1,
                  borderColor:
                    item === selected ? theme.colors.mainColor : '#DBE9F5',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: index === array.length - 1 ? 0 : 13,
                }}
                onPress={() => setSelected(item === selected ? null : item)}
              >
                <svg.RatingStarSvg
                  strokeColor={
                    item === selected
                      ? theme.colors.white
                      : theme.colors.textColor
                  }
                  fillColor={
                    item === selected
                      ? theme.colors.white
                      : theme.colors.textColor
                  }
                />
                <Text
                  style={{
                    ...theme.fonts.DMSans_700Bold,
                    fontSize: 12,
                    lineHeight: 12 * 1.7,
                    textTransform: 'uppercase',
                    color:
                      item === selected
                        ? theme.colors.white
                        : theme.colors.textColor,
                    marginLeft: 4,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderColors = () => {
    return (
      <View>
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            marginBottom: 20,
          }}
        >
          Color
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}
        >
          {['color01', 'color02', 'color03', 'color04', 'color05'].map(
            (color, index, array) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedColor(color)}
                  key={index}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 5,
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
            },
          )}
        </View>
      </View>
    );
  };

  const renderBrands = () => {
    return (
      <View style={{marginBottom: 59}}>
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            marginBottom: 20,
          }}
        >
          Brand
        </Text>
        <View
          style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}
        >
          {[
            'Durian',
            'Usha',
            'Royaloak',
            'Wipro',
            'Ikea',
            'Godrej Interio',
            'Solimo',
            'Dews',
          ].map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 15,
                }}
                onPress={() => setSelectedBrand(item)}
              >
                <View
                  style={{
                    width: 18,
                    height: 18,
                    borderWidth: 1,
                    borderColor: theme.colors.strokeColor,
                    marginRight: 10,
                    backgroundColor: '#F8FBFD',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 3,
                  }}
                >
                  {selectedBrand === item && <svg.BrandSelectedSvg />}
                </View>
                <Text
                  style={{
                    ...theme.fonts.textStyle14,
                    color: theme.colors.textColor,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderButtom = () => {
    return (
      <components.Button
        title='apply filters'
        onPress={() => navigation.goBack()}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20, paddingTop: 25}}
      >
        {renderStatusButtons()}
        {renderPriceSlider()}
        {renderRatingButtons()}
        {renderColors()}
        {renderBrands()}
        {renderButtom()}
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

export default Filter;
