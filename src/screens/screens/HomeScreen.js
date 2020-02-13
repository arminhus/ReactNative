import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => {
          // console.log("button pressed");
          props.navigation.navigate("Components");
        }}
        title="Go to components demo"
      />

      <Button
        title="Go to list demo"
        onPress={() => {
          props.navigation.navigate("List");
        }}
      />

      <Button
        title="Go to image screen"
        onPress={() => {
          props.navigation.navigate("Image");
        }}
      />

      <Button
        title="Go to counter screen"
        onPress={() => {
          props.navigation.navigate("Counter");
        }}
      />

      <Button
        title="Go to Color screen"
        onPress={() => {
          props.navigation.navigate("Color");
        }}
      />

      <Button
        title="Go to Square screen"
        onPress={() => {
          props.navigation.navigate("Square");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
