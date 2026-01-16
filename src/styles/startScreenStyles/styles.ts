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
    borderWidth: 0.3,
    borderRadius: 18,
    gap: 25,
    backgroundColor: c.inputContainer,
    borderColor: c.inputContainerBorder,
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
    color: c.textLogoTitle,
  },
  inputBox: {
    width: '95%',
    height: 60,
    marginTop: 10,
    borderWidth: 1,
    borderColor: c.inputBoxBorder,
    borderRadius: 12,
    color: c.inputBoxText,
    backgroundColor: c.inputBoxBg,
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
    elevation: 8,
  },
  pasteLinkBtn: {
    backgroundColor: c.pasteUrlBtn,
    borderColor: c.pasteUrlBtnBorder,
    elevation: 0,
  },
  downloadBtn: {
    backgroundColor: c.downloadBtn,
    borderColor: c.downloadBtnBorder,
    shadowColor: c.downloadBtnShadow,
  },
  textBtn: {
    fontFamily: 'GoogleSansCode-Bold',
    fontSize: 14,
    color: c.cardText,
  },
  progressWrap: {
    backgroundColor: c.modalContainer,
    borderColor: c.modalContainerBorder,
    borderWidth: 1,
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
    borderColor: c.modalTrackBorder,
    backgroundColor: c.modalTrackBackground,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: c.modalProgressFill,
  },
  progressText: {
    alignSelf: 'flex-end',
    fontFamily: 'GoogleSansCode-Bold',
    fontSize: 12,
    color: c.modalProgressInt,
  },
  downloadingText: {
    fontFamily:'GoogleSansCode-Bold',
    color: c.modalDownloadingText,
  },
  modalContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: c.modalcancelBtnBg,
    borderWidth: 0.4,
    borderColor: c.modalCancelBtnBorder,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
  },
  btnCancelText: {
    fontFamily: 'Mulish-Black',
    color: c.modalCancelText,
  },
  btnCerrar: {
    alignSelf: 'flex-end',
    width: 28,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    backgroundColor: c.modalcloseBtnBg,
  },
  btnCerrarText: {
    color: c.modalCloseBtnText,
    fontWeight: 'bold'
  }
});

export default stylesMain;