import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewProps} from 'react-native';
import {CircleFilledIcon, CircleIcon} from '../../assets/icons';
import {sizes} from '../../assets/themes';

interface DayRadioProps extends ViewProps {
  day: string;
  active?: boolean;
}
const DayRadio = ({day, active = false}: Readonly<DayRadioProps>) => {
  const [isActive, setIsActive] = useState(active);

  return (
    <TouchableOpacity
      onPress={() => setIsActive(prev => !prev)}
      style={styles.container}>
      <Text>{day}</Text>
      {isActive ? <CircleFilledIcon /> : <CircleIcon />}
    </TouchableOpacity>
  );
};

export default DayRadio;

const styles = StyleSheet.create({container: {gap: sizes.appHeight(0.37)}});
