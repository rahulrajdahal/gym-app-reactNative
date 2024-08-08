import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {GiftIcon} from '../../../assets/icons';
import {sizes} from '../../../assets/themes';
import {IconContainer} from '../../components';

const Reward = () => {
  return (
    <View style={styles.container}>
      <View style={styles.giftContainer}>
        <IconContainer>
          <GiftIcon />
        </IconContainer>
        <Text style={styles.text}>You’re 23 hours away from your reward</Text>
      </View>
      <Progress.Bar
        progress={0.3}
        color={'#24A19C'}
        unfilledColor="#E7E7E7"
        borderColor="#E7E7E7"
        width={sizes.appWidth(18.4375)}
        borderRadius={sizes.appWidth(0.59375)}
        height={sizes.appHeight(0.625)}
      />
    </View>
  );
};

export default Reward;

const styles = StyleSheet.create({
  container: {gap: sizes.appHeight(1)},
  giftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.appWidth(0.75),
    marginTop: sizes.appWidth(2.62),
  },
  iconContainer: {
    padding: sizes.appWidth(1.06),
    borderRadius: sizes.appWidth(0.8125),
    backgroundColor: 'rgba(36, 161, 156, 0.20)',
  },
  text: {
    color: '#9a9a9a',
    fontSize: sizes.appWidth(0.875),
    fontWeight: '500',
    lineHeight: sizes.appWidth(1.125),
    maxWidth: sizes.appWidth(11.5),
  },
});
