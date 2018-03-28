import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import TouchableDebounce from './TouchableDebounce';

export default class SecondScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Second Screen</Text>
        </View>
        <View style={styles.footer}>
          <TouchableDebounce
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.footerText}>◀ Previous</Text>
          </TouchableDebounce>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white"
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeText: {
    fontSize: 40,
    color: "black",
    fontWeight: "700",
    textAlign: "center",
    margin: 10
  },
  footer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
