import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export type AlbumProps = {
  album: {
    id: string;
    imageUri: string;
    artistsHeadline: string;
  };
};

const Album = (props: AlbumProps) => {
  const handlePress = () => {
    console.warn(`Album was ${props.album.artistsHeadline} pressed`);
  };

  return (
    <TouchableWithoutFeedback onPress={() => handlePress()}>
      <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Album;
