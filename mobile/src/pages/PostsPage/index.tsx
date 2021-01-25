import React, {useCallback, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native';
import * as ImagePicker from 'react-native-image-picker/src';
import IconImage from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLocation from 'react-native-vector-icons/Entypo';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/Auth';
import api from '../../service/api';
import tokenMapBox from '../../service/tokenMapbox';
import {
  Container,
  HeaderPost,
  Title,
  ContentPost,
  ContentIcons,
  IconPaw,
  ContainerIcons,
  InputDescription,
  CategoryPicker,
  TextPost,
  ContentTitle,
  CategoryContent,
  ButtonImagePicker,
  PreviousImageContent,
  PreviousImageItem,
  PreviousImage,
  CategoryContainer,
  ImagesContainer,
  ButtonCreatePost,
  TextButtonCreatePost,
  CreatePostContainer,
  ButtonLocation,
  TextButtonLocation,
  LocationContainer,
  InfoLocation,
  TextInfoLocation,
} from './styles';
import {Alert} from 'react-native';
import axios from 'axios';

interface PropsImages {
  fileName: string;
  uri: string;
  type: string;
}

const Posts: React.FC = () => {
  const [category, setCategory] = useState<React.ReactText>('');
  const [previousImage, setPreviousImage] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<PropsImages[]>([]);
  const [loading, setLoading] = useState(false);

  const [dataLocation, setDataLocation] = useState(null as any);

  const {user} = useAuth();

  const navigation = useNavigation();

  const handleLocation = useCallback(() => {
    try {
      Geolocation.getCurrentPosition(async (coordinates) => {
        await axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.coords.longitude},${coordinates.coords.latitude}.json?types=poi&access_token=${tokenMapBox.token}`,
          )
          .then((data) => data.data)
          .then((data) => {
            setDataLocation(data.features[0].context);
          });
      });
    } catch (err) {
      Alert.alert(
        'Ocorreu um Erro',
        'Precisamos da permissão para pegar sua localização!',
      );
    }
  }, []);

  const setFalseLoading = useCallback(() => setLoading(false), []);

  const handleCreatePost = useCallback(async () => {
    setLoading(true);
    const data = new FormData();

    data.append('description', description);
    data.append('category', category);
    data.append('user', user.id);
    data.append('place', dataLocation[1].text);
    data.append('region', dataLocation[2].text);

    images.forEach((image) => {
      data.append('images', {
        type: image.type,
        name: image.fileName,
        uri: image.uri,
      });
    });

    await api.post('posts', data);

    navigation.navigate('Home');

    setCategory('');
    setDescription('');
    setPreviousImage([]);
    setImages([]);
    setDataLocation(null);
    setFalseLoading();
  }, [
    category,
    description,
    user,
    images,
    navigation,
    dataLocation,
    setFalseLoading,
  ]);

  const handleSelectImage = useCallback(
    (dataImage) => {
      if (dataImage.didCancel) {
        return;
      }
      if (dataImage.error) {
        return;
      }
      if (!dataImage.uri) {
        return;
      }

      const {uri} = dataImage;

      setImages([...images, dataImage]);

      setPreviousImage([...previousImage, uri]);
    },
    [previousImage, images],
  );

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}>
      <Container>
        <HeaderPost>
          <Title>Novo Post</Title>
          <ContainerIcons>
            <ContentIcons>
              <IconPaw name="paw" size={12} color="#fff" />
              <IconPaw name="paw" size={12} color="#6793f2" />
              <IconPaw name="paw" size={12} color="#fff" />
            </ContentIcons>
            <ContentIcons>
              <IconPaw name="paw" size={12} color="#6793f2" />
              <IconPaw name="paw" size={12} color="#fff" />
              <IconPaw name="paw" size={12} color="#6793f2" />
              <IconPaw name="paw" size={12} color="#fff" />
            </ContentIcons>
          </ContainerIcons>
        </HeaderPost>

        <ContentPost>
          <InputDescription
            placeholder="Descrição do pet..."
            placeholderTextColor="#838da1"
            selectionColor="#6793f2"
            multiline={true}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />

          <CategoryContainer>
            <ContentTitle>
              <IconPaw name="paw" size={15} color="#6793f2" />
              <TextPost>Escolha a categoria do pet:</TextPost>
            </ContentTitle>
            <CategoryContent>
              <CategoryPicker
                selectedValue={category}
                onValueChange={(value) => setCategory(value)}
                dropdownIconColor="#6793f2">
                <CategoryPicker.Item
                  label="Selecione a categoria"
                  value=""
                  color="#063970"
                />
                <CategoryPicker.Item
                  label="Gato"
                  value="gato"
                  color="#063970"
                />
                <CategoryPicker.Item
                  label="Cachorro"
                  value="cachorro"
                  color="#063970"
                />
                <CategoryPicker.Item
                  label="Passáro"
                  value="passaro"
                  color="#063970"
                />
                <CategoryPicker.Item
                  label="Coelho"
                  value="coelho"
                  color="#063970"
                />
              </CategoryPicker>
            </CategoryContent>
          </CategoryContainer>

          <LocationContainer>
            <ContentTitle>
              <IconPaw name="paw" size={15} color="#6793f2" />
              <TextPost>Qual sua localização?</TextPost>
            </ContentTitle>
            <ButtonLocation onPress={handleLocation}>
              <IconLocation name="location" size={22} color="#fff" />
              <TextButtonLocation>Click aqui</TextButtonLocation>
            </ButtonLocation>
            {dataLocation && (
              <InfoLocation>
                <IconLocation name="location-pin" size={20} color="#f77e4b" />
                <TextInfoLocation>{dataLocation[1].text},</TextInfoLocation>
                <TextInfoLocation>
                  {dataLocation[2].short_code}
                </TextInfoLocation>
              </InfoLocation>
            )}
          </LocationContainer>

          <ImagesContainer>
            <ContentTitle>
              <IconPaw name="paw" size={15} color="#6793f2" />
              <TextPost>Escolha lindas fotos do pet:</TextPost>
            </ContentTitle>
            <ButtonImagePicker
              onPress={() => {
                ImagePicker.launchImageLibrary(
                  {
                    mediaType: 'photo',
                    quality: 1,
                  },
                  handleSelectImage,
                );
              }}>
              <IconImage name="image-plus" size={50} color="#6793f2" />
            </ButtonImagePicker>
            <PreviousImageContent>
              {previousImage.map((image) => {
                return (
                  <PreviousImageItem key={image}>
                    <PreviousImage source={{uri: image}} resizeMode="cover" />
                  </PreviousImageItem>
                );
              })}
            </PreviousImageContent>
          </ImagesContainer>
          <CreatePostContainer>
            <ButtonCreatePost onPress={handleCreatePost}>
              {!loading ? (
                <TextButtonCreatePost>Criar Post</TextButtonCreatePost>
              ) : (
                <ActivityIndicator size="large" color="#fff" />
              )}
            </ButtonCreatePost>
          </CreatePostContainer>
        </ContentPost>
      </Container>
    </ScrollView>
  );
};

export default Posts;
