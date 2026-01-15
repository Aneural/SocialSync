// core
import React, { useState, useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, useColorScheme, ImageBackground, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootNavigationProp } from '@/app/routes/navigation';

// custom
import HeaderApp from '@/app/components/headerApp';
import colors from '@/styles/colors';
import stylesMain from '@/styles/startScreenStyles/styles';
import Faq from '@/icons/faq.svg';
import OverlayShadow from '@/app/components/overlayShadow';

import { isTtUrl, pasteUrl, getDownloableUrl, downloadFunction, rapidapiKeyToken, downloadTaskRef } from '@/api/api';

// media
import TtLogo from '@/icons/tt_logo_black.svg';
import Dots from '@/icons/dots_vertical.svg';
import darkmodeBG from '@/assets/darkmode_bg.jpg'
import SyncLogo from '@/assets/sync.svg';

type Props = {
  navigation: RootNavigationProp;
};

// Render principal
const StartScreen = ({navigation} : Props) => {
  const [URL, setUrl] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dotCount, setDotCount] = useState(0);

React.useEffect(() => {
  if (!downloading) {
    setDotCount(0);
    return;
  }
  const id = setInterval(() => {
    setDotCount(prev => (prev % 3) + 1);
  }, 400);
  return () => clearInterval(id);
}, [downloading]);
const dot = ''.repeat(dotCount);


  // color mode | styles related
  const scheme = useColorScheme() ?? 'light';
  const c = scheme === 'dark' ? colors.dark : colors.light;

  const logoColor = c ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.75)';
  const iconColor = c ? '#F3CA91' : '#9CA3AF';

  const styles = useMemo(() => stylesMain(c), [c]); 

  return (
    <SafeAreaView style= {[styles.headerBgColor, styles.bgScreen]}>
      <ImageBackground
        style={{flex: 1}}
        source={darkmodeBG}
        blurRadius={2}
        >
        <OverlayShadow style={{flex: 1}} colorOne={'rgba(20, 20, 20, 0.3)'} colorTwo={'rgba(0,0,0,0.75)'}>
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
            placeholderTextColor= {c ? 'rgb(246,216,174,0.4)' : 'gray' }
            autoCapitalize='none'
            autoCorrect={false}
            returnKeyType='done'
            cursorColor="rgb(246,216,174,0.8)"
            selectionColor="#898980"
            style={styles.inputBox}
            editable={downloading ? false:true}
            >
            </TextInput>
          <View style={styles.btnContainer}> 
            <TouchableOpacity
              onPressIn={async () => {
                const clip = await pasteUrl();
                if (clip)
                  setUrl(clip);
              }}
              activeOpacity={0.6}
              style={[styles.btnTemplate, styles.pasteLinkBtn]}>
              <Text style={styles.textBtn}>Pegar URL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPressOut={async () => {
                try {
                  if(!isTtUrl(URL)) {
                    ToastAndroid.show('URL Invalida', ToastAndroid.SHORT);
                    return;
                  }
                  const directUrl = await getDownloableUrl(URL, rapidapiKeyToken);
                  if(directUrl === null) {
                    ToastAndroid.show('El url no es de un video', ToastAndroid.SHORT);
                    return;
                  }
                  setDownloading(true);
                  setProgress(0);
                  const savedPath = await downloadFunction(directUrl, (pct) => {setProgress(pct)});
                  Alert.alert('Listo', `Guardado en ${savedPath}`);
                }catch (e) {
                  console.log(e);
                  Alert.alert('Error', 'No se pudo descargar el video.');
                }finally{
                  setDownloading(false);
                  setProgress(0);
                  setUrl('');
                }
              }}
              activeOpacity={0.6}
              style={[styles.btnTemplate, styles.downloadBtn]}>
              <Text style={styles.textBtn}>Descargar</Text>
            </TouchableOpacity>
          </View>
        </View>
        </OverlayShadow>
        {downloading && (
            <View style={styles.absolute}>
              <View style={[styles.progressWrap]}>
                <Text style={styles.downloadingText} key={dot}>
                  Descargando{dot}
                </Text>
                <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: `${Math.round(progress * 100)}%` }]} />
                </View>
                <View style={styles.okBtnContainer}>
                  <TouchableOpacity
                  style={styles.btnDownload}
                  >
                    <Text style={styles.TextBtnDwnldProgress}>
                      {progress === 1 ? 'Ok' : 'Cancelar'}

                    </Text>
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