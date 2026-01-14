import { StyleSheet } from "react-native";
import type { themeColors } from "../colors";

const stylesApp = (c: themeColors ) => StyleSheet.create({
    headerBgColor: {
        backgroundColor: c.header,
    },
    mainContainer: {
        flex: 1
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '95%',
        height: '10%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    },
    logoContainer: {
        flexDirection: 'row',
        width: 160,
        height: 45,
        gap: 10,
        /* backgroundColor: 'rgba(28, 206, 222, 0.1)', */
        marginLeft: 5,
        marginTop: 5,
    },
    img: {
        width: '95%',
        height: '95%',
        alignSelf: 'center',
    },
    navIcon: {
        flex: 0.2,
        width: 100,
        height: 100,
    },
    h1: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'GoogleSansCode-Bold',
        color: c.text,
    },
    btnText: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'Mulish-SemiBold',
        color: 'white',
    },
    wrapperCustom: {
        backgroundColor: '#D14346',
        borderRadius: 18,
        padding: 6,
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textCard: {
        width: '95%',
        height: 250,
        alignSelf: 'center',
        /* backgroundColor: 'rgba(222, 167, 28, 0.1)', */
        gap: 10,
    },
    logoText: {
        color: 'white',
        fontFamily: 'Mulish-Bold',
        fontWeight: '700',
        fontSize: 18,
        textAlignVertical: 'center'
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    homeTextTitle: {
        margin: 5,
        color: 'white',
        fontFamily: 'Mulish-Black',
        fontSize: 30,
    },
    homeText: {
        margin: 5,
        color: 'rgba(228, 224, 210, 0.9)',
        fontSize: 18,
        fontFamily: 'Mulish-Regular',
    },
})

export default stylesApp;