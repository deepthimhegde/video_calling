import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fontiso from 'react-native-vector-icons/Fontisto';

function SearchBar() {
  return (
    <View style={styles.container}>
        <Fontiso name="search" size={20} color={"#858585"} />
        <Text style={styles.textSearchBar}> Search </Text>
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        flexDirection: "row",
        paddingHorizontal: 20,
        height: 40,
        alignItems: "center",
        borderRadius: 10,
    },
    textSearchBar: {
        color: "#858585",
        paddingLeft: 10,
        fontSize: 20,
    }
})