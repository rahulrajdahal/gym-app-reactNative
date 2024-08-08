import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../assets/themes/colors';
import Greeting from './home/Greeting';
import Reward from './home/Reward';
import Scores from './home/Scores';
import Streak from './home/Streak';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Greeting />

        <Reward />

        <Scores />

        <Streak />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.black,
  },
});
