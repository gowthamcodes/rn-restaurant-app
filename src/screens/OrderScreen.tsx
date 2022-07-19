import React, { useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
  BackHandler,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, Images } from '../constants';
import { Display } from '../utils';
import { Button, MenuItem, Seperator } from '../components';
import { modifyCart } from '../redux/slices/cartSlice';
import routes from '../navigators/routes';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/OrderStyles';
import { IMenu } from '../components/MenuItem';

const OrderScreen = ({ navigation: { navigate } }: any) => {
  const dispatch = useDispatch();
  const { orders, quantity, price } = useSelector((state: any) => state.cart);

  const appListener = () => {
    Alert.alert('Alert', 'Are you sure you want to exit the app?', [
      {
        text: 'Stay',
        onPress: () => undefined,
        style: 'cancel',
      },
      { text: 'Exit', onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  const addToCart = (item: IMenu) => {
    if (item.qty < 20) {
      const modifiedOrder = orders.map((order: any) =>
        order.title === item.title ? { ...item, qty: item.qty + 1 } : order,
      );

      dispatch(
        modifyCart({
          orders: modifiedOrder,
          quantity: Number(quantity + 1),
          price: Number(price + item.price),
        }),
      );
    }
  };

  const removeCart = (item: IMenu) => {
    if (item.qty > 0) {
      const modifiedOrder = orders.map((order: any) =>
        order.title === item.title ? { ...item, qty: item.qty - 1 } : order,
      );

      dispatch(
        modifyCart({
          orders: modifiedOrder,
          quantity: Number(quantity - 1),
          price: Number(price - item.price),
        }),
      );
    }
  };

  const onAddItem = (item: IMenu) => {
    const modifiedOrder = orders.map((order: any) =>
      order.title === item.title ? { ...item, qty: 1 } : order,
    );
    dispatch(
      modifyCart({
        orders: modifiedOrder,
        quantity: Number(quantity + 1),
        price: Number(price + item.price),
      }),
    );
  };

  const Card = () => (
    <View style={styles.card}>
      <Text style={styles.title}>Inka Restaurant</Text>
      <Seperator height={Display.setHeight(2)} />
      <View style={styles.wrapper}>
        <AntDesign name={'staro'} color={Colors.GREY} size={16} />
        <Text style={styles.subtitle}>
          {'5.0(200+) | All days : 09:00 AM - 06:00 PM'}
        </Text>
      </View>
      <Seperator height={Display.setHeight(1.2)} />
      <View style={styles.wrapper}>
        <Feather name={'phone-call'} color={Colors.GREY} size={16} />
        <Text style={styles.subtitle}>{'Reach us at : 9854562142'}</Text>
      </View>
      <Seperator height={Display.setHeight(1.4)} />
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.buttonText}>{'BOOK A TABLE'}</Text>
      </TouchableOpacity>
    </View>
  );

  const HeaderIcon = () => (
    <View style={styles.iconContainer}>
      <TouchableOpacity activeOpacity={0.8} onPress={appListener}>
        <Feather name={'arrow-left'} size={26} color={Colors.WHITE} />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <TouchableOpacity activeOpacity={0.8} style={{ marginHorizontal: 16 }}>
          <Ionicons name={'md-share-outline'} size={26} color={Colors.WHITE} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Feather name={'info'} size={26} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
    </View>
  );

  useEffect(() => {
    const handler = BackHandler.addEventListener(
      'hardwareBackPress',
      appListener,
    );
    return () => handler.remove();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          blurRadius={2}
          source={Images.cover}
          resizeMode={'cover'}
          style={styles.coverImage}>
          <HeaderIcon />
          <Seperator height={Display.setHeight(10.5)} />
          <Card />
        </ImageBackground>

        <View style={styles.space} />

        <Text style={styles.menuTitle}>Starter</Text>

        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={orders}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <MenuItem
              item={item}
              handleAdd={addToCart}
              handleRemove={removeCart}
              handleAddToCart={onAddItem}
            />
          )}
        />
      </View>

      <View style={styles.menuButtonContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.menuButton}>
          <View style={styles.wrapper}>
            <Image
              source={Images.menu}
              resizeMode={'contain'}
              style={styles.image}
            />
            <Text style={styles.menuButtonText}>MENU</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Button
        title={quantity === 0 ? 'VIEW CART' : `VIEW CART (${quantity} ITEMS)`}
        icon={() => (
          <AntDesign name={'shoppingcart'} size={26} color={Colors.WHITE} />
        )}
        onPress={() => navigate(routes.MyCart)}
      />
    </>
  );
};
``;

export default OrderScreen;
