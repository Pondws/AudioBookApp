import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from 'react-native'
import React from 'react'

const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=react&filter=free-ebooks';

const PDFBook = ({ navigation, route }) => {
  const { title, authors, thumbnail, description } = route.params;
  const [downloadLink, setDownloadLink] = React.useState(null);

  React.useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const items = data.items.find(items => items.accessInfo.pdf && items.saleInfo.isEbook);
        if (items) {
          setDownloadLink(items.accessInfo.pdf.downloadLink);
        }
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Image style={{ width: 174, height: 250, borderRadius: 20, alignSelf: 'center', marginTop: 20 }}
          source={{ uri: thumbnail }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>{title}</Text>
        <Text style={{ fontSize: 17 }}>By : {authors}</Text>
        <Text>{description}</Text>
        {downloadLink ? (
          <View style={{ alignItems: 'center', paddingTop: 160 }}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PDFView', { downloadLink })}>
              <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Read</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={{ marginTop: 20 }}>No free PDF ebooks found.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: StatusBar.currentHeight,
  },
  text: {
    fontSize: 30,
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: '#55E775',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,

  },
  like: {
    paddingTop: 5
  }
});
export default PDFBook