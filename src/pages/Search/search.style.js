import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  closeButton: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    paddingTop: 4,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    marginVertical: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    color: colors.black,
    paddingHorizontal: 20,
  },
});
