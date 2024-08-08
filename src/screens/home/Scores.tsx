import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlagIcon} from '../../../assets/icons';
import {sizes} from '../../../assets/themes';
import {Score} from '../../components';

const scores = [
  {id: 1, title: 'Average', score: 8.0},
  {id: 2, title: 'Goal', score: 8},
  {id: 3, title: 'Total', score: 200},
];

const Scores = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <FlagIcon />
        <Text style={styles.text}>You’re doing great so far:</Text>
      </View>
      <View style={styles.scoresContainer}>
        {scores.map(({id, score, title}) => (
          <Score key={id} score={score} title={title} />
        ))}
      </View>
    </View>
  );
};

export default Scores;

const styles = StyleSheet.create({
  container: {
    gap: sizes.appHeight(1.31),
    marginTop: sizes.appHeight(2.19),
    marginLeft: sizes.appHeight(1.69),
  },
  textContainer: {gap: sizes.appWidth(0.49), flexDirection: 'row'},
  text: {
    fontSize: sizes.appWidth(0.875),
    fontWeight: '500',
    lineHeight: sizes.appWidth(1.125),
    color: '#656565',
  },
  scoresContainer: {
    borderRadius: sizes.appWidth(0.8125),
    backgroundColor: '#f8f8f8',
    justifyContent: 'space-evenly',
    paddingTop: sizes.appHeight(1.5),
    paddingLeft: sizes.appWidth(2.12),
    paddingBottom: sizes.appHeight(2),
    alignItems: 'center',
    flexDirection: 'row',
    width: sizes.appWidth(21.755),
    maxHeight: sizes.appHeight(6.9375),
  },
});
