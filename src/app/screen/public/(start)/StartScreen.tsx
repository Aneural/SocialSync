// core
import React, { useState, useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, useColorScheme, ImageBackground, ToastAndroid, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootNavigationProp } from '@/app/routes/navigation';


// custom
import HeaderApp from '@/app/components/headerApp';
import colors from '@/styles/colors';
import stylesMain from '@/styles/startScreenStyles/styles';
import Faq from '@/icons/faq.svg';
import OverlayShadow from '@/app/components/overlayShadow';
import { pasteUrl, rapidapiKeyToken, getDownloableUrl, downloadFunction } from '@/api/api';


// media
import TtLogo from '@/icons/tt_logo_black.svg';
import Dots from '@/icons/dots_vertical.svg';
import darkmodeBG from '@/assets/darkmode_bg.jpg';
import lightmodeBG from '@/assets/ligthmode_bg.png'
import SyncLogo from '@/assets/sync.svg';
import safePress from '@/enviroments/safePress';


type Props = {
  navigation: RootNavigationProp;
};



// Render principal
const StartScreen = ({navigation} : Props) => {
  const [URL, setUrl] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dotCount, setDotCount] = useState(0);
  const [showCard, setShowCard] = useState(false);

React.useEffect(() => {
  if (!downloading) {
    setDotCount(0);
    return;
  }
  const id = setInterval(() => {
    setDotCount(prev => (prev % 4) + 1);
  }, 600);
  return () => clearInterval(id);
},[downloading]);


let dot = '.'.repeat(dotCount);
if (dotCount === 4) {
  dot.replace(/./g, '')
  setDotCount(0);
};


  const toggleDownoadTab = () => {
    setShowCard(showCard);
  }

  // color mode | styles related
  const scheme = useColorScheme() ?? 'light';
  const isDark = scheme === 'dark';
  const colorMode = isDark ? colors.dark : colors.light;
  const placeHolderTextInput = isDark ? 'rgba(233,236,242,0.35)' : 'rgba(25, 26, 26, 0.35)';
  const selectionColorTextInput = colorMode ? '#2e6cd7ff' : 'rgba(30, 27, 46, 0.45)';
  const cursorColorTextInput = colorMode ? '#000000ef' : 'rgb(246,216,174,0.8)';
  const logoColor = isDark ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.75)';
  const iconColor = isDark ? '#E6C17A' : '#E6C17A';
  const colorOverlay = isDark ? 'rgba(20, 20, 20, 0.5)' : 'rgba(20, 20, 20, 0.5)';
  const bg_mode = isDark ? darkmodeBG : lightmodeBG;

  const styles = useMemo(() => stylesMain(colorMode), [colorMode]); 

  const pasteLink = async () => {
    const clip = await pasteUrl();
    if (clip)
      setUrl(clip);
  }

  const downloadAction =  async () => {
    if(downloading) return;

    if(URL === '') {
        ToastAndroid.show('Ingrese un link', ToastAndroid.SHORT);
        return;
    }
    setDownloading(true);
    setShowCard(true);
    setProgress(0);
    try {  
      const directUrl = await getDownloableUrl(URL, rapidapiKeyToken);
      if(!directUrl) {
        ToastAndroid.show('El url no es de un video', ToastAndroid.SHORT);
        return;
      }
      const savedPath = await downloadFunction(directUrl, (pct) => {setProgress(pct)});
      ToastAndroid.show('Descarga completada!', ToastAndroid.SHORT);
      setUrl('');
    }catch (e) {
      console.log(e);
      ToastAndroid.show('No se pudo descargar', ToastAndroid.SHORT);
      setDownloading(false);
    }finally{
      setDownloading(false);
      setProgress(0);
      setShowCard(false);
    }
  };

  const paste = safePress(pasteLink, 1200)
  const securePress = safePress(downloadAction, 1200)

  return (
    <SafeAreaView style= {[styles.headerBgColor, styles.bgScreen]}>
      <ImageBackground
        key={scheme}
        style={{flex: 1}}
        source={bg_mode}
        blurRadius={2}
        >
        <OverlayShadow style={{flex: 1}} colorOne={colorOverlay} colorTwo={'rgba(0,0,0,0.2)'}>
        <HeaderApp>
          <View style={styles.childHeaderTitle}> 
            <SyncLogo width={38} height={38} fill={logoColor} 
              style={{alignSelf:'center'}}/>
            <Text style={styles.title}>SocialSync</Text>
          </View>
          <View style={styles.childHeaderOptions}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Faq')}
              style={styles.btnStyle}>
              <Faq width={32} height={32} fill={iconColor} />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.replace('Home')}
              style={styles.btnStyle}>
              <TtLogo width={32} height={32} color={iconColor} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnStyle}>
              <Dots width={32} height={32} color={iconColor} />
            </TouchableOpacity>
          </View>
        </HeaderApp>
        <View style={styles.inputContainer}>
          <TextInput 
            value={URL}
            onChangeText={(URL) => setUrl(URL)}
            placeholder='Ingresa una URL' 
            placeholderTextColor= {placeHolderTextInput}
            cursorColor={cursorColorTextInput}
            selectionColor={selectionColorTextInput}
            style={styles.inputBox}
            autoCapitalize='none'
            autoCorrect={false}
            returnKeyType='done'
            editable={downloading ? false:true}
            >
            </TextInput>
          <View style={styles.btnContainer}> 
            <TouchableOpacity
              onPressIn={paste}
              activeOpacity={0.6}
              style={[styles.btnTemplate, styles.pasteLinkBtn]}>
              <Text style={styles.textBtn}>Pegar URL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPressOut={securePress}
              activeOpacity={0.6}
              style={[styles.btnTemplate, styles.downloadBtn]}>
              <Text style={styles.textBtn}>Descargar</Text>
            </TouchableOpacity>
          </View>
        </View>
        </OverlayShadow>
        {downloading && showCard && (
            <View style={styles.modalContainer}>
              <View style={[styles.progressWrap]}>
                <TouchableOpacity
                  onPressOut={toggleDownoadTab}
                  style={styles.btnCerrar}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                  >
                    <Text style={styles.btnCerrarText}> X </Text>
                  </TouchableOpacity>
                <Text style={styles.downloadingText} key={dot}>
                  Descargando{dot}
                </Text>
                <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: `${Math.round(progress * 100)}%` }]} />
                </View>
                <View style={styles.cancelBtnContainer}>
                  <TouchableOpacity
                  style={styles.cancelBtn}
                  onPressOut={toggleDownoadTab}
                  >
                    <Text style={styles.btnCancelText}> Cancelar </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
      </ImageBackground>
    </SafeAreaView>
  )
}

export default StartScreen