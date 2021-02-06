import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  img: {
    width: 220,
    height: 220,
  },
  creator: {
    color: '#CCC',
    fontSize: 18,
  },
  likes: {
    color: '#CCC',
    marginLeft: 10,
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  creatorContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  buttonText: {
    color: '#CCC',
    fontWeight: 'bold',
    fontSize: 22,
  },
  button: {
    backgroundColor: '#1CD050',
    height: 40,
    width: 120,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default styles;
