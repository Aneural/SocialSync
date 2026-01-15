import { StyleSheet } from "react-native";
import colors, { themeColors } from "../colors";

const stylesMain = (c: themeColors) => StyleSheet.create({
  headerBgColor: {
    backgroundColor: c.bg,
  },
  bgScreen:{
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  childHeaderTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
  },
  childHeaderOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: 150,
    height: '100%',
  },
  inputContainer: {
    margin: 20,
    width: '90%',
    height: 180,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 18,
    gap: 25,
    backgroundColor: c.inputContainer,
    elevation: 8,
    shadowColor: c.inputContainerShadow,
  },
  icons: {
    width: 32,
    height: 32,
  },
  btnStyle: {
    height: 44,
    backgroundColor: c.icoStrtBg,
    borderColor: c.icoStrtBorder,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 0.7,
    borderRadius: 22,
    padding: 3,
  },
  title: {
    fontFamily: 'GoogleSansCode-Bold',
    fontSize: 16,
    color: c.strtTitle,
  },
  inputBox: {
    width: '95%',
    height: 60,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    color: c.text
  },
  btnContainer: {
    width: '95%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
  },
  btnTemplate: {
    width: '45%',
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pasteLinkBtn: {
    backgroundColor: c.pasteUrlBton,
    borderColor: c.pasteUrlBtnBorder,
  },
  downloadBtn: {
    backgroundColor: c.dwnloadBtn,
    borderColor: c.dwnBtnBorder,
  },
  textBtn: {
    fontFamily: 'GoogleSansCode-Bold',
    fontSize: 14,
    color: c.cardText,
  },
  progressWrap: {
    backgroundColor: c.bg,
    borderRadius: 4,
    padding: 12,
    width: '85%',
    height: '22%',
    minHeight: 180,
    alignContent: 'center',
    justifyContent: 'center',
  },
  progressTrack: {
    height: 25,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: c.text,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#7b2cbf',
  },
  progressText: {
    alignSelf: 'flex-end',
    fontFamily: 'GoogleSansCode-Bold',
    fontSize: 12,
    color: c.startScreenText,
  },
  downloadingText: {
    fontFamily:'GoogleSansCode-Bold',
    color: c.startScreenText,
  },
  absolute: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(27, 27, 28, 0.55)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  cancelBtnContainer: {
    marginTop: 10,
    height: 45,
    alignSelf: 'flex-end',
  },
  cancelBtn: {
    width: '30%',
    height: '100%',
    backgroundColor: c.cancelBtnStartScreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
  },
  btnCancelText: {
    fontFamily: 'Mulish-Black',
    color: c.text,
  },
  btnCerrar: {
    alignSelf: 'flex-end',
    width: 28,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    backgroundColor: c.closeBtnStartScreen,
  },
  btnCerrarText: {
    color: c.text,
    fontWeight: 'bold'
  }
});

export default stylesMain;