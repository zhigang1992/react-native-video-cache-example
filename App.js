import React, {useEffect, useState} from 'react';
import convertToProxyURL from 'react-native-video-cache';
import {Text, SafeAreaView, Dimensions} from 'react-native';
import Video from 'react-native-video';

const App = () => {
  const [url, setURL] = useState();
  useEffect(() => {
    convertToProxyURL(
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    ).then(setURL);
  }, []);
  if (url == null) {
    return null;
  }
  return (
    <SafeAreaView>
      <Text>{url}</Text>
      <Video
        resizeMode="contain"
        source={{uri: url}}
        style={{width: Dimensions.get('window').width, height: 300}}
      />
    </SafeAreaView>
  );
};

export default App;
