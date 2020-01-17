import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.greyBorder,
    backgroundColor: colors.blueGrey,
    width: metrics.screen.width - 20,
    height: metrics.screen.width - 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: metrics.horizontal.pagePadding / 2,
    paddingVertical: 15,
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: colors.white,
    fontSize: 20,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
