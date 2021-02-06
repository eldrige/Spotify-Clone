import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import SongListItem from '../components/SongList/index';

const album = {
  id: '11',
  name: 'Good vibes',
  by: 'Spotify',
  numberOfLikes: 38,
  imageUri:
    'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
  songs: [
    {
      id: '1',
      imageUri:
        'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
      title: 'High on You',
      artist: 'Helen',
    },
    {
      id: '2',
      imageUri:
        'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
      title: 'Lorem Ipsum',
      artist: 'Artist 2',
    },
    {
      id: '3',
      imageUri:
        'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
      title: 'Hello from the other side',
      artist: 'Helen',
    },
    {
      id: '4',
      imageUri:
        'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
      title: 'High on You',
      artist: 'Helen',
    },
  ],
};

const AlbumScreen = () => {
  // * will contain the data we passed from the primary component(in this case the album component)
  // ! route
  const route = useRoute();
  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <Text style={{ color: '#fff' }}>Album Screen</Text>
      {/* <SongListItem song={album.songs[0]} /> */}
      <FlatList
        data={album.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AlbumScreen;
