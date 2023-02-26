import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigationState, useNavigation} from '@react-navigation/native';

import {svg} from '../assets';
import {theme} from '../constants';
import {func} from '../utils';

import BurgerMenuModal from './BurgerMenuModal';

const Header = ({
  goBack,
  containerStyle,
  border,
  title,
  search,
  burgerMenu,
  basket,
  onChangeText,
  onFocus,
  onBlur,
  onEndEditing,
  searchRef,
}) => {
  const routes = useNavigationState((state) => state.routes);
  const currentRoute = routes[routes.length - 1].name;

  const cart = useSelector((state) => state.cart.list);
  const total = useSelector((state) => state.cart.total);

  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 52,
        position: 'relative',
        ...containerStyle,
      }}
    >
      {border && (
        <View
          style={{
            backgroundColor: theme.colors.strokeColor,
            height: 1,
            width:
              theme.sizes.width -
              (currentRoute === theme.screens.OrderHistory ? 20 : 0),
            bottom: 0,
            right: 0,
            position: 'absolute',
          }}
        />
      )}
      {goBack && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 12,
            }}
            onPress={() => navigation.goBack()}
          >
            <svg.GoBackSvg />
          </TouchableOpacity>
        </View>
      )}
      {title && (
        <Text
          style={{
            textAlign: 'center',
            textTransform: 'capitalize',
            ...theme.fonts.textStyle16,
            color: theme.colors.mainColor,
          }}
        >
          {title}
        </Text>
      )}
      {search && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: theme.sizes.width - 190,
            marginRight: 60,
          }}
        >
          <View style={{marginRight: 7}}>
            <svg.SearchSvg />
          </View>
          <TextInput
            ref={searchRef}
            placeholder="Search"
            style={{height: '100%', width: '100%'}}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            onEndEditing={onEndEditing}
          />
        </View>
      )}
      {burgerMenu && (
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={{
            position: 'absolute',
            left: 0,
            alignItems: 'center',
            height: 42,
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}
        >
          <svg.BurgerMenuSvg />
        </TouchableOpacity>
      )}
      {basket && (
        <TouchableOpacity
          onPress={() => {
            cart.length === 0 && func.cartIsEmptyMessage();
            if (
              (cart.length > 0 && currentRoute === theme.screens.ProductLong) ||
              theme.screens.ProductShort ||
              theme.screens.Shop
            )
              if (
                cart.length > 0 &&
                currentRoute === theme.screens.TabNavigator
              ) {
                func.setScreen(theme.screens.Order);
              }
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            right: 0,
            alignItems: 'center',
            paddingRight: 20,
          }}
        >
          <View
            style={{
              height: 22,
              paddingHorizontal: 7,
              backgroundColor: theme.colors.mainColor,
              borderRadius: 11,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: theme.colors.white,
                ...theme.fonts.DMSans_700Bold,
                fontSize: 10,
              }}
            >
              ${total === 0 ? '0' : total.toFixed(1)}
            </Text>
          </View>
          <svg.BasketSvg />
        </TouchableOpacity>
      )}
      {burgerMenu && (
        <BurgerMenuModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </View>
  );
};

export default Header;
