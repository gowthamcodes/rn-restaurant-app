import React, { ReactNode } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Fonts } from '../constants';

interface IButtonProps {
  title: string;
  icon?: () => ReactNode;
  onPress?: () => void;
}

const Button = ({ title, icon, onPress }: IButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}>
        <View style={styles.wrapper}>
          {icon && icon()}
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: Colors.WHITE,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    marginLeft: 8,
    fontFamily: Fonts.MEDIUM,
  },
});

export default Button;
