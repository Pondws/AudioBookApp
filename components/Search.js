import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { ListItem } from '@rneui/themed';

const Search = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    const jsonData = require('./json/result.json');
    setMasterData(jsonData);
    setFilteredData(jsonData);
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          value={search}
          placeholder="Search Here"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
        />
        <ScrollView>
          <View style={{paddingTop : 10}}/>
          {filteredData.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              subtitle={item.author}
              leftAvatar={{ source: { uri: item.cover } }}
              bottomDivider
              onPress={() => props.navigation.navigate('Details', {
                title: item.title,
                  author: item.author,
                  cover: item.cover,
                  description: item.description,
                  audios: item.audios
              })}
              style={{
              marginBottom: 15 }}
              containerStyle={{  borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5, borderRadius: 20 }} 
            >
              <Image style={{ height: 125, width: 125, borderRadius: 20 }} source={{ uri: item.cover }} />
                <ListItem.Content >
                  <ListItem.Title style={{ fontWeight: 'bold' }}>{item.title}</ListItem.Title>
                  <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
                  <ListItem.Subtitle>{item.Runtime}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#55E775',
    padding : 5
  },
  itemStyle: {
    padding: 10
  },
  textInputStyle: {
    // height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    // borderColor: '#009688',
    backgroundColor: 'white',
    borderRadius : 15,
  }
});


export default Search;