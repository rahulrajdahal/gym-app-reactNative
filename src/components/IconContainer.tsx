import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {sizes} from '../../assets/themes';

interface IconContainerProps extends ViewProps {}
const IconContainer = ({children, ...props}: Readonly<IconContainerProps>) => {
  return <View style={[styles.container, props.style]}>{children}</View>;
};

export default IconContainer;

const styles = StyleSheet.create({
  container: {
    padding: sizes.appWidth(1.06),
    borderRadius: sizes.appWidth(0.8125),
    backgroundColor: 'rgba(36, 161, 156, 0.20)',
  },
});
