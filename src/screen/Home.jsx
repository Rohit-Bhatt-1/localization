import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const p = require("../language.json");

  const [lang, setLang] = useState("eng");
  useEffect(() => {
    async function a() {
      let temp = await AsyncStorage.getItem("lang");
      console.log("temp", temp);
      console.log(p[temp].show);
      setLang(p[temp]);
    }
    a();
  }, []);

  if (lang === undefined)
    return (
      <View>
        <Text>Wait</Text>
      </View>
    );
  return (
    <View>
      <Text>{lang.show}</Text>
    </View>
  );
};
export default Home;
