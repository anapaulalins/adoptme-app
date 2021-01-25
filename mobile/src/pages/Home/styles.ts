import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdfdfd;
`;

export const Header = styled.View`
  width: ${width}px;
  padding-left: 20px;
  justify-content: flex-end;
  height: 100px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const TitleContent = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-family: 'KaushanScript-Regular';
  color: #6793f2;
  margin-left: 10px;
`;

export const UserProfileButton = styled.TouchableOpacity`
  background-color: rgba(103, 147, 242, 0.7);
  flex-direction: row;
  align-items: center;
  padding: 3px 10px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const UserProfileName = styled.Text`
  font-size: 13px;
  font-family: 'BreeSerif-Regular';
  margin-right: 5px;
  color: #fff;
`;

export const UserProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #fff;
`;

export const Content = styled.View`
  width: ${width}px;
  margin-top: 15px;
  flex: 1;
`;

export const LoadingContent = styled.View`
  align-items: center;
  margin-top: 80px;
`;

export const LoadingActivity = styled.ActivityIndicator`
  position: absolute;
  top: 55%;
`;
