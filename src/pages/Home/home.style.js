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
});
