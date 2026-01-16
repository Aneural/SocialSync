const colors = {
    light: {
        // Home screen
        header: '#f5ebe0',
        bg: '#FAF7F2',
        text: '#9CA3AF',

        // Start screen
            // Top side
            textLogoTitle: '#2A2450',
            startScreenText: '#1A1333',
            icoStrtBg: 'rgba(91, 75, 255, 0.10)',
            icoStrtBorder: 'rgba(230, 193, 122, 0.45)',    

            // Input Container
            inputContainer: '#FFFFFF',
            inputContainerBorder: '#DED7FF',
            inputContainerShadow: 'rgba(30, 10, 60, 0.12)',
            inputBoxText: '#1E1B2E',
            inputBoxBorder: '#CFC7FF',
            inputBoxBg: '#F4F2FF',
            pasteUrlBtn: '#14B8FF',
            pasteUrlBtnText: '#2A2450',
            pasteUrlBtnBorder: 'rgba(26,19,51,0.35)',
            downloadBtn: '#5B4BFF',
            downloadBtnText: '#FFFFFF',
            downloadBtnBorder: '#3D2B80',
            downloadBtnShadow: 'rgba(91, 75, 255, 0.35)',

            // Popup modal
            modalContainer: '#FFFFFF',
            modalContainerBorder: '#E4DFFF',
            modalDownloadingText: '#26233A',
            modalProgressInt: 'rgba(38, 35, 58, 0.60)',
            modalCloseBtnText: 'rgba(38, 35, 58, 0.55)',
            modalcloseBtnBg: 'rgba(91, 75, 255, 0.08)',
            modalTrackBorder: '#D7D0FF',
            modalTrackBackground: '#d0c32fff',
            cardText: '#1A1333',
            modalCancelText: '#26233A',
            modalcancelBtnBg: '#F4F2FF',
            modalCancelBtnBorder: '#D7D0FF',
            modalProgressFill: '#5B4BFF',
    },
    dark: {
        // Home screen
        header: '#212529',
        bg: '#212529',
        text: '#9CA3AF',

        // Start screen
            // Top side
            textLogoTitle: '#E9ECF2',
            startScreenText: '#75756C',
            icoStrtBorder: 'rgba(230,193,122,0.40)',
            icoStrtBg: 'rgba(230,193,122,0.12)',

            // Input Container
            inputContainer: 'rgba(22, 26, 30, 0.72)',
            inputContainerBorder: 'rgba(255,255,255,0.08)',
            inputContainerShadow: 'rgba(0,0,0,0.55)',
            inputBoxText: '#D3D7E0',
            inputBoxBorder: 'rgba(255,255,255,0.10)',
            inputBoxBg: 'rgba(255,255,255,0.06)',
            pasteUrlBtn: '#14B8FF',
            pasteUrlBtnText: '#061B24',
            pasteUrlBtnBorder: 'rgba(26,19,51,0.35)',
            downloadBtn: '#5B4BFF',
            downloadBtnText: '#0B0D10',
            downloadBtnBorder: '#3D2B80',
            downloadBtnShadow: 'rgba(91,75,255,0.40)',
            
            // Popup modal
            modalContainer: 'rgba(18, 20, 24, 0.96)',
            modalContainerBorder: 'rgba(255, 255, 255, 0.08)',
            modalDownloadingText: '#E7EAF2',
            modalProgressInt: 'rgba(231, 234, 242, 0.55)',
            modalCloseBtnText: 'rgba(231, 234, 242, 0.50)',
            modalTrackBorder: 'rgba(255, 255, 255, 0.12)',
            modalTrackBackground: 'rgba(255,255,255,0.06)',
            cardText: '#1A1333',
            modalcloseBtnBg: 'rgba(255,255,255,0.06)',
            modalCancelText: '#E7EAF2',
            modalcancelBtnBg: 'rgba(255,255,255,0.07)',
            modalCancelBtnBorder: 'rgba(255,255,255,0.10)',
            modalProgressFill: 'rgba(91, 75, 255, 0.75)',
    }
};

export default colors;
export type theme = keyof typeof colors;
export type themeColors = (typeof colors)[theme];