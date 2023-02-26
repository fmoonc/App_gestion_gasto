import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';

import {components} from '../components';
import {theme, addresses, paymentMethods} from '../constants';
import {svg} from '../assets';

const Checkout = ({navigation}) => {
  const [shippingModal, setShippingModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [address, setAddress] = useState(addresses[0].address);
  const [payment, setPayment] = useState('Visa');

  const cart = useSelector((state) => state.cart.list);
  const total = useSelector((state) => state.cart.total);
  const delivery = 15;
  const newTotal = (total + delivery).toFixed(2);

  const renderHeader = () => {
    return <components.Header goBack={true} title='Checkout' />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 25, paddingBottom: 20}}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: theme.colors.strokeColor,
            marginHorizontal: 20,
            borderRadius: 5,
            padding: 20,
            backgroundColor: '#FAFCFE',
            marginBottom: 14,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: theme.colors.strokeColor,
              marginBottom: 20,
              paddingBottom: 20,
            }}
          >
            <Text
              style={{
                ...theme.fonts.H4,
                color: theme.colors.mainColor,
                textTransform: 'capitalize',
              }}
            >
              My order
            </Text>
            <Text
              style={{
                ...theme.fonts.H4,
                color: theme.colors.mainColor,
                textTransform: 'capitalize',
              }}
            >
              ${newTotal}
            </Text>
          </View>
          <View>
            {cart.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      ...theme.fonts.textStyle14,
                      color: theme.colors.textColor,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      ...theme.fonts.textStyle14,
                      color: theme.colors.textColor,
                    }}
                  >
                    {item.quantity} x ${item.price}
                  </Text>
                </View>
              );
            })}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
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
                ${delivery}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginLeft: 20,
            marginBottom: 14,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderColor: theme.colors.strokeColor,
            borderRadius: 5,
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => setShippingModal(true)}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <svg.ShippingMapSvg />
              <Text
                style={{
                  marginLeft: 10,
                  ...theme.fonts.H5,
                  color: theme.colors.mainColor,
                }}
              >
                Shipping details
              </Text>
            </View>
            <Text
              style={{
                ...theme.fonts.DMSans_400Regular,
                fontSize: 12,
                color: theme.colors.textColor,
              }}
            >
              8000 S Kirkland Ave, Chicago, IL 6065...
            </Text>
          </View>
          <svg.SmallArrowSvg />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 20,
            marginBottom: 24,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderColor: theme.colors.strokeColor,
            borderRadius: 5,
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => setPaymentModal(true)}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <svg.PaymentCreditCardSvg />
              <Text
                style={{
                  marginLeft: 10,
                  ...theme.fonts.H5,
                  color: theme.colors.mainColor,
                }}
              >
                Payment method
              </Text>
            </View>
            <Text
              style={{
                ...theme.fonts.DMSans_400Regular,
                fontSize: 12,
                color: theme.colors.textColor,
              }}
            >
              **** 4864
            </Text>
          </View>
          <svg.SmallArrowSvg />
        </TouchableOpacity>
        <View
          style={{
            marginBottom: 20,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: '100%',
              height: 131,
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderColor: theme.colors.strokeColor,
            }}
          >
            <TextInput
              style={{
                width: '100%',
                height: '100%',
                paddingHorizontal: 24,
                paddingTop: 23,
                paddingBottom: 23,
                color: theme.colors.mainColor,
                ...theme.fonts.DMSans_400Regular,
                fontSize: 16,
              }}
              placeholder='Enter your comment'
              textAlignVertical='top'
              multiline={true}
              placeholderTextColor='#A8BCCC'
            />
            <View
              style={{
                position: 'absolute',
                top: -12,
                left: 13,
                paddingHorizontal: 10,
                backgroundColor: theme.colors.white,
              }}
            >
              <Text
                style={{
                  ...theme.fonts.DMSans_500Medium,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  color: theme.colors.textColor,
                  lineHeight: 12 * 1.7,
                }}
              >
                comment
              </Text>
            </View>
          </View>
        </View>
        <components.Button
          title='Confirm order'
          containerStyle={{marginHorizontal: 20}}
          onPress={() => navigation.navigate(theme.screens.OrderFailed)}
        />
      </ScrollView>
    );
  };

  const renderShippingModal = () => {
    return (
      <Modal
        isVisible={shippingModal}
        onBackdropPress={() => setShippingModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
        animationIn='zoomIn'
        animationOut='zoomOut'
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            marginHorizontal: 40,
            paddingTop: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H4,
              color: theme.colors.mainColor,
              textTransform: 'capitalize',
              marginBottom: 15,
              marginHorizontal: 20,
            }}
          >
            Choose delivery address:
          </Text>
          {addresses.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 20,
                  borderTopWidth: 1,
                  borderTopColor: theme.colors.strokeColor,
                  paddingHorizontal: 20,
                }}
                onPress={() => setAddress(item.address)}
              >
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}
                  >
                    <item.icon />
                    <Text
                      style={{
                        ...theme.fonts.H5,
                        color: theme.colors.mainColor,
                        marginLeft: 10,
                      }}
                      numberOfLines={1}
                    >
                      {item.type}
                    </Text>
                  </View>
                  <Text
                    style={{
                      ...theme.fonts.DMSans_400Regular,
                      fontSize: 12,
                      color: theme.colors.textColor,
                    }}
                    numberOfLines={1}
                  >
                    {item.address}
                  </Text>
                </View>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: theme.colors.textColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {address === item.address && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: 'red',
                        borderRadius: 5,
                        backgroundColor: theme.colors.mainColor,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    );
  };

  const renderPaymentModal = () => {
    return (
      <Modal
        isVisible={paymentModal}
        onBackdropPress={() => setPaymentModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
        animationIn='zoomIn'
        animationOut='zoomOut'
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            marginHorizontal: 40,
            paddingTop: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H4,
              color: theme.colors.mainColor,
              textTransform: 'capitalize',
              marginBottom: 15,
              marginHorizontal: 20,
            }}
          >
            Choose payment method
          </Text>
          {paymentMethods.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 20,
                  borderTopWidth: 1,
                  borderTopColor: theme.colors.strokeColor,
                  marginLeft: 20,
                  paddingRight: 20,
                }}
                onPress={() => setPayment(item.type)}
              >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{uri: item.logo}}
                    style={{
                      width:
                        item.type === 'Visa'
                          ? 40.43
                          : item.type === 'MasterCard'
                          ? 26.59
                          : item.type === 'Apple Pay'
                          ? 40.2
                          : null,
                      height:
                        item.type === 'Visa'
                          ? 12
                          : item.type === 'MasterCard'
                          ? 16
                          : item.type === 'Apple Pay'
                          ? 16
                          : null,
                    }}
                  />
                  <Text
                    style={{
                      ...theme.fonts.DMSans_400Regular,
                      fontSize: 12,
                      color: theme.colors.textColor,
                      marginLeft: 20,
                    }}
                    numberOfLines={1}
                  >
                    {item?.cardNumber}
                  </Text>
                </View>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: theme.colors.textColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {payment === item.type && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: 'red',
                        borderRadius: 5,
                        backgroundColor: theme.colors.mainColor,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    );
  };

  return (
    <components.CustomSafeArea>
      {renderHeader()}
      {renderContent()}
      {renderShippingModal()}
      {renderPaymentModal()}
    </components.CustomSafeArea>
  );
};

export default Checkout;
