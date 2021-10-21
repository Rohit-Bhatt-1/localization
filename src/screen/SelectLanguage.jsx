import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SelectLanguage = (props) => {
  const nextScreen = async (lang) => {
    await AsyncStorage.setItem("lang", lang);
    console.log(await AsyncStorage.getItem("lang"));
    props.navigation.push("Home");
  };

  return (
    <View style={styles.main}>
      <Text>Select Language</Text>
      <View>
        <Button
          color="black"
          title="English"
          onPress={nextScreen.bind(this, "eng")}
        />
        <Button
          color="black"
          title="Japanse"
          onPress={nextScreen.bind(this, "jap")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default SelectLanguage;
