/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.testApp}>
          TEST APP{"\n"}
          {"\n"} 😀 😀
          </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  testApp: {
    width: 297,
    color: "#121212",
    fontSize: 30,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginTop: 150,
    alignSelf: "center"
  },
});

export default App;
