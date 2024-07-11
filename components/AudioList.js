import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import { ListItem } from '@rneui/themed';

const AudioList = ({ route }) => {
  const { audios } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = (audioUrl) => {
    console.log("audioUrl:", audioUrl);

    try {
      SoundPlayer.playUrl(audioUrl);
      setIsPlaying(true);
      console.log('Sound played successfully');
    } catch (error) {
      console.log('Playback error:', error);
    }
  }

  const stopSound = () => {
    if (isPlaying) {
      SoundPlayer.stop();
      setIsPlaying(false);
      console.log('Sound stopped');
    }
  };

  return (
    <View>
      {audios.map((audio, index) => (
        <ListItem key={index}>
          <TouchableOpacity onPress={() => playSound(audio.source)}>
            <Text style={{color : 'blue', fontWeight :'bold'}}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => stopSound()}>
            <Text style={{color : 'red', fontWeight :'bold'}}>Stop</Text>
          </TouchableOpacity>
          <Text>Title: {audio.title}</Text>
        </ListItem>
      ))}
    </View>
  );
};

export default AudioList;

