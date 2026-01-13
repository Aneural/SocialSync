import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type RootNavigationPropFor<RouteName extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, RouteName>;