import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';

function Home() {
  return (
    <View >
        <Header />
        <SearchBar />
        <MenuButtons />

    </View>
  );
}

export default Home;