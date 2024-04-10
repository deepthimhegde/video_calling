import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from '../components/Header'
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{height: '100%'}}>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation}/>
      </SafeAreaView> 
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#1c1c1c',
      padding: 15,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });