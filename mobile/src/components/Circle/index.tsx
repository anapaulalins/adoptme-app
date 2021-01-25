/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Animated, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconPaw from 'react-native-vector-icons/Ionicons';
import Background from '../../data/backgrounds';

const DURATION = 2000;
const TEXT_DURATION = DURATION * 0.8;

const IconAnimated = Animated.createAnimatedComponent(Icon);
const IconAnimated2 = Animated.createAnimatedComponent(IconPaw);

interface PropsCircle {
  sliderAnimatedValue: Animated.Value;
}

const Circle: React.FC<PropsCircle> = ({sliderAnimatedValue}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const navigation = useNavigation();

  const {initialBackground, nowBackground} = Background[index];

  const backgroundColor = animatedValue2.interpolate({
    inputRange: [0, 0.001, 0.5, 0.501, 1],
    outputRange: [
      initialBackground,
      initialBackground,
      initialBackground,
      nowBackground,
      nowBackground,
    ],
  });

  const animate = (indexSlide: number) =>
    Animated.parallel([
      Animated.timing(sliderAnimatedValue, {
        toValue: indexSlide,
        duration: TEXT_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: false,
      }),
    ]);

  const press = () => {
    animatedValue.setValue(0);
    animatedValue2.setValue(0);
    animate((index + 1) % Background.length).start();
    setIndex((index + 1) % Background.length);
  };

  return (
    <>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 8,
            paddingBottom: 90,
            backgroundColor,
          },
        ]}>
        <Animated.View
          style={{
            height: 65,
            width: 120,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            transform: [
              {perspective: 360},
              {
                rotateY: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '-90deg', '-180deg'],
                }),
              },
              {
                scale: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 6, 1],
                }),
              },
            ],
          }}>
          {index === Background.length - 1 ? (
            <TouchableOpacity onPress={() => navigation.navigate('SingIn')}>
              <Animated.View
                style={{
                  width: 120,
                  height: 65,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                  transform: [
                    {
                      rotateY: animatedValue.interpolate({
                        inputRange: [0, 0.5, 0.9, 1],
                        outputRange: ['0deg', '180deg', '180deg', '180deg'],
                      }),
                    },
                  ],
                  opacity: animatedValue.interpolate({
                    inputRange: [0, 0.05, 0.9, 1],
                    outputRange: [0, 0, 0, 1],
                  }),
                }}>
                <IconAnimated2 name="paw" size={35} color="#10162d" />
              </Animated.View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={press}>
              <Animated.View
                style={{
                  width: 120,
                  height: 65,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                  transform: [
                    {
                      scale: animatedValue.interpolate({
                        inputRange: [0, 0.05, 0.5, 1],
                        outputRange: [1, 0, 0, 1],
                      }),
                    },
                    {
                      rotateY: animatedValue.interpolate({
                        inputRange: [0, 0.5, 0.9, 1],
                        outputRange: ['0deg', '180deg', '180deg', '180deg'],
                      }),
                    },
                  ],
                  opacity: animatedValue.interpolate({
                    inputRange: [0, 0.05, 0.9, 1],
                    outputRange: [1, 0, 0, 1],
                  }),
                }}>
                <IconAnimated name="right" size={35} color="#10162d" />
              </Animated.View>
            </TouchableOpacity>
          )}
        </Animated.View>
      </Animated.View>
    </>
  );
};

export default Circle;
