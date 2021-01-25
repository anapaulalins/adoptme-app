/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Animated, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Circle from '../../components/Circle';
import slide from '../../data/slide';
import Background from '../../data/backgrounds';
import {
  Container,
  Content,
  ContentTitle,
  ImageContainer,
  SkipButton,
  SkipContainer,
  SkipText,
  Title,
} from './styles';

const Onboarding: React.FC = () => {
  const sliderAnimatedValue = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  const {width} = Dimensions.get('window');

  return (
    <>
      <SkipContainer>
        <SkipButton onPress={() => navigation.navigate('SingIn')}>
          <SkipText>pular</SkipText>
        </SkipButton>
      </SkipContainer>

      <Circle sliderAnimatedValue={sliderAnimatedValue} />

      <Animated.View
        style={{
          flexDirection: 'row',
          transform: [
            {
              translateX: sliderAnimatedValue.interpolate({
                inputRange: [...Array(slide.length).keys()],
                outputRange: slide.map((_, index) => -index * width * 2),
              }),
            },
          ],
          opacity: sliderAnimatedValue.interpolate({
            inputRange: [...Array(slide.length * 2 + 1).keys()].map(
              (index) => index / 2,
            ),
            outputRange: [...Array(slide.length * 2 + 1).keys()].map((index) =>
              index % 2 === 0 ? 1 : 0,
            ),
          }),
        }}>
        {slide.slice(0, Background.length).map(({title, image}, index) => {
          return (
            <Container key={index}>
              <Content>
                <ImageContainer source={image} resizeMode="contain" />
                <ContentTitle>
                  <Title numberOfLines={3}>{title}</Title>
                </ContentTitle>
              </Content>
            </Container>
          );
        })}
      </Animated.View>
    </>
  );
};

export default Onboarding;
