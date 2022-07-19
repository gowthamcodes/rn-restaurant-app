import { StyleSheet } from 'react-native';
import { Display } from '../utils';
import { Colors, Fonts } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.WHITE,
    fontFamily: Fonts.MEDIUM,
    marginLeft: 14,
  },
  background: {
    backgroundColor: Colors.PRIMARY,
    width: '100%',
    height: Display.setHeight(30),
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyle: {
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 1,
  },
  totalCost: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: Colors.SECONDARY,
    fontFamily: Fonts.MEDIUM,
  },
  price: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    color: Colors.PRIMARY,
    fontFamily: Fonts.MEDIUM,
    paddingVertical: 4,
  },
  reviewOrder: {
    paddingHorizontal: 16,
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: Colors.PRIMARY,
    paddingVertical: 12,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  showMoreText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Colors.PRIMARY,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  showMoreContainer: {
    paddingVertical: 6,
    paddingHorizontal: 2,
  },
  deliveryOptions: {
    paddingHorizontal: 16,
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: Colors.PRIMARY,
    paddingVertical: 12,
  },
  manageCards: {
    paddingHorizontal: 16,
    fontFamily: Fonts.MEDIUM,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: Colors.PRIMARY,
    flex: 1,
  },
  deliveryOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  deliveryType: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  option: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    fontFamily: Fonts.REGULAR,
    color: Colors.PRIMARY,
    paddingHorizontal: 10,
  },
  radioButton: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderColor: Colors.GREY,
    borderWidth: 2,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radio: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: Colors.GREY,
    borderWidth: 0.5,
    backgroundColor: Colors.GREY,
  },
  activeRadioButton: {
    borderColor: Colors.SECONDARY,
  },
  activeRadio: {
    borderColor: Colors.SECONDARY,
    backgroundColor: Colors.SECONDARY,
  },
  deliveryImage: {
    width: 30,
    height: 30,
  },
});

export default styles;
