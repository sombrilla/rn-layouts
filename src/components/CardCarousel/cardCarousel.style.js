import {StyleSheet} from 'react-native';
import {colors, metrics, shadows} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: colors.greyBorder,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.blueGrey,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  carousel: {
    marginLeft: 10,
    paddingVertical: 10,
  },
  slide: {
    borderRadius: 10,
    backgroundColor: colors.blueGrey,
    marginRight: 20,
    ...shadows.globalShadow,
  },
  slideContent: {
    overflow: 'hidden',
    borderRadius: 10,
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
  slideTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
