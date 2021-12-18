import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View, Button, Alert, Animated, Dimensions } from "react-native";
import MyImage from "./tags/Image";
import MyText from "./tags/Text";
import MyTextInput from "./tags/TextInput";
import { setLanguage, getLanguage } from "./Localization";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function App() {
  const [lang, setLang] = useState(getLanguage());
  const [check, setCheck] = useState(false);
  const [myText, setMyText] = useState('Initial text');
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [gestureName, setGestureName] = useState('Default gesture name');
  useEffect(() => {
    async function getData() {
      const t = await getLanguage();
      setLang(t);
      setCheck(true);
    }
    getData();
  }, []);

  const pressHandler = async (vaani) => {
    await setLanguage(vaani);
    const t = await getLanguage();
    setLang(t);
  };
  if (!check) {
    return (
      <View>
        <Text>Ruko zara, Sabr rakho</Text>
      </View>
    );
  }

  const aler = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

    const onSwipeUp = () => {
      
  }
  
  const onSwipeDown = () => {

  }

  return (
    <View style={styles.out}>
      <View style = {styles.tag}>
        <MyText>This is inside MyText!!</MyText>
        <MyText onPress={aler}>{lang.text}</MyText>
        <MyTextInput placeholder={lang.placeholder} style={styles.inp} />
        <MyImage
          source={require("./constants/Assets/RTL/finger-point.png")}
          style={styles.fingerPoint}
        />
      </View>
      <View style={styles.in}>
        <MyText>{lang.gyaan} jk</MyText>
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
        <MyText>{lang.description}</MyText>
      </View>
      <View style = {styles.swipe}>
        <GestureRecognizer
          onSwipeUp={(state) => onSwipeUp(state)}
          onSwipeDown={(state) => onSwipeDown(state)}
          config={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          }}
          style={{
            flex: 1,
            backgroundColor: backgroundColor
          }}
        >
        <Text>{myText}</Text>
        <Text>onSwipe callback received gesture: {gestureName}</Text>
      </GestureRecognizer>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  out: {
    margin: 20,
    flex: 1,
  },
  in: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inp: {
    borderTopWidth: 2,
    borderLeftWidth: 1,
  },
  fingerPoint: {
    width: 50,
    height: 50,
  },
  tag: {
    flex:1,
  },
  swipe: {
    flex :1,
    height: Dimensions.get('window').height,
    elevation: 10,
  }
});

