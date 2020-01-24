import {StyleSheet} from 'react-native';
import {colors, shadows} from '../../themes';

export default StyleSheet.create({
  container: {},
  title: {
    fontSize: 30,
    color: colors.white,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    paddingTop: 4,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: colors.white,
    ...shadows.globalShadow,
    zIndex: 999,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    backgroundColor: colors.greyBackground,
    borderBottomColor: colors.greyBorder,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  infoBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    borderWidth: 1,
    borderColor: colors.greyBorder,
    borderRadius: 10,
    padding: 10,
  },
  infoLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    backgroundColor: colors.blueGrey,
    borderRadius: 5,
    overflow: 'hidden',
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginBottom: 5,
    color: colors.white,
  },
  infoCopy: {
    color: colors.blueGrey,
    marginTop: 5,
  },
});
