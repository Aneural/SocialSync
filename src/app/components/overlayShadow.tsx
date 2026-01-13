import { ReactNode } from 'react';
import { ColorValue, StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
    colorOne?: ColorValue;
    colorTwo?: ColorValue;
}

// Recommended colors 
// colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.9)']}


const OverlayShadow = ({children, style, colorOne = 'rgba(0,0,0,0.2)', colorTwo='rgba(0,0,0,0.9)'} : Props) => (
  
  <LinearGradient
    colors={[colorOne as string, colorTwo as string]}
    start={{x: 0.5, y: 0}}
    end={{x: 0.5, y: 1}}
    style={style}
  >
    {children}
  </LinearGradient>
);

export default OverlayShadow;