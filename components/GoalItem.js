// import React from 'react'
import { View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  //   console.log(props.item);

  return (
    //Instead of onclick in web we use pressable in Native
    <Pressable onPress={props.onDeleteItem}>
      <View style={{ backgroundColor: "red" }}>
        <Text style={{ color: "black" }}>{props.itemData.item}</Text>
      </View>
    </Pressable>
  );
}
