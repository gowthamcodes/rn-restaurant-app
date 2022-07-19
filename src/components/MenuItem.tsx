import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Colors, Fonts } from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Display } from '../utils';

export interface IMenu {
  code: string;
  sub_code: string;
  title: string;
  subtitle: string;
  price: number;
  qty: number;
}

interface IMenuItemProps {
  item: IMenu;
  handleAdd: (item: IMenu) => void;
  handleRemove: (item: IMenu) => void;
  handleAddToCart?: (item: IMenu) => void;
  showMessage?: boolean;
}

const MenuItem = ({
  item,
  handleAdd,
  handleRemove,
  handleAddToCart,
  showMessage = false,
}: IMenuItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View
          style={{
            height: '100%',
          }}>
          <View style={styles.codeContainer}>
            <Text style={styles.code}>{item.code}</Text>
          </View>
          {item.sub_code && (
            <View style={[styles.codeContainer, { marginTop: 6 }]}>
              <Text style={styles.code}>{item.sub_code}</Text>
            </View>
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {item.subtitle}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          {item.qty > 0 ? (
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleRemove(item)}>
                <Feather name={'minus'} color={Colors.PRIMARY} size={16} />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.qty}</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                disabled={item.qty === 20}
                onPress={() => handleAdd(item)}>
                <Feather
                  name={'plus'}
                  color={item.qty === 20 ? Colors.GREY : Colors.PRIMARY}
                  size={16}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={() => handleAddToCart && handleAddToCart(item)}>
                <Text style={styles.buttonText}>ADD</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`€ ${item.price}`}</Text>
        {showMessage && (
          <TouchableOpacity activeOpacity={0.8}>
            <MaterialCommunityIcons
              name={'message-processing'}
              color={Colors.PRIMARY}
              size={26}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: Colors.WHITE,
    marginVertical: 1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeContainer: {
    padding: 4,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: Colors.PRIMARY,
  },
  code: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: Colors.PRIMARY,
    fontFamily: Fonts.MEDIUM,
  },
  titleContainer: {
    marginLeft: 8,
    width: Display.setWidth(64),
  },
  title: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.MEDIUM,
    color: Colors.PRIMARY,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    fontFamily: Fonts.REGULAR,
    color: Colors.PRIMARY,
    marginTop: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 0.8,
    borderRadius: 6,
    borderColor: Colors.SECONDARY,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  quantity: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.PRIMARY,
    fontFamily: Fonts.MEDIUM,
    paddingHorizontal: 4,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 14,
    fontFamily: Fonts.MEDIUM,
    lineHeight: 14 * 1.4,
    textAlign: 'center',
  },
  priceContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.SECONDARY,
    fontFamily: Fonts.MEDIUM,
  },
});

export default MenuItem;
