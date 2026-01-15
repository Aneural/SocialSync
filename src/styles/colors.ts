const colors = {
    light: {
        header: '#f5ebe0',
        bg: '#FAF7F2',
        text: '#9CA3AF',
        startScreenText: '#1A1333',
        dwnBtnBorder: '#3D2B80',
        dwnloadBtn: '#90be6d',
        closeBtnStartScreen: '#55554E',
        pasteUrlBtnBorder: 'rgba(26,19,51,0.35)',
        pasteUrlBton: '#7b2cbf',
        inputContainer: '#F2C94C',
        inputContainerShadow: '#242424',
        cardText: '#1A1333',
        strtTitle: '#212529',
        icoStrtBg: 'gray',
        icoStrtBorder: 'gray',
        inputCardShadow: '#7C5CFF',
        cancelBtnStartScreen: '#2d3237ff',
    },
    dark: {
        header: '#212529',
        bg: '#212529',
        text: '#9CA3AF',
        startScreenText: '#75756C',
        dwnBtnBorder: '#3D2B80',
        dwnloadBtn: '#4E33FF',
        closeBtnStartScreen: '#30302cff',
        pasteUrlBtnBorder: 'rgba(26,19,51,0.35)',
        pasteUrlBton: '#07ACED',
        inputContainer: '#1F2421',
        inputContainerShadow: '#242424',
        cardText: '#1A1333',
        strtTitle: 'rgba(255,255,255,0.75)',
        icoStrtBg: '#75756C',
        icoStrtBorder: '#55554E',
        cancelBtnStartScreen: '#2d3237ff',
    }
};

export default colors;
export type theme = keyof typeof colors;
export type themeColors = (typeof colors)[theme];