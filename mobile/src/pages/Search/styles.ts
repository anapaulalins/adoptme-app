import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  height: ${height}px;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  padding: 0 25px;
`;

export const Title = styled.Text`
  font-family: 'BreeSerif-Regular';
  font-size: 18px;
  color: #063970;
  font-weight: bold;
  text-transform: capitalize;
`;

export const LocationContainer = styled.View`
  margin-top: 40px;
`;

export const Location = styled.View`
  flex-direction: row;
  width: 100px;
`;

export const LocationContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextLocation = styled.Text`
  font-family: 'BreeSerif-Regular';
  color: #6793f2;
  font-size: 12px;
  letter-spacing: 0.5px;
`;
export const TextRegion = styled.Text`
  font-family: 'BreeSerif-Regular';
  color: #063970;
  font-size: 19px;
  font-weight: bold;
`;
export const TextCountry = styled.Text`
  font-family: 'BreeSerif-Regular';
  color: #063970;
  font-size: 17px;
  text-transform: uppercase;
  margin-left: 2px;
`;

export const AdoteContent = styled.View`
  background-color: #4f8aff;
  margin-top: 20px;
  min-height: 150px;
  width: 100%;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const AdoptmeContainer = styled.View`
  width: 200px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const AdoptmeTextContent = styled.Text`
  color: #fff;
  font-family: 'BreeSerif-Regular';
  font-size: 19px;
`;

export const AdoptmeTextContentButton = styled.Text`
  color: #fff;
  font-family: 'BreeSerif-Regular';
  font-size: 16px;
`;

export const ButtonLocation = styled.TouchableOpacity`
  margin-top: 15px;
  margin-left: 30px;
  flex-direction: row;
  align-items: center;
  background-color: #f77e4b;
  width: 130px;
  padding: 5px 10px;
  justify-content: space-between;
  border-radius: 5px;
`;

export const AdoteImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 20px;
`;

export const ListCategoryContainer = styled.View`
  margin-top: 25px;
  padding: 0 25px;
`;

export const ListCategory = styled.View`
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
export const ListSearch = styled.View`
  flex: 1;
`;

export const ListSearchFlatlist = styled.FlatList``;

export const ListSearchItemButton = styled.TouchableOpacity``;

export const ListSearchItemContent = styled.View`
  border-radius: 10px;
  margin-right: 10px;
  align-items: center;
  width: 60px;
  height: 53px;
  justify-content: center;
  background-color: red;
`;

export const TextListSearchItemButton = styled.Text`
  font-family: 'BreeSerif-Regular';
  font-size: 11px;
`;

export const Content = styled.View`
  margin-top: 25px;
  padding: 0 25px;
`;

export const AdoptmeContent = styled.View`
  margin-top: 20px;
`;

export const AdoptmeContentFlatList = styled.FlatList``;

export const AdoptmeContentItem = styled.View`
  height: 300px;
  width: 250px;
  margin-right: 15px;
  border-radius: 10px;
`;

export const AdoptmeItemImage = styled.View`
  width: 250px;
  height: 300px;
`;

export const AdoptmeImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const AdoptmeItemImageContent = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(250, 250, 250, 0.8);
  padding: 5px;
  border-bottom-right-radius: 10px;
`;

export const AdoptmeItemImageContentLocation = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AdoptmeTextLocation = styled.Text`
  font-family: 'BreeSerif-Regular';
  font-size: 9px;
  color: #063970;
`;

export const ButtonAdoptmeItem = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  align-items: center;
  padding: 6px;
  background-color: #f77e4b;
  border-top-left-radius: 28px;
  border-bottom-right-radius: 10px;
`;

export const PawMessageContainer = styled.View`
  align-items: center;
`;

export const PawMessageContent = styled.View`
  position: absolute;
  top: 56%;
  align-items: center;
`;

export const TextPawMessageContent = styled.Text`
  font-family: 'BreeSerif-Regular';
  font-size: 15px;
  color: #fff;
`;
