import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

export const PostsContent = styled.View`
  margin-bottom: 30px;
  border-color: rgba(221, 221, 221, 0.3);
  border-width: 1px;
  border-radius: 5px;
  background-color: #fcfdff;
  padding: 10px 0;
`;

export const PostFlatList = styled.FlatList``;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-left: 10px;
`;

export const UserContent = styled.View`
  margin-left: 15px;
  flex: 1;
`;

export const NameUser = styled.Text`
  font-weight: bold;
  font-size: 15px;
  font-family: 'BreeSerif-Regular';
  color: #063970;
  letter-spacing: 0.5px;
`;

export const DateUserCreatePost = styled.Text`
  font-size: 12px;
  font-family: 'BreeSerif-Regular';
  color: #838da1;
`;

export const InfoLocationContent = styled.View`
  flex-direction: row;
`;

export const TextInfoLocation = styled.Text`
  font-size: 12px;
  font-family: 'BreeSerif-Regular';
  color: #838da1;
`;

export const Description = styled.Text`
  padding: 10px;
  margin-left: 10px;
`;

export const UserAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const SwiperItem = styled.View`
  margin-top: 10px;
`;

export const SwiperImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const DotSwiper = styled(Icon)`
  margin-left: 2px;
`;

export const ButtonTash = styled.TouchableOpacity`
  margin-right: 20px;
`;
