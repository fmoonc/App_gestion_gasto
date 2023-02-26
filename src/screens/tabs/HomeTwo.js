import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {components} from '../../components';
import {theme, banners} from '../../constants';

const HomeTwo = ({navigation}) => {
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

  const renderBannerTop = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(theme.screens.Shop, {
            title: 'Dining chairs',
            items: data,
          });
        }}
      >
        <components.ImageLoader
          source={{uri: banners[2]}}
          containerStyle={{
            height: 250,
            marginTop: 20,
            marginRight: 20,
            marginBottom: 50,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
          }}
          imageStyle={{
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
          }}
          childrenStyle={{
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                ...theme.fonts.H2,
                color: theme.colors.mainColor,
                textTransform: 'capitalize',
                marginBottom: 20,
              }}
            >
              Dining chairs{'\n'}with 10% off
            </Text>
            <components.ShopNow />
          </View>
        </components.ImageLoader>
      </TouchableOpacity>
    );
  };

  const renderFeautured = () => {
    return (
      <View style={{marginBottom: 50}}>
        <components.BlockHeading
          title='Featured products'
          onPress={() => {
            navigation.navigate(theme.screens.Shop, {
              title: 'Featured products',
              items: data,
            });
          }}
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
        >
          {featured?.map((item, index) => {
            return (
              <components.FeaturedItem key={index} item={item} index={index} />
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderTopCategories = () => {
    return (
      <View style={{marginBottom: 50}}>
        <components.BlockHeading
          title='Top categories'
          onPress={() => {
            navigation.navigate(theme.screens.Shop, {
              title: 'Featured products',
              items: data,
            });
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}
        >
          <components.CategoryItem
            title='Lightning'
            quantity='36'
            source={{
              uri: 'https://dl.dropbox.com/s/w4t1ditm38uaxjc/01.jpg?dl=0',
            }}
            onPress={() => {
              navigation.navigate(theme.screens.Shop, {
                title: 'Lightning',
                items: data,
              });
            }}
          />
          <components.CategoryItem
            title='Bedding'
            quantity='621'
            source={{
              uri: 'https://dl.dropbox.com/s/cundhi9snmytatj/Category.jpg?dl=0',
            }}
            onPress={() => {
              navigation.navigate(theme.screens.Shop, {
                title: 'Bedding',
                items: data,
              });
            }}
          />
          <components.CategoryItem
            title='Decor'
            quantity='112'
            source={{
              uri: 'https://dl.dropbox.com/s/pb78kr5a0abfw1f/Category.jpg?dl=0',
            }}
            onPress={() => {
              navigation.navigate(theme.screens.Shop, {
                title: 'Decor',
                items: data,
              });
            }}
          />
        </View>
        <View style={{height: 14}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}
        >
          <components.CategoryItem
            title='Chairs & Tables'
            quantity='150'
            source={{
              uri: 'https://dl.dropbox.com/s/uditk6gz3ws0qny/Category.jpg?dl=0',
            }}
            onPress={() => {
              navigation.navigate(theme.screens.Shop, {
                title: 'Chairs & Tables',
                items: data,
              });
            }}
          />
          <components.CategoryItem
            title='Office'
            quantity='54'
            source={{
              uri: 'https://dl.dropbox.com/s/bfh59pvpc2vfnil/05.jpg?dl=0',
            }}
            onPress={() => {
              navigation.navigate(theme.screens.Shop, {
                title: 'Office',
                items: data,
              });
            }}
          />
          <components.CategoryItem
            title='Garden'
            quantity='98'
            source={{
              uri: 'https://dl.dropbox.com/s/bihfk3kly4viueb/06.jpg?dl=0',
            }}
            onPress={() => {
              navigation.navigate(theme.screens.Shop, {
                title: 'Garden',
                items: data,
              });
            }}
          />
        </View>
      </View>
    );
  };

  const renderBestSellers = () => {
    return (
      <View style={{marginBottom: 50}}>
        <components.BlockHeading
          title='Best sellers'
          onPress={() => {
            navigation.navigate(theme.screens.Shop, {
              title: 'Best sellers',
              items: data,
            });
          }}
        />
        {bestSellers?.map((item, index, array) => {
          return (
            <components.HorizontalProductItem
              key={index}
              item={item}
              navigation={navigation}
              containerStyle={{
                marginBottom: array.length - 1 === index ? 0 : 10,
              }}
            />
          );
        })}
      </View>
    );
  };

  const renderBannerBottom = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(theme.screens.Shop, {
            title: 'Shop',
            items: data,
          });
        }}
      >
        <components.ImageLoader
          source={{uri: banners[2]}}
          containerStyle={{
            height: 250,
            marginLeft: 20,
            marginBottom: 50,
          }}
          imageStyle={{
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
          }}
          childrenStyle={{
            justifyContent: 'center',
          }}
          activityIndicatorStyle={{
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                ...theme.fonts.H2,
                color: theme.colors.mainColor,
                textTransform: 'capitalize',
                marginBottom: 20,
              }}
            >
              Soft Wooden{'\n'}armchairs 15% off
            </Text>
            <components.ShopNow />
          </View>
        </components.ImageLoader>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      >
        {renderBannerTop()}
        {renderFeautured()}
        {renderTopCategories()}
        {renderBestSellers()}
        {renderBannerBottom()}
      </ScrollView>
    );
  };

  const renderLoading = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color={theme.colors.mainColor} />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {!isPending && renderHeader()}
      {isPending ? renderLoading() : renderContent()}
    </View>
  );
};

export default HomeTwo;
