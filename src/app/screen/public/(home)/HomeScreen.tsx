/* eslint-disable react-native/no-inline-styles */

// core
import { Text, View, useColorScheme, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMemo } from 'react';

// customs
import { RootNavigationProp } from '@/app/routes/navigation';
import colors from '@/styles/colors';
import stylesApp from '@/styles/HomeScreenStyles/styles';
import BtnNav from '@/app/components/BtnNav';
import OverlayShadow from '@/app/components/overlayShadow';

// media
import SycnLogo from '@/assets/sync.svg';
import Bg from '@/assets/bg_home.jpg'

type Props = {
  navigation: RootNavigationProp;
}


const HomeScreen = ({ navigation } : Props) => {
  const scheme = useColorScheme();
  const c = scheme === 'dark' ? colors.dark : colors.light;

  const styles = useMemo(() => stylesApp(c), [c]);



  return (
    <SafeAreaView style={ styles.mainContainer }>
      <ImageBackground
        style={{flex:1}}
        source={Bg}
        blurRadius={26}
        >
          <OverlayShadow style={styles.overlay}>
            <View style={styles.textCard}>
              <View style={ styles.logoContainer }>
                  <SycnLogo width={32} height={32} fill={'white'} style={{alignSelf:'center'}}/>
                  <Text style={styles.logoText}>SocialSync</Text>
              </View>
              <Text style={styles.homeTextTitle}>
                Descarga 
                tu contenido favorito
                <Text style={{color: '#d03436ff'}}> Sin anuncios</Text>
              </Text>
              <Text style={styles.homeText}>
                Rápido, simple y directo.
              </Text>
            </View>
            <View style={ styles.btnContainer }>
              <BtnNav navigation={navigation} to='Start' style={styles.wrapperCustom}>
              <Text style={styles.btnText}>Empezar</Text>
            </BtnNav>
            </View>
          </OverlayShadow> 
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;