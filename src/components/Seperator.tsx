import React from 'react';
import { View } from 'react-native';

interface ISeperatorProps {
  height: number;
  width: number;
}

const Seperator = ({ height, width, ...extraProps }: ISeperatorProps) => (
  <View style={{ height, width, ...extraProps }} />
);

Seperator.defaultProps = {
  height: 0,
  width: 0,
};

export default Seperator;
