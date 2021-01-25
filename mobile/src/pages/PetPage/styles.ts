import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.SafeAreaView``;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  left: 30px;
`;

export const PostImageContant = styled.View``;

export const PostImage = styled.Image`
  height: 370px;
  width: 100%;
`;

export const DotSwiper = styled(Icon)`
  margin-left: 2px;
`;

export const LoadingContent = styled.View`
  align-items: center;
  margin-top: 200px;
`;

export const LoadingActivity = styled.ActivityIndicator`
  position: absolute;
  top: 55%;
`;

export const ContainerUser = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;

export const UserContent = styled.View`
  margin-left: 10px;
`;

export const TextUser = styled.Text`
  font-weight: bold;
  font-size: 15px;
  font-family: 'BreeSerif-Regular';
  color: #063970;
  letter-spacing: 0.5px;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
`;

export const TextLocation = styled.Text`
  font-size: 12px;
  font-family: 'BreeSerif-Regular';
  color: #838da1;
`;

export const DataUserCreate = styled.Text`
  font-size: 12px;
  font-family: 'BreeSerif-Regular';
  color: #838da1;
`;

export const CommentsContainer = styled.View`
  padding-bottom: 25px;
`;

export const CommentsText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  font-family: 'BreeSerif-Regular';
  color: #063970;
  letter-spacing: 0.5px;
  margin-left: 20px;
  margin-bottom: 10px;
`;
