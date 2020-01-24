import {StyleSheet} from 'react-native';
import {colors, shadows} from '../../themes';

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
    paddingTop: 4,
    borderRadius: 20,
    backgroundColor: colors.white,
    ...shadows.globalShadow,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingVertical: 10,
    marginVertical: 20,
    margin: 10,
    color: colors.black,
    paddingHorizontal: 20,
    ...shadows.globalShadow,
  },
});
