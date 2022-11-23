import { useState } from "react";
import { TextInput, View, Button } from "react-native";

function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");
  const handlePress = (enteredText) => setEnteredText(enteredText);
  // console.log(enteredText);

  function handlePressButton() {
    props.pressButton(enteredText);
    setEnteredText("");
  }

  return (
    <View>
      <TextInput onChangeText={handlePress} placeholder="your coures meal" value={enteredText} />
      <Button title="Add Meal" onPress={handlePressButton} />
    </View>
  );
}

export default GoalInput;
