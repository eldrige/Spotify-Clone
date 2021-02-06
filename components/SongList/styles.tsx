import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    width: 75,
    height: 75,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  artist: {
    color: '#CCC',
    fontSize: 18,
  },
  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 15,
  },
});

export default styles;
