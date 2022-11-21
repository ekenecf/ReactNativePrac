// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableHighlight, Button, Alert, Platform, StatusBar } from 'react-native';

// To start a native app with expo, you use; expo init name of project.
export default function App() {
  const handlePress = () => console.log("fired")

  return (
    //SafeAreaView is similar to div
    <SafeAreaView style={styles.container}>
        {/* <StatusBar style="auto" /> */}
{/* numberOfLines is used to set the text props to be only one line. Alos to make the text a link, you can use the onPress */}
      <Text numberOfLines={1} onPress={() => handlePress()}>Welcome to react native! A really really long test in vs code without cutting</Text>
      {/* For network images we use the source={{uri: www.image.com}} without the require and must specify the dimensions ie width and height */}
      {/* <Image source={require("./assets/splash.png")}/> */}
      <TouchableHighlight onPress={() => console.log("Pressed")}>
      <Image
      fadeDuration={1000}
      blurRadius={5}
       source={{
        width:300,
        height:200,
        uri: "https://media.istockphoto.com/id/477569935/photo/opportunity-rise-and-improvement-concept.jpg?s=612x612&w=0&k=20&c=1HDOySdtsJPS5etW-4Mp-XmN2f-I5MdMqldFOfrn_SY="}}/>
      </TouchableHighlight>
      {/* Alert helps us to customize our alert box */}
      <Button title="click me" color="orange" onPress={() => Alert.alert("My title", "My message", [
        {text: "Yes", onPress: () => console.log("Chose Yes")},
        {text: "No"}
      ])}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
