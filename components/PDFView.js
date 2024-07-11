import View from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf';

const PDFView = ({route}) => {
  const { downloadLink } = route.params

  return (
    <View style={{flex: 1}}>
      <Pdf
      trustAllCerts={false}
        source={{ uri: downloadLink }}
        style={{flex: 1}}
        onError={(error) => {
          console.log(error);
        }}
      />
    </View>
  );
};

export default PDFView