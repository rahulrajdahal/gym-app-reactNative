import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, sizes} from '../../../assets/themes';

const Greeting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Good Evening,
        <Text style={styles.username}>Aakash</Text>
      </Text>

      <Image
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
        width={48}
        height={48}
        style={styles.userImage}
      />
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: sizes.appWidth(2.5),
    marginTop: sizes.appHeight(5.44),
  },
  greeting: {
    color: colors.black,
    fontSize: sizes.appWidth(1.5),
    lineHeight: sizes.appWidth(2),
    fontWeight: '300',
    maxWidth: sizes.appWidth(10.0625),
  },
  username: {fontWeight: '700'},
  userImage: {
    width: sizes.appWidth(3),
    height: sizes.appWidth(3),
    borderRadius: 100,
  },
});
