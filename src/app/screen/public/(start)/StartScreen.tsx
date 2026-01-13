import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, useColorScheme, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootNavigationProp } from '@/app/routes/navigation';
import HeaderApp from '@/app/components/headerApp';
import Clipboard from '@react-native-clipboard/clipboard';
import ReactNativeBlobUtil from 'react-native-blob-util';
import colors from '@/styles/colors';
import stylesMain from '@/styles/startScreenStyles/styles';
import Faq from '@/icons/faq.svg';
import TtLogo from '@/icons/tt_logo_black.svg';
import Dots from '@/icons/dots_vertical.svg';
import darkmodeBG from '@/assets/darkmode_bg.jpg'
import OverlayShadow from '@/app/components/overlayShadow';
const { fs } = ReactNativeBlobUtil;
const regexTTUrl = /^.*https:\/\/(?:m|www|vm)?\.?tiktok\.com\/((?:.*\b(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+))|\w+)/;
const  rapidapiKeyToken = 'cb61098b1bmsh6061a77b0c02809p13f3a7jsn8039441d8fd5';

type Props = {
  navigation: RootNavigationProp;
};


// Verificar un formato de URL valido para el sitio de TT
const isTtUrl = (URL: string) => {
  if (regexTTUrl.test(URL.trim()))
    return true;
  else
    return false;
};


// Funcion para el boton de 'Pegar URL'
const pasteUrl = async () => {
  const clip = await Clipboard.getString();
  
  if(!isTtUrl(clip)){
      Alert.alert("Url Invalida");
      return;
  }
  return clip;
};

const getDownloableUrl = async (tturl: string, token: string) => {
  const ApiURL = 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/rich_response/index';

  const askUrl = await fetch(`${ApiURL}?url=${encodeURIComponent(tturl)}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': token,
		  'x-rapidapi-host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
    },
  });

  if(!askUrl.ok) {
    const text = await askUrl.text().catch(() => '');
    throw new Error(`API error ${askUrl.status}: ${text}`);
  }

  const data = await askUrl.json();

  const directUrl = data?.video?.[0];

  if (!directUrl)
  {
    throw new Error('No se obtuvo link directo para descargar del servidor');
  }
  
  return directUrl;
}

// Funcion para el boton 'Descargar'
const downloadFunction = async (
  directUrl: string,
  onProgress?: (pct: number) => void
) => {
  const DownloadPath = fs.dirs.DownloadDir;
  const fileName = `video_${Date.now()}.mp4`;
  const path = `${DownloadPath}/${fileName}`;

  const task = ReactNativeBlobUtil.config({
    fileCache: true,
    path,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path,
      title: fileName,
      description: 'Descargando video...',
      mime: 'video/mp4',
      mediaScannable: true,
    },
  }).fetch('GET', directUrl);

  task.progress({ interval: 200 }, (received, total) => {
    if (total > 0) {
      const pct = received / total; // 0..1
      onProgress?.(pct);
    }
  });

  const res = await task;
  return res.path();
};

// Render principal
const StartScreen = ({navigation} : Props) => {
  const [URL, setUrl] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  // color mode | styles related
  const scheme = useColorScheme() ?? 'light';
  const c = scheme === 'dark' ? colors.dark : colors.light;
  const iconColor = scheme === 'dark' ? 'rgba(255,255,255,0.75)' : '#9CA3AF';

  const styles = useMemo(() => stylesMain(c), [c]); 

  return (
    <SafeAreaView style= {[styles.headerBgColor, styles.bgScreen]}>
      <ImageBackground
        style={{flex: 1}}
        source={darkmodeBG}
        blurRadius={2}
        >
        <OverlayShadow style={{flex: 1}} colorOne={'rgba(0,0,0,0.1)'} colorTwo={'rgba(0,0,0,0.75)'}>
        <HeaderApp>
          <View style={styles.childHeaderTitle}> 
            <Text style={styles.title}>Descargar videos</Text>
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
            placeholderTextColor= {c ? '#1A1333' : 'gray' }
            autoCapitalize='none'
            autoCorrect={false}
            returnKeyType='done'
            cursorColor="#7b2cbf"
            selectionColor="#e0aaff"
            style={styles.inputBox}
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
                    Alert.alert('URL Invalida');
                    return;
                  }

                  setDownloading(true);
                  setProgress(0);
                  const directUrl = await getDownloableUrl(URL, rapidapiKeyToken);
                  const savedPath = await downloadFunction(directUrl, (pct) => {setProgress(pct)});
                  Alert.alert('Listo', `Guardado en ${savedPath}`);
                }catch (e) {
                  console.log(e);
                  Alert.alert('Error', 'No se pudo descargar el video.');
                }finally{
                  setDownloading(false);
                  setProgress(0);
                }
              }}
              activeOpacity={0.6}
              style={[styles.btnTemplate, styles.downloadBtn]}>
              <Text style={styles.textBtn}>Descargar</Text>
            </TouchableOpacity>
          </View>
          {downloading && (
            <View style={styles.progressWrap}>
              <Text style={styles.downloadingText}>
                Descargando...
              </Text>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${Math.round(progress * 100)}%` }]} />
              </View>
              <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
            </View>
          )}
        </View>
        </OverlayShadow>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default StartScreen