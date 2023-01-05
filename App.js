import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import NetInfo from "@react-native-community/netinfo";


export default function App() {

  const [isconnected, setIsconnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsconnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    }
  }, [])
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          // bottom:0,
          height: 50,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <View style={{ Color: "#fff" }}>
          <Text>
            {isconnected ?
              <Text style={{fontSize:20}}>Back Online</Text> :
              <View style={{left:20}}>
                <Image
                  style={{ position: 'absolute', height: 30, width: 32 }}
                  source={{ uri: ("https://cdn5.vectorstock.com/i/1000x1000/63/24/no-wifi-sign-vector-27306324.jpg") }}>
                </Image>

                <Text style={{left:40,fontSize:20}}>No Connection</Text>
              </View>
            }
          </Text>
        </View>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />
      </View>
    </View>
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
