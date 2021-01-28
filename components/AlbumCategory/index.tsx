import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { AlbumType } from '../../types';
// import Album from '../Album';
import Album from '../Album/index';

import styles from './styles';

export type AlbumCategoryProps = {
  title: string;
  albums: [AlbumType];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        // data to be rendered
        data={props.albums}
        // renderitem, returns how each item should be rendered
        renderItem={({ item }) => <Album album={item} />}
        // ! the key used in uniquely identifying
        keyExtractor={(item) => item.id}
        // defines the flatlist as horizontal
        horizontal={true}
        // ? makes scroll indicator disappear
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AlbumCategory;
