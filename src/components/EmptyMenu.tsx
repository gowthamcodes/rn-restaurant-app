import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Colors, Fonts, Images } from '../constants';

const EmptyMenu = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Images.empty}
        resizeMode={'contain'}
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Your cart is empty</Text>
        <Text style={styles.subtitle}>
          Looks like you have not added anything to your cart
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: Colors.WHITE,
  },
  wrapper: {
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 36,
  },
  title: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: Colors.PRIMARY,
    fontFamily: Fonts.MEDIUM,
    paddingVertical: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Colors.GREY,
    fontFamily: Fonts.REGULAR,
    textAlign: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default EmptyMenu;
