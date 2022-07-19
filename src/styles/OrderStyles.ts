import { StyleSheet } from 'react-native';
import { Display } from '../utils';
import { Colors, Fonts, Images } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: Display.setHeight(24),
    zIndex: 1,
  },
  iconContainer: {
    paddingTop: 20,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  space: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    height: 120,
  },
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.LIGHT,
  },
  card: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    elevation: 2,
  },
  title: {
    color: Colors.PRIMARY,
    fontSize: 18,
    lineHeight: 18 * 1.4,
    fontFamily: Fonts.SEMI_BOLD,
  },
  subtitle: {
    fontFamily: Fonts.LIGHT,
    color: Colors.BLACK,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    marginLeft: 6,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.WHITE,
    fontFamily: Fonts.LIGHT,
    fontSize: 14,
    lineHeight: 14 * 1.4,
  },
  menuTitle: {
    color: Colors.PRIMARY,
    fontSize: 18,
    lineHeight: 18 * 1.4,
    fontFamily: Fonts.SEMI_BOLD,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 48,
  },
  menuButtonContainer: {
    position: 'absolute',
    bottom: 72,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  menuButton: {
    backgroundColor: Colors.SECONDARY,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  menuButtonText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Colors.PRIMARY,
    marginLeft: 8,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default styles;
