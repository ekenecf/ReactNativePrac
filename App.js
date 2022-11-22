// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

// To start a native app with expo, you use; expo init name of project.
export default function App() {
  // const handlePress = () => console.log("fired")
  console.log(useDimensions());
  //useDimensions is used to manipulate the dimensions while useOrientation is used to manipulate the screen orientation
  const { landscape } = useDeviceOrientation();
  console.log(useDeviceOrientation());

  return (
    //SafeAreaView is similar to div
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View
        style={{
          backgroundColor: "#fff",
          // width: "100%",
          // height: landscape ? "100%" : "30%",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            // width: "100%",
            // height: landscape ? "100%" : "30%",
            // flex: 2,
            width: 100,
            height: 100
          }}
        />
        <View
          style={{
            backgroundColor: "gold",
            // width: "100%",
            // height: landscape ? "100%" : "30%",
            // flex: 1,
            width: 100,
            height: 100
          }}
        />
        <View
          style={{
            backgroundColor: "tomato",
            // width: "100%",
            // height: landscape ? "100%" : "30%",
            // flex: 1,
            width: 100,
            height: 100
          }}
        />
      </View>
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
