import React from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import {sizes} from '../../assets/themes';

interface ScoreProps extends ViewProps {
  title: string;
  score: string | number;
}
const Score = ({score, title}: Readonly<ScoreProps>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: sizes.appHeight(1.19),
    shadowColor: '#F0EBEB',
    shadowRadius: sizes.appWidth(7.5),
    shadowOffset: {
      height: sizes.appHeight(6.625),
      width: sizes.appWidth(22.1825),
    },
    elevation: sizes.appHeight(5),
  },
  title: {
    color: '#262626',
    fontSize: sizes.appWidth(0.875),
    fontWeight: '300',
    lineHeight: sizes.appWidth(1.125),
  },
  score: {
    color: 'rgba(36, 161, 156, 0.40)',
    fontSize: sizes.appWidth(2.5),
    fontWeight: '700',
    marginTop: -sizes.appHeight(1.125),
    // lineHeight: sizes.appWidth(1.125),
  },
});
