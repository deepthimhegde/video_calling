import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{height: '100%'}}>
        <Home />
      </SafeAreaView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
