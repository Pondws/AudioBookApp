import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { ListItem } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';

const Home = (props) => {
  const [Books, setBooks] = useState([]);
  const [Loading, setLoading] = useState(true);

  const data = require('./json/result.json');

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=react&filter=free-ebooks')
      .then((response) => response.json())
      .then((json) => {
        setBooks(json.items);
        setLoading(false);
      });
  }, []);

  if (Loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="green" />
      </View>
    )
  }
  else {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Recommended</Text>
          </View>
          <ScrollView
            horizontal={true}
            style={styles.scrollView}>
            {data.slice(0, 5).map((item) => (
              <View
                key={item.Boxid}
                containerStyle={{ borderRadius: 20 }}
                style={{ marginRight: 20, }}
              >
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Details', {
                    title: item.title,
                    author: item.author,
                    cover: item.cover,
                    description: item.description,
                    audios: item.audios
                  })}>
                  <Image style={{ width: 140, height: 210, borderRadius: 20 }} source={{ uri: item.cover }} />
            
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Audio Books</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            {data.slice(10, 15).map((item) => (
              <ListItem
                key={item.title}
                containerStyle={{ borderRadius: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5, flexDirection: 'row', alignItems: 'center', borderRadius: 20 }}
                style={{ marginBottom: 15 }}
                onPress={() => props.navigation.navigate('Details', {
                  title: item.title,
                  author: item.author,
                  cover: item.cover,
                  description: item.description,
                  audios: item.audios
                })}
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
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 15,
  },
  text: {
    fontSize: 42,
  },
});

export default Home