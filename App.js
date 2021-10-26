import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import EvaLocalisation, { setLanguage, getLanguage } from "./Localization";
import AllPath from "./constants/AllPath";

export default function App() {
  const [lang, setLang] = useState(getLanguage());
  useEffect(() => {
    async function getData() {
      const t = await getLanguage();
      console.log("bhatt", t);
      setLang(t);
    }
    getData();
  }, []);

  const pressHandler = async (vaani) => {
    await setLanguage(vaani);
    const t = await getLanguage();
    console.log("rohit", await "description".getLocalisedString());
    setLang(t);
  };

  return (
    <View style={styles.container}>
      {/* <Sasta /> */}
      <Text>{lang.gyaan} jk</Text>
      <Button
        onPress={() => pressHandler("en")}
        title="English"
        color="#841584"
      />
      <Button
        onPress={() => pressHandler("jpn")}
        title="Japanese"
        color="#841342"
      />
      <Text>{lang.description}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
