import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import TouchableDebounce from './TouchableDebounce';
import SecondScreen from "./SecondScreen";
import { StackNavigator } from "react-navigation";

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Home Screen</Text>
        </View>
        <View style={styles.footer}>
          <TouchableDebounce
            onPress={() => this.props.navigation.navigate("Second")}
          >
            <Text style={styles.footerText}>Next ▶</Text>
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
    justifyContent: "flex-end"
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Second: {
    screen: SecondScreen
  }
});
