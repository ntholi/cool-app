import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import Post from './Post';


export default function App() {


  return (
    <View style={styles.container}>
      <Post text="Hello my name is Thabos" />
      <Post text="This is me in the Cap" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16
  },
});
