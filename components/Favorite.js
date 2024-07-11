import React, { useState } from 'react';
import { Button } from 'react-native';
import Pdf from 'react-native-pdf';
import Tts from 'react-native-tts';

const Favorite = (pdfUrl) => {
  const [page, setPage] = useState(1);

  const onTextPress = (text) => {
    Tts.speak(text);
  };

  const onPageRead = () => {
    const pageText = `Page ${page} of the document`;
    Tts.speak(pageText);
  }
  return (
    <>
      <Pdf
        trustAllCerts={false}
        source={{ uri: 'https://www.africau.edu/images/default/sample.pdf' }}
        onLoadComplete={(numberOfPages, filePath) => {
          setPage(1);
        }}
        onPageChanged={(page, numberOfPages) => {
          setPage(page);
        }}
        onPress={(e) => {
          const { text } = e;
          onTextPress(text);
        }}
        style={{ flex: 1 }}
      />
      <Button title="Read Page" onPress={onPageRead} />
    </>
  );
};

export default Favorite