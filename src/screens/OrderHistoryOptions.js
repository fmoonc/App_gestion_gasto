import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';

import {components} from '../components';
import {theme, history} from '../constants';
import {svg} from '../assets';

const OrderHistoryOptions = ({navigation}) => {
  const [activeSections, setActiveSections] = useState([]);
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = () => {
    return (
      <components.Header
        goBack={true}
        navigation={navigation}
        title='Order history'
      />
    );
  };

  const accordionHeader = (section) => {
    return (
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: theme.colors.strokeColor,
          paddingRight: 20,
          marginLeft: 20,
          paddingBottom: 20,
          paddingTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H5,
              color: theme.colors.mainColor,
            }}
          >
            #{section.number}
          </Text>
          <Text
            style={{
              ...theme.fonts.H5,
              color: theme.colors.mainColor,
            }}
          >
            ${section.total}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 12,
              lineHeight: 12 * 1.5,
              ...theme.fonts.DMSans_400Regular,
              color:
                section.status === 'Shipping'
                  ? '#FFA462'
                  : section.status === 'Delivered'
                  ? '#00824B'
                  : section.status === 'Cancelled'
                  ? '#F84C6B'
                  : section.status === 'Pending' && '#FFA462',
            }}
          >
            {section.status === 'Shipping'
              ? 'Shipping'
              : section.status === 'Delivered'
              ? 'Delivered'
              : section.status === 'Cancelled'
              ? 'Cancelled'
              : 'Pending'}
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 12 * 1.5,
              ...theme.fonts.DMSans_400Regular,
              color: theme.colors.textColor,
            }}
          >
            {section.date}
          </Text>
        </View>
      </View>
    );
  };

  const accordionContent = (section) => {
    return (
      <View
        style={{
          paddingRight: 20,
          paddingTop: 20,
          marginLeft: 20,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            padding: 20,
            borderRadius: 5,
            borderColor: theme.colors.strokeColor,
            backgroundColor: '#FAFCFE',
          }}
        >
          {section.products.map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  ...theme.fonts.textStyle14,
                  color: theme.colors.textColor,
                }}
              >
                {item.name}, {item.color != null && `${item.color}`}
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
          ))}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: theme.colors.strokeColor,
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
              alignContent: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                ...theme.fonts.textStyle14,
                color: theme.colors.mainColor,
                textTransform: 'capitalize',
              }}
            >
              total
            </Text>
            <Text
              style={{
                ...theme.fonts.textStyle14,
                color: theme.colors.mainColor,
              }}
            >
              $149.5
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 10,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{marginTop: 4, marginRight: 6}}>
              <svg.RepeatSvg />
            </View>
            <Text
              style={{
                ...theme.fonts.textStyle16,
                color: theme.colors.mainColor,
              }}
            >
              repeat order
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(theme.screens.LeaveAReview)}
            style={{flexDirection: 'row', alignItems: 'center'}}
          >
            <Text
              style={{
                ...theme.fonts.textStyle16,
                color: theme.colors.mainColor,
              }}
            >
              leave a review
            </Text>
            <View style={{marginLeft: 6, marginTop: 2}}>
              <svg.ReviewRightSvg />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      >
        <Accordion
          activeSections={activeSections}
          sections={history}
          touchableComponent={TouchableOpacity}
          renderHeader={accordionHeader}
          renderContent={accordionContent}
          duration={400}
          onChange={setSections}
        />
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

export default OrderHistoryOptions;
