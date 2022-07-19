import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Button, EmptyMenu, MenuItem, Seperator } from '../components';
import { Colors, Images, Data } from '../constants';
import Feather from 'react-native-vector-icons/Feather';
import { modifyCart } from '../redux/slices/cartSlice';
import { Display } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/CartStyles';
import { IMenu } from '../components/MenuItem';

const CartScreen = ({ navigation: { goBack } }: any) => {
  const { delivery_options } = Data;
  const [deliveryOption, setDeliveryOption] = useState(delivery_options[0]);

  const dispatch = useDispatch();
  const { orders, quantity, price } = useSelector((state: any) => state.cart);

  const [showMore, setShowMore] = useState(false);

  const cartItems = orders.filter((order: IMenu) => order.qty > 0);

  const orderInCart =
    !showMore && cartItems.length > 2
      ? [cartItems[0], cartItems[1]]
      : cartItems;

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

  const PriceCard = () => (
    <View style={styles.cardStyle}>
      <Text style={styles.totalCost}>{'Total Cost'}</Text>
      <Seperator height={Display.setHeight(0.5)} />
      <Text style={styles.price}>{`€ ${price}`}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.background}>
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => goBack()}>
              <Feather name={'arrow-left'} size={26} color={Colors.WHITE} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>My Cart</Text>
          </View>

          <View style={styles.wrapper}>
            <PriceCard />
          </View>
        </View>

        <Seperator height={Display.setHeight(1)} />
        <Text style={styles.reviewOrder}>Review Orders</Text>

        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={orderInCart}
          ListEmptyComponent={EmptyMenu}
          ListFooterComponent={() => {
            return cartItems.length > 2 && !showMore ? (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.showMoreContainer}
                onPress={() => setShowMore(true)}>
                <Text style={styles.showMoreText}>Show more</Text>
              </TouchableOpacity>
            ) : null;
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <MenuItem
              item={item}
              showMessage={true}
              handleAdd={addToCart}
              handleRemove={removeCart}
            />
          )}
        />

        <Text style={styles.deliveryOptions}>Delivery Options</Text>
        <Seperator height={Display.setHeight(1)} />
        <View style={styles.deliveryOptionContainer}>
          {delivery_options.map((option: string, index: number) => (
            <View key={index} style={styles.deliveryType}>
              <Image
                source={option === 'Dine-In' ? Images.dine : Images.delivery}
                resizeMode={'contain'}
                style={styles.deliveryImage}
              />
              <Text style={styles.option}>{option}</Text>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setDeliveryOption(option)}
                style={[
                  styles.radioButton,
                  deliveryOption === option && styles.activeRadioButton,
                ]}>
                <View
                  style={[
                    styles.radio,
                    deliveryOption === option && styles.activeRadio,
                  ]}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Seperator height={Display.setHeight(3)} />
        <Text style={styles.manageCards}>Manage Cards</Text>
      </View>
      <Button title={'PLACE ORDER'} />
    </>
  );
};

export default CartScreen;
