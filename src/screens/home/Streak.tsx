import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GymBoyIllustration} from '../../../assets/illustrations';
import {colors, sizes} from '../../../assets/themes';
import {DayRadio} from '../../components';

const Streak = () => {
  return (
    <View style={styles.container}>
      <GymBoyIllustration />

      <View style={styles.calendarContainer}>
        <View style={styles.streakContainer}>
          <Text style={styles.streak}>10</Text>
          <Text style={styles.text}>Days Streak</Text>
        </View>

        <View style={styles.daysContainer}>
          {['M', 'T', 'W', 'Th', 'F', 'S', 'Su'].map(day => (
            <DayRadio
              key={day}
              day={day}
              active={day === 'M' || day === 'T' || day === 'W'}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Streak;

const styles = StyleSheet.create({
  container: {
    marginBottom: sizes.appHeight(3.77),
    marginTop: sizes.appHeight(2.19),
    gap: sizes.appWidth(0.5),
    alignItems: 'center',
    flexDirection: 'row',
  },
  calendarContainer: {gap: sizes.appHeight(0.81), alignItems: 'center'},
  daysContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.appWidth(0.75),
  },
  streakContainer: {
    backgroundColor: '#24A19C',
    paddingVertical: sizes.appHeight(1.25),
    paddingHorizontal: sizes.appWidth(0.63),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.appWidth(0.59375),
  },
  streak: {
    color: colors.white,
    fontSize: sizes.appWidth(3),
    lineHeight: sizes.appWidth(3),
    textAlign: 'center',
    fontWeight: '100',
  },
  text: {
    color: colors.white,
    fontSize: sizes.appWidth(0.75),
    lineHeight: sizes.appHeight(1.25),
    fontWeight: '500',
  },
});
