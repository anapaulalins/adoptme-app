import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
export const HeaderPost = styled.View`
  height: 150px;
  width: 100%;
  background-color: #6793f2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
`;

export const Title = styled.Text`
  font-family: 'KaushanScript-Regular';
  font-size: 25px;
  color: #fff;
  letter-spacing: 1px;
`;

export const ContainerIcons = styled.View``;

export const ContentIcons = styled.View`
  flex-direction: row;
`;
export const IconPaw = styled(Icon)`
  margin-top: 3px;
  margin-right: 3px;
`;

export const ContentPost = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 20px;
  margin-top: -42px;
  border-top-left-radius: 50px;
  background-color: #fff;
`;

export const InputDescription = styled.TextInput`
  border-width: 1.5px;
  border-color: #6793f2;
  margin-top: 45px;
  /* border-top-left-radius: 15px;
  border-bottom-right-radius: 15px; */
  border-radius: 5px;
  padding: 10px;
`;

export const CategoryContainer = styled.View`
  margin-top: 30px;
`;

export const CategoryPicker = styled(Picker)`
  margin-top: 15px;
`;

export const TextPost = styled.Text`
  font-family: 'BreeSerif-Regular';
  font-size: 16px;
  margin-left: 2px;
  color: #063970;
`;

export const CategoryContent = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #6793f2;
`;

export const ContentTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImagesContainer = styled.View`
  margin-top: 30px;
`;

export const ButtonImagePicker = styled.TouchableOpacity`
  width: 50px;
  margin-top: 10px;
`;

export const PreviousImageContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PreviousImageItem = styled.View``;

export const PreviousImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;

export const CreatePostContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ButtonCreatePost = styled(RectButton)`
  margin-bottom: 10px;
  background-color: #6793f2;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const TextButtonCreatePost = styled.Text`
  font-family: 'BreeSerif-Regular';
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
`;

export const LocationContainer = styled.View`
  margin-top: 30px;
`;

export const InfoLocation = styled.View`
  margin-top: 7px;
  flex-direction: row;
  align-items: center;
`;

export const TextInfoLocation = styled.Text`
  font-family: 'BreeSerif-Regular';
  font-size: 16px;
  color: #6793f2;
  margin-left: 3px;
`;

export const ButtonLocation = styled.TouchableOpacity`
  background-color: #f77e4b;
  width: 130px;
  margin-top: 15px;
  padding: 5px 10px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextButtonLocation = styled.Text`
  font-family: 'BreeSerif-Regular';
  font-size: 16px;
  color: #fff;
`;
