import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';

import { View } from '../components/Themed';

import albumCategories from '../data/albumCategories';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
