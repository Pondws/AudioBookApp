import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Pdf from 'react-native-pdf';

export default function Mybook() {
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf]
      })
      console.log(doc.uri)
    } catch(err) {
      if(DocumentPicker.isCancel(err)) 
        console.log("User cancelled the upload", err);
      else 
        console.log(err)
    }
  }
  
    return (
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={selectDoc}>
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor: '#55E775',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
                color: '#fff',
              }}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}