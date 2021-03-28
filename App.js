/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App=()=>{
  return(
    <ScrollView>
      <Text style={{
        fontWeight: 'bold',
        fontSize:42,
        color:"red",
      }}>Hey Whats up!</Text>
      <View>
        <Text style={{
          fontWeight: 'bold',
          fontSize:42,
          color:"blue"
        }}>How are you now days</Text>
      </View>
      <Image source={{uri:"https://64.media.tumblr.com/071c65bcc34bef312019ad6d83928395/1cdd2eeac9170f30-80/s1280x1920/08f3a72d5c25da23a9437fab39d3eed537c889a5.jpg"}}
      style={{ width: 300, height: 300,paddingHorizontal:30 }}>
      </Image>
      <TextInput style={{
          height: 60,
          borderColor: 'purple',
          borderWidth: 5,
          color:"green",
          
      }} 
      defaultValue="Hand Over All Your Cash ">
      </TextInput>

    </ScrollView>
  );
};

export default App;
