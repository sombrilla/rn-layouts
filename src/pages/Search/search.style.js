import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderRadius: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    margin: 20,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    color: colors.black,
    paddingHorizontal: 20,
  },
});
