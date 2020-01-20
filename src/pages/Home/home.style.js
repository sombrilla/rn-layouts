import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.blueGrey,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingCopy: {
    marginBottom: 25,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'grey',
  },
  input: {
    height: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    marginVertical: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  inputCopy: {
    color: 'grey',
  },
  gradient: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
    transform: [{translateY: 100}],
  },
});
