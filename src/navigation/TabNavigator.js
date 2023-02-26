import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import {theme, tabs} from '../constants';
import {components} from '../components';
import {func} from '../utils/func';

import HomeOne from '../screens/tabs/HomeOne';
import Categories from '../screens/tabs/Categories';
import Order from '../screens/tabs/Order';
import Wishlist from '../screens/tabs/Wishlist';
import Profile from '../screens/tabs/Profile';

const TabNavigator = ({navigation}) => {
  const currentScreen = useSelector((state) => state.tab.screen);

  const renderScreen = () => {
    switch (currentScreen) {
      case theme.screens.Home:
        return <HomeOne navigation={navigation} />;
      case theme.screens.Categories:
        return <Categories navigation={navigation} />;
      case theme.screens.Order:
        return <Order navigation={navigation} />;
      case theme.screens.Wishlist:
        return <Wishlist navigation={navigation} />;
      case theme.screens.Profile:
        return <Profile navigation={navigation} />;
    }
  };

  const renderBottomBar = () => {
    return (
      <components.BottomBarWrapper>
        {tabs.map((tab, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{alignItems: 'center'}}
              activeOpacity={0.8}
              onPress={() => func.setScreen(tab.name)}
            >
              <tab.icon
                iconColor={
                  tab.name === currentScreen
                    ? theme.colors.mainColor
                    : theme.colors.white
                }
                bgColor={
                  tab.name === currentScreen
                    ? theme.colors.white
                    : theme.colors.transparent
                }
              />
            </TouchableOpacity>
          );
        })}
      </components.BottomBarWrapper>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderScreen()}
      {renderBottomBar()}
    </components.CustomSafeArea>
  );
};

export default TabNavigator;
