import { StyleSheet } from "react-native";
import colors, { themeColors } from "../colors";

const stylesMain = (c: themeColors) => StyleSheet.create({
  headerBgColor: {
    backgroundColor: c.bg,
  },
  bgScreen:{
    height: '100%',
  },
  childHeaderTitle: {
    justifyContent: 'center',
    alignItems: 'center',
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
    elevation: 10,
  },
  icons: {
    width: 32,
    height: 32,
  },
  btnStyle: {
  },
  title: {
    fontFamily: 'GoogleSansCode-Bold',
    fontSize: 14,
    color: c.text,
  },
  inputBox: {
    width: '95%',
    height: 60,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
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
    width: '80%',
    marginTop: 10,
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
    marginTop: 6,
    alignSelf: 'flex-end',
    fontFamily: 'GoogleSansCode-Bold',
    fontSize: 12,
    color: c.text,
  },
  downloadingText: {
    fontFamily:'GoogleSansCode-Bold',
    color: c.text,
  },
});

export default stylesMain;