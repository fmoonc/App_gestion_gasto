import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {components} from '../../components';
import {theme, banners, categories} from '../../constants';

const HomeOne = ({navigation}) => {
  const url = 'https://api.jsonbin.io/v3/b/63aabf14dfc68e59d571e16c';

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const bestSellers = data?.filter((item) => item.is_bestseller === true);
  const featured = data?.filter((item) => item.is_featured === true);

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
    return <components.Header basket={true} burgerMenu={true} border={true} />;
  };

  const renderCarousel = () => {
    return <components.Carousel navigation={navigation} data={data} />;
  };

  const renderCategories = () => {
    return (
      <ScrollView
        horizontal={true}
        contentContainerStyle={{paddingLeft: 20, marginBottom: 50}}
        showsHorizontalScrollIndicator={false}
      >
        {categories.home_one.map((item, index) => {
          return (
            <components.HomeOneCategoryItem
              item={item}
              key={index}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    );
  };

  const renderBestSellers = () => {
    return (
      <View style={{marginBottom: 50}}>
        <components.BlockHeading
          title='Best sellers'
          onPress={() =>
            navigation.navigate(theme.screens.Shop, {
              title: 'Featured products',
              items: bestSellers,
            })
          }
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
        >
          {bestSellers
            ?.map((item, index) => {
              return (
                <components.BestSellerItem
                  item={item}
                  key={index}
                  navigation={navigation}
                />
              );
            })
            .slice(0, 10)}
        </ScrollView>
      </View>
    );
  };

  const renderBanner = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(theme.screens.Shop, {
            title: 'Featured products',
            items: data,
          })
        }
      >
        <components.ImageLoader
          source={{uri: banners[1]}}
          containerStyle={{
            height: 200,
            marginBottom: 50,
            marginRight: 20,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
          imageStyle={{borderTopRightRadius: 5, borderBottomRightRadius: 5}}
          childrenStyle={{paddingHorizontal: 20, paddingVertical: 30}}
        >
          <Text
            style={{
              marginBottom: 20,
              ...theme.fonts.H2,
              color: theme.colors.mainColor,
              textTransform: 'capitalize',
            }}
          >
            spring discounts{'\n'}on leather chairs
          </Text>
          <components.ShopNow />
        </components.ImageLoader>
      </TouchableOpacity>
    );
  };

  const renderFeautured = () => {
    return (
      <View style={{marginBottom: 50}}>
        <components.BlockHeading
          title='Featured products'
          onPress={() =>
            navigation.navigate(theme.screens.Shop, {
              title: 'Featured products',
              items: featured,
            })
          }
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
        >
          {featured
            ?.map((item, index) => {
              return (
                <components.FeaturedItem
                  key={index}
                  item={item}
                  onPress={() =>
                    navigation.navigate(theme.screens.ProductShort, {item})
                  }
                />
              );
            })
            .slice(0, 10)}
        </ScrollView>
      </View>
    );
  };

  const renderLoading = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color={theme.colors.mainColor} />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCarousel()}
        {renderCategories()}
        {renderBestSellers()}
        {renderBanner()}
        {renderFeautured()}
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1}}>
      {!isPending && renderHeader()}
      {isPending ? renderLoading() : renderContent()}
    </View>
  );
};

export default HomeOne;
