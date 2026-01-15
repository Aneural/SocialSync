import { useRef } from 'react';
import { ToastAndroid } from 'react-native';
import ReactNativeBlobUtil, { type FetchBlobResponse, type StatefulPromise } from 'react-native-blob-util';
import Clipboard from '@react-native-clipboard/clipboard';
const { fs } = ReactNativeBlobUtil;
const regexTTUrl = /^.*https:\/\/(?:m|www|vm)?\.?tiktok\.com\/((?:.*\b(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+))|\w+)/;




export const downloadTaskRef = useRef<StatefulPromise<FetchBlobResponse> | null>(null);
export const  rapidapiKeyToken = 'cb61098b1bmsh6061a77b0c02809p13f3a7jsn8039441d8fd5';

// Verificar un formato de URL valido para el sitio de TT
export const isTtUrl = (URL: string) => {
  if (regexTTUrl.test(URL.trim()))
    return true;
  else
    return false;
};


// Funcion para el boton de 'Pegar URL'
export const pasteUrl = async () => {
  const clip = await Clipboard.getString();
  
  if(!isTtUrl(clip)){
      ToastAndroid.show("Link Invalido", ToastAndroid.SHORT);
      return;
  }
  return clip;
};


export const getDownloableUrl = async (tturl: string, token: string) => {
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

  const isVideo = data?.is_video===true;
  const directUrl = data?.video?.[0];

  if (!isVideo) return null;

  if (!directUrl)
  {
    throw new Error('No se obtuvo link directo para descargar del servidor');
  }
  else return directUrl;
};


// Funcion para el boton 'Descargar'
export const downloadFunction = async (
  directUrl: string,
  onProgress?: (pct: number) => void,
  taskRef?: React.MutableRefObject<StatefulPromise<FetchBlobResponse> | null>
) => {
  const DownloadPath = fs.dirs.DownloadDir;
  const fileName = `video_${Date.now()}.mp4`;
  const path = `${DownloadPath}/${fileName}`;

  const task = ReactNativeBlobUtil.config({
    fileCache: true,
    path,
    addAndroidDownloads: {
      useDownloadManager: false,
      notification: true,
      path,
      title: fileName,
      description: 'Descargando video...',
      mime: 'video/mp4',
      mediaScannable: true,
    },
  }).fetch('GET', directUrl);

  if (taskRef) taskRef.current = task;

  task.progress({ interval: 200 }, (received, total) => {
    if (total > 0) {
      const pct = received / total; // 0..1
      onProgress?.(pct);
    }
  });

  try {
    const res = await task;
    return res.path();
  } finally {
    if (taskRef) taskRef.current = null;
  }
};
