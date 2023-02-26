import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';

import {components} from '../../components';
import {theme} from '../../constants';
import {svg} from '../../assets';

const Order = ({navigation}) => {
  const cart = useSelector((state) => state.cart.list);
  const total = useSelector((state) => state.cart.total);
  const delivery = 15;
  const newTotal = (total + delivery).toFixed(2);

  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [promocodeApplied, setPromocodeApplied] = useState(false);

  const url = 'https://api.jsonbin.io/v3/b/63aabf14dfc68e59d571e16c';

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
  }, []);

  const renderHeader = () => {
    return (
      <components.Header
        burgerMenu={true}
        title={cart.length > 0 ? 'Order' : 'Cart'}
        border={true}
        basket={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20, paddingTop: 20}}
      >
        {cart.map((item, index) => {
          return <components.OrderItem item={item} key={index} />;
        })}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',
            marginBottom: theme.sizes.height * 0.07,
          }}
        >
          <components.InputField
            placeholder='Enter your promocode'
            title='Enter the voucher'
            containerStyle={{
              width: '65%',
              marginRight: 10,
            }}
          />
          <TouchableOpacity
            style={{
              flex: 1,
              height: 50,
              borderWidth: 1,
              borderColor: '#DBE9F5',
              borderRadius: 5,
            }}
            onPress={() => {}}
          >
            <components.CustomGradient>
              <Text
                style={{
                  fontSize: 14,
                  textTransform: 'uppercase',
                  color: theme.colors.white,
                  ...theme.fonts.DMSans_700Bold,
                }}
              >
                apply
              </Text>
            </components.CustomGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 20,
            backgroundColor: '#FAFCFE',
            padding: 20,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#DBE9F5',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <Text style={{...theme.fonts.H5, color: theme.colors.mainColor}}>
              Subtotal
            </Text>
            <Text
              style={{
                ...theme.fonts.textStyle14,
                color: theme.colors.mainColor,
              }}
            >
              ${newTotal}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 14,
              borderBottomWidth: 1,
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                ...theme.fonts.textStyle14,
                color: theme.colors.textColor,
              }}
            >
              Delivery
            </Text>
            <Text
              style={{
                ...theme.fonts.textStyle14,
                color: theme.colors.textColor,
              }}
            >
              $15
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{...theme.fonts.H4, color: theme.colors.mainColor}}>
              Total
            </Text>
            <Text style={{...theme.fonts.H4, color: theme.colors.mainColor}}>
              ${newTotal}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  };

  const renderItem = (data) => {
    return (
      <View
        style={{
          marginBottom: 14,
          backgroundColor: theme.colors.white,
          flexDirection: 'row',
          alignItems: 'center',
          height: 100,
        }}
      >
        <components.ImageLoader
          source={{uri: data.item.images[0]}}
          containerStyle={{
            width: 100,
            height: 100,
          }}
          onPress={() => {}}
        >
          <components.SaleBadge item={data.item} />
        </components.ImageLoader>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#DBE9F5',
            flexDirection: 'row',
            flex: 1,
            height: '100%',
            alignItems: 'center',
            paddingLeft: 14,
            paddingRight: 4,
          }}
        >
          <View
            style={{
              marginRight: 'auto',
            }}
          >
            <components.ProductName
              item={data.item}
              containerStyle={{marginBottom: 3}}
            />
            <components.Price
              item={data.item}
              containerStyle={{marginBottom: 9}}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  marginRight: 8,
                  ...theme.fonts.DMSans_400Regular,
                  fontSize: 12,
                  textTransform: 'capitalize',
                  color: theme.colors.textColor,
                  lineHeight: 12 * 1.5,
                }}
              >
                color
              </Text>
              <Text>{data.item.color ? data.item.color : '-'}</Text>
            </View>
          </View>
          <components.OrderCounter item={data.item} />
        </View>
      </View>
    );
  };

  const renderHiddenItem = (data) => {
    return (
      <components.CustomTouchableOpacity
        selfEnd
        style={{
          width: 60,
          height: 100,
          backgroundColor: theme.colors.accent,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {}}
      >
        <svg.TrashSvg />
      </components.CustomTouchableOpacity>
    );
  };

  const renderListFooterComponent = () => {
    const renderPromocodeApplied = () => {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: theme.sizes.height * 0.07,
          }}
        >
          <svg.PromocodeCheckSvg />
          <Text
            style={{
              marginLeft: 6,
              ...theme.fonts.textStyle16,
              color: theme.colors.mainColor,
            }}
          >
            Promocode applied
          </Text>
        </View>
      );
    };

    const renderPromocodeNotApplied = () => {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',
            marginBottom: theme.sizes.height * 0.07,
          }}
        >
          <components.InputField
            placeholder='Enter your promocode'
            title='Enter the voucher'
            containerStyle={{
              width: '65%',
              marginRight: 10,
            }}
          />
          <TouchableOpacity
            style={{
              flex: 1,
              height: 50,
              borderWidth: 1,
              borderColor: '#DBE9F5',
              borderRadius: 5,
            }}
            onPress={() => setPromocodeApplied(true)}
          >
            <components.CustomGradient>
              <Text
                style={{
                  fontSize: 14,
                  textTransform: 'uppercase',
                  color: theme.colors.white,
                  ...theme.fonts.DMSans_700Bold,
                }}
              >
                apply
              </Text>
            </components.CustomGradient>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View style={{marginRight: 20}}>
        {promocodeApplied
          ? renderPromocodeApplied()
          : renderPromocodeNotApplied()}
        <View
          style={{
            marginBottom: 20,
            backgroundColor: '#FAFCFE',
            padding: 20,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#DBE9F5',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <Text style={{...theme.fonts.H5, color: theme.colors.mainColor}}>
              Subtotal
            </Text>
            <Text
              style={{
                ...theme.fonts.textStyle14,
                color: theme.colors.mainColor,
              }}
            >
              ${newTotal}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 14,
              borderBottomWidth: 1,
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                ...theme.fonts.textStyle14,
                color: theme.colors.textColor,
              }}
            >
              Delivery
            </Text>
            <Text
              style={{
                ...theme.fonts.textStyle14,
                color: theme.colors.textColor,
              }}
            >
              $15
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{...theme.fonts.H4, color: theme.colors.mainColor}}>
              Total
            </Text>
            <Text style={{...theme.fonts.H4, color: theme.colors.mainColor}}>
              ${newTotal}
            </Text>
          </View>
        </View>
        <View style={{height: 100}} />
      </View>
    );
  };

  const renderSwipeListView = () => {
    return (
      <SwipeListView
        data={cart}
        keyExtractor={(item) => `${item.id}`}
        renderItem={(data) => renderItem(data)}
        renderHiddenItem={(data) => renderHiddenItem(data)}
        ListFooterComponent={(data) => renderListFooterComponent(data)}
        rightOpenValue={-60}
        contentContainerStyle={{
          paddingLeft: 20,
          marginTop: 20,
        }}
        showsVerticalScrollIndicator={false}
        disableRightSwipe={true}
      />
    );
  };

  const renderNewContent = () => {
    return <View>{renderSwipeListView()}</View>;
  };

  const renderLoading = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color={theme.colors.mainColor} />
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: theme.colors.textColor,
          }}
          onPress={() => {
            cart.length === 0
              ? navigation.navigate(theme.screens.Shop, {
                  title: 'Shop',
                  items: data,
                })
              : navigation.navigate(theme.screens.Checkout);
          }}
        >
          {isPending === true && cart.length === 0 ? (
            <ActivityIndicator size='small' color={theme.colors.mainColor} />
          ) : (
            <Text
              style={{
                color: theme.colors.mainColor,
                textTransform: 'uppercase',
                ...theme.fonts.DMSans_700Bold,
                fontSize: 14,
              }}
            >
              {cart.length === 0 ? 'shop now' : 'proceed to checkout'}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyCart = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingHorizontal: 20,
        }}
      >
        <svg.ShoppingBagSvg />
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            marginTop: 30,
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          Your cart is empty!
        </Text>
        <Text
          style={{...theme.fonts.textStyle16, color: theme.colors.textColor}}
        >
          Looks like you haven't made{'\n'}your order yet.
        </Text>
      </ScrollView>
    );
  };

  const ifEmpty = () => {
    if (cart.length === 0) {
      return isPending ? renderLoading() : renderEmptyCart();
    } else {
      return renderNewContent();
    }
  };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      {ifEmpty()}
      {renderButton()}
    </View>
  );
};

export default Order;
