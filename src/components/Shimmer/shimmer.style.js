import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

export const loader = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  shimmer: {
    width: '100%',
  },
});
