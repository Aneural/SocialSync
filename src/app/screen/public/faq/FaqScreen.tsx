import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SlideOneScreen from './SlideOneScreen';
import SlideTwoScreen from './SlideTwoScreen';
import SlideThreeScreen from './SlideThreeScreen';

const { width } = Dimensions.get('window');

type Slider = {
  key: string;
  render: () => React.ReactElement;
  subtitle?: string;
};

const SLIDES: Slider[] = [
  { key: '1', render: () => <SlideOneScreen/> },
  { key: '2', render: () => <SlideTwoScreen/> },
  { key: '3', render: () => <SlideThreeScreen/> },
];

const FaqScreen = () => {
  const [index, setIndex] = useState(0);
  const listRef = useRef<FlatList<Slider>>(null);

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(newIndex);
  };

  const dots = useMemo(() => SLIDES.map((_, i) => i), []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={listRef}
        data={SLIDES}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumEnd}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            {item.render()}
          </View>
        )}
      />
      <View style={styles.dots}>
        {dots.map((i) => (
          <View
            key={i}
            style={[styles.dot, i === index && styles.dotActive]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  slide: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  title: { fontSize: 28,
     fontWeight: '700' 
  },
  subtitle: { marginTop: 12, 
    fontSize: 16, 
    opacity: 0.7, 
    textAlign: 'center' 
  },
  dots: { flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16, 
    gap: 8 
  },
  dot: { width: 8, 
    height: 8, 
    borderRadius: 8, 
    opacity: 0.3, 
    backgroundColor: '#000' 
  },
  dotActive: { 
    width: 20, 
    opacity: 1 
  },
});


export default FaqScreen;

