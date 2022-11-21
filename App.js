// import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

// To start a native app with expo, you use; expo init name of project.
export default function App() {
  // const handlePress = () => console.log("fired")
  console.log(useDimensions());
  //useDimensions is used to manipulate the dimensions while useOrientation is used to manipulate the screen orientation
  const { landscape} = useDeviceOrientation()
  console.log(useDeviceOrientation());

  return (
    //SafeAreaView is similar to div
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
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
