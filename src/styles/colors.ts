const colors = {
    light: {
        header: '#f5ebe0',
        bg: '#FAF7F2',
        text: '#9CA3AF',
        dwnBtnBorder: '#3D2B80',
        dwnloadBtn: '#90be6d',
        pasteUrlBtnBorder: 'rgba(26,19,51,0.35)',
        pasteUrlBton: '#7b2cbf',
        inputContainer: '#9CA3AF',
        cardText: '#1A1333',
    },
    dark: {
        header: '#212529',
        bg: '#212529',
        text: '#9CA3AF',
        dwnBtnBorder: '#3D2B80',
        dwnloadBtn: '#6D5BD0',
        pasteUrlBtnBorder: 'rgba(26,19,51,0.35)',
        pasteUrlBton: '#618FC3',
        inputContainer: '#F2C94C',
        cardText: '#1A1333',
    }
};

export default colors;
export type theme = keyof typeof colors;
export type themeColors = (typeof colors)[theme];