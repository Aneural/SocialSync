import React from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import type { RootNavigationProp } from '@/app/routes/navigation';

type Props = {
  navigation: RootNavigationProp;
  to: Parameters<RootNavigationProp['replace']>[0];
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const BtnNav = ({navigation, to, style, children} : Props) =>{
    
    return (
        <TouchableOpacity
            onPress={ () => navigation.replace(to)}
            style={style}
            activeOpacity={0.6}
        >
            {children}
        </TouchableOpacity>
    );
}

export default BtnNav;