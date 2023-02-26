import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {
  addToCart as addToCartAction,
  removeFromCart as removeFromCartAction,
} from '../store/cartSlice';
import {
  addToWishlist as addToWishlistAction,
  removeFromWishlist as removeFromWishlistAction,
} from '../store/wishlistSlice';
import {setScreen as setScreenAction} from '../store/tabSlice';
import store from '../store/store';

// Add to cart and wishlist

const addToCart = (item, dispatch, message = true) => {
  dispatch(addToCartAction(item));
  message &&
    showMessage({
      message: 'Success',
      description: `${item.name} added to cart`,
      type: 'success',
    });
};

const addToWishlist = (item, dispatch, message = true) => {
  dispatch(addToWishlistAction(item));
  message &&
    showMessage({
      message: 'Success',
      description: `${item.name} added to wishlist`,
      type: 'success',
    });
};

// Remove from cart and wishlist

const removeFromCart = (item, dispatch) => {
  dispatch(removeFromCartAction(item));
};

const removeFromWishlist = (item, dispatch) => {
  return Alert.alert(
    'Alert!',
    'Are you sure you want to delete from wishlist ?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => dispatch(removeFromWishlistAction(item)),
      },
    ],
  );
};

const setScreen = (screen) => {
  store.dispatch(setScreenAction(screen));
};

const promocodeWasCopiedMessage = (item) => {
  showMessage({
    message: 'Success',
    description: `${item.code} promocode was copied to clipboard`,
    type: 'success',
  });
};

const cartIsEmptyMessage = () => {
  return Alert.alert('Message', 'Your cart is empty, add something to cart.', [
    {
      text: 'OK',
    },
  ]);
};

const cartItemExist = (item, cart) => {
  return cart.find((i) => i.id === item.id);
};

const cartItemExistMessage = () => {
  return Alert.alert(
    'Alert!',
    'The product already exists in the cart, please remove the product from the cart',
    [
      {
        text: 'Ok',
      },
    ],
  );
};

const wishlistItemExist = (item, wishlist) => {
  return wishlist.find((i) => i.id === item.id);
};

const storeFunc = () => {
  return store.dispatch;
};

const useFetchData = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [bestSellers, setBestSellers] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json.record);
        setBestSellers(
          json.record.filter((item) => item.is_bestseller === true),
        );
        setFeatured(json.record.filter((item) => item.is_featured === true));
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return {response, error, loading, bestSellers, featured};
};

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return response.json();
      })
      .then((data) => {
        setData(data.record);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return {data, isPending, error};
};

const func = {
  addToCart,
  setScreen,
  cartItemExist,
  cartItemExistMessage,
  addToWishlist,
  removeFromCart,
  wishlistItemExist,
  cartIsEmptyMessage,
  promocodeWasCopiedMessage,
  removeFromWishlist,
  storeFunc,
  useFetchData,
  useFetch,
};

export {func};
