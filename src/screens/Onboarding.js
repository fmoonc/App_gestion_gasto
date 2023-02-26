import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {components} from '../components';
import {theme, onboardingData} from '../constants';

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  const renderStatusBar = () => {
    return <components.CustomStatusBar darkContent={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        bounces={false}
        contentContainerStyle={{flexGrow: 1}}
      >
        {onboardingData.map((item, index) => {
          return (
            <components.ImageLoader
              source={{uri: item.image}}
              key={index}
              containerStyle={{width: theme.sizes.width, height: '100%'}}
              activeOpacity={1}
            >
              <SafeAreaView
                style={{flex: 1, paddingHorizontal: 20, paddingBottom: 40}}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      ...theme.fonts.H1,
                      color: theme.colors.mainColor,
                      textTransform: 'capitalize',
                      marginBottom: 14,
                      lineHeight: 32 * 1.3,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      ...theme.fonts.DMSans_400Regular,
                      fontSize: 16,
                      lineHeight: 16 * 1.7,
                      color: theme.colors.textColor,
                      marginBottom: 40,
                    }}
                  >
                    {item.description}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {onboardingData.map((_, index) => {
                      return (
                        <View
                          key={index}
                          style={[
                            {
                              width: 10,
                              height: 10,
                              marginHorizontal: 5,
                              borderRadius: 50,
                              borderWidth: 1,
                              borderColor: '#DBE9F5',
                              backgroundColor: theme.colors.white,
                            },
                            currentSlideIndex == index && {
                              backgroundColor: theme.colors.mainColor,
                              borderColor: theme.colors.mainColor,
                            },
                          ]}
                        />
                      );
                    })}
                  </View>
                </View>
                <View style={{marginTop: 'auto'}}>
                  <components.Button
                    title='Get Started'
                    onPress={() => navigation.navigate(theme.screens.SignIn)}
                  />
                </View>
              </SafeAreaView>
            </components.ImageLoader>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      {renderStatusBar()}
      {renderContent()}
    </View>
  );
};

export default Onboarding;
