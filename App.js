// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Button,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

// To start a native app with expo, you use; expo init name of project.
export default function App() {
  const [courseGoal, setcourseGoal] = useState([]);

  const handlePressButton = (enteredText) =>
    setcourseGoal((setCurrentgoal) => [...setCurrentgoal, enteredText]);

  function deleteGoalHandler(id) {
    setcourseGoal((setCurrentgoal) => setCurrentgoal.filter(setCurrentgoal.id !== id));
    console.log("Delete item");
  }
  // console.log(courseGoal);
  // console.log(useDimensions());
  //useDimensions is used to manipulate the dimensions while useOrientation is used to manipulate the screen orientation
  // const { landscape } = useDeviceOrientation();
  // console.log(useDeviceOrientation());

  return (
    //SafeAreaView is similar to div
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View
        style={{
          //alignContent works with flexWrap, if theres no wrap, it wont work
          // flexBasis can map to width or height
          backgroundColor: "#fff",
          // width: "100%",
          // height: landscape ? "100%" : "30%",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          // alignItems: "center",
          flexWrap: "wrap",
          alignContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            // width: "100%",
            // height: landscape ? "100%" : "30%",
            // flex: 2,
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "gold",
            // width: "100%",
            // height: landscape ? "100%" : "30%",
            // flex: 1,
            width: 100,
            height: 100,
            top: 3,
            left: 3,
            position: "absolute",
          }}
        />
        <View
          style={{
            backgroundColor: "tomato",
            // width: "100%",
            // height: landscape ? "100%" : "30%",
            // flex: 1,
            width: 100,
            height: 100,
          }}
        />
      </View>
      <GoalInput pressButton={handlePressButton} />
      {/* <ScrollView>
        <View>
          {courseGoal.map((goal) => (
            <Text key={goal}>{goal}</Text>
          ))}
        </View>
      </ScrollView> */}
      {/* instead of using scrollView to render using .map function you could use FlatList */}
      <FlatList
        data={courseGoal}
        renderItem={(itemData) => {
          return (
            <GoalItem itemData={itemData} onDeleteItem={deleteGoalHandler} />
          );
        }}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
