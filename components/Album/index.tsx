import { useNavigation } from '@react-navigation/native';
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
  // this will give us reference to our navigation
  const navigation = useNavigation();
  const handlePress = () => {
    // * the second option is the payload
    navigation.navigate('AlbumScreen', {
      id: props.album.id,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Album;
