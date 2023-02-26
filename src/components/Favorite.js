import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {func} from '../utils/func';

import {svg} from '../assets';
import {theme} from '../constants';

const Favorite = ({item, containerStyle, bigIcon = false}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.list);

  return (
    <TouchableOpacity
      style={{...containerStyle}}
      onPress={() => {
        func.wishlistItemExist(item, wishlist)
          ? func.removeFromWishlist(item, dispatch)
          : func.addToWishlist(item, dispatch);
      }}
    >
      {!bigIcon ? (
        <svg.HeartSvg
          fillColor={
            func.wishlistItemExist(item, wishlist)
              ? theme.colors.mainColor
              : theme.colors.transparent
          }
          strokeColor={
            func.wishlistItemExist(item, wishlist)
              ? theme.colors.mainColor
              : theme.colors.textColor
          }
        />
      ) : (
        <svg.BigHeartSvg
          fillColor={
            func.wishlistItemExist(item, wishlist)
              ? theme.colors.mainColor
              : theme.colors.transparent
          }
          strokeColor={
            func.wishlistItemExist(item, wishlist)
              ? theme.colors.mainColor
              : theme.colors.textColor
          }
        />
      )}
    </TouchableOpacity>
  );
};

export default Favorite;
