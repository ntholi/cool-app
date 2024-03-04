import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import UserDetails from './UserDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <UserDetails label="Name" value="Thabo Lebese" />
      <UserDetails label="Phone Number" value="2665987654" />
      <UserDetails label="Gender" value="Male" />
      <UserDetails label="Address" value="Ha C-Point" />
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
