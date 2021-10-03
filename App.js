import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Image,  SafeAreaView } from 'react-native';
import Gallery from './components/Gallery'
// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


export default function App() {
  console.log('App executed');

  const [count, setCount] = useState(0);

  console.log(`you clicked ${count} times`);
  // let x;
  // x.toString();

  return (
    <Gallery></Gallery>
    // <SafeAreaView style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   {/* <TouchableWithoutFeedback onPress={() => console.log('img pressed')}> */}
    //   {/* <TouchableWithoutFeedback onPress={() => {this.state.clicked ? <Gallery /> : null}}> */}
    //   <TouchableWithoutFeedback onPress={() => {() => setCount(count + 1)}}>
    //   <Image source={{
    //     width: 200,
    //     height: 300,
    //     uri: "https://picsum.photos/200/300" }}/>
    //   </TouchableWithoutFeedback>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
