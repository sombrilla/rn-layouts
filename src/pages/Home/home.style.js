import {StyleSheet} from 'react-native';
import {shadows} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
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
    paddingHorizontal: 20,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 30,
    zIndex: 999,
    ...shadows.globalShadow,
  },
  inputCopy: {
    color: 'grey',
  },
  scrollView: {
    paddingVertical: 100,
  },
});
