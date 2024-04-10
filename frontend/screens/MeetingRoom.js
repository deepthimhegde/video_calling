import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function MeetingRoom() {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.startMeetingContainer}>
            <View style={styles.info}>
                <TextInput 
                    style={styles.textInput}
                    value={name}
                    placeholder='Enter name'
                    placeholderTextColor="#767476"
                    onChangeText={text => setName(text)}
                />
            </View>
            <View style={styles.info}>
            <TextInput 
                    style={styles.textInput}
                    value={roomId}
                    placeholder='Enter Room ID'
                    placeholderTextColor="#767476"
                    onChangeText={roomId => setRoomId(roomId)}
                />
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.startMeetingButton}
                >
                    <Text style={{color: "white", fontWeight: "bold"}}> Start Meeting </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView> 
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1c1c1c',
      padding: 15,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    startMeetingContainer: {

    },
    info: {
        width: "100%",
        backgroundColor: "#373538",
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#484648",
        padding: 12,
        justifyContent: "center"
    },
    textInput: {
        color: "white",
        fontSize: 18,
    },
    startMeetingButton: {
        width: 350,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0470DC",
        height: 50,
        borderRadius: 15,
    }
  });