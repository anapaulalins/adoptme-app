/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback} from 'react';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconPaw from 'react-native-vector-icons/Ionicons';
import IconLocation from 'react-native-vector-icons/Entypo';
import IconFont from 'react-native-vector-icons/FontAwesome';
import api from '../../service/api';
import Geolocation from '@react-native-community/geolocation';
import tokenMapBox from '../../service/tokenMapbox';
import axios from 'axios';
import {ActivityIndicator, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {items} from '../../data/arrayFilter';
import {
  Container,
  ContainerHeader,
  LocationContainer,
  LocationContent,
  TextLocation,
  ButtonLocation,
  TextRegion,
  TextCountry,
  AdoteImage,
  AdoteContent,
  ListCategory,
  ListSearchFlatlist,
  ListSearchItemContent,
  ListSearchItemButton,
  TextListSearchItemButton,
  ListSearch,
  Title,
  ListCategoryContainer,
  Content,
  AdoptmeContentItem,
  AdoptmeContentFlatList,
  AdoptmeContent,
  AdoptmeImage,
  AdoptmeItemImage,
  AdoptmeItemImageContent,
  AdoptmeItemImageContentLocation,
  AdoptmeTextLocation,
  PawMessageContainer,
  PawMessageContent,
  TextPawMessageContent,
  AdoptmeTextContent,
  AdoptmeContainer,
  Location,
  AdoptmeTextContentButton,
  ButtonAdoptmeItem,
} from './styles';

interface PropsUser {
  name: string;
  avatar: string;
}

interface PropsImage {
  id: string;
  path: string;
}

interface PropsPosts {
  id: string;
  description: string;
  category: string;
  place: string;
  region: string;
  user: PropsUser;
  images: Array<PropsImage>;
  comments: Array<PropsComments>;
  created_at: string;
}

interface PropsComments {
  id: string;
  message: string;
  user: {
    name: string;
    avatar: string;
  };
  replyComment: [];
}

import AdoptMe from '../../assets/adote1.png';
import {ScrollView} from 'react-native-gesture-handler';

const Search: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PropsPosts[]>([]);
  const [postFilter, setPostFilter] = useState<PropsPosts[]>([]);
  const [region, setRegion] = useState('Sua localização');
  const [country, setCountry] = useState('');
  const [start, setStart] = useState(true);
  const [itemId, setItemId] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const getAllPosts = async () => {
    const {data} = await api.get('posts');
    setAllPosts(data);
  };

  useEffect(() => {
    setStart(true);
    setPostFilter([]);
    getAllPosts();
    setLoading(false);
    Geolocation.getCurrentPosition(async (coordinates) => {
      await axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.coords.longitude},${coordinates.coords.latitude}.json?types=poi&access_token=${tokenMapBox.token}`,
        )
        .then((data) => data.data)
        .then((data) => {
          setRegion(data.features[0].context[2].text);
          setCountry(data.features[0].context[3].short_code);
        });
    });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(false);
    getAllPosts();
  }, []);

  const filterPost = useCallback(
    (category) => {
      setStart(false);
      setItemId(category);
      setPostFilter([...allPosts].filter((post) => post.category === category));
    },
    [allPosts],
  );

  const handleAllPost = useCallback(() => {
    setStart(true);
    setItemId('');
  }, []);

  const handleLocation = useCallback(() => {
    setStart(false);
    setItemId('');
    setPostFilter([...allPosts].filter((post) => post.region === region));
  }, [allPosts, region]);

  const handlePetProfile = useCallback(
    (id) => {
      navigation.navigate('PetPage', {id: id});
    },
    [navigation],
  );

  return (
    <Container>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <ContainerHeader>
          <LocationContainer>
            <Location>
              <TextLocation>Localização</TextLocation>
              <IconMaterial name="chevron-down" size={22} color="#92bef1" />
            </Location>

            <LocationContent>
              <TextRegion>{region},</TextRegion>
              <TextCountry>{country}</TextCountry>
            </LocationContent>
            <AdoteContent>
              <AdoptmeContainer>
                <AdoptmeTextContent>
                  Encontre os pets mais próximo a você
                </AdoptmeTextContent>
                <ButtonLocation onPress={handleLocation}>
                  <IconLocation name="location" size={20} color="#fff" />
                  <AdoptmeTextContentButton>
                    Click aqui
                  </AdoptmeTextContentButton>
                </ButtonLocation>
              </AdoptmeContainer>
              <AdoteImage source={AdoptMe} resizeMode="contain" />
            </AdoteContent>
          </LocationContainer>
        </ContainerHeader>
        <ListCategoryContainer>
          <Title>Categorias</Title>
          <ListCategory>
            <IconFont name="sliders" size={27} color="#063970" />
            <ListSearchItemButton onPress={handleAllPost}>
              <ListSearchItemContent
                style={{
                  marginLeft: 15,
                  backgroundColor:
                    itemId === '' ? '#6793f2' : 'rgba(225, 223, 229,0.3)',
                }}>
                <TextListSearchItemButton
                  style={{
                    color: itemId === '' ? '#fff' : '#6793f2',
                  }}>
                  Tudo
                </TextListSearchItemButton>
              </ListSearchItemContent>
            </ListSearchItemButton>
            <ListSearch>
              <ListSearchFlatlist
                horizontal
                showsHorizontalScrollIndicator={false}
                data={items}
                decelerationRate="normal"
                bounces={false}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <ListSearchItemButton onPress={() => filterPost(item.id)}>
                    <ListSearchItemContent
                      style={{
                        backgroundColor:
                          itemId === item.id
                            ? '#6793f2'
                            : 'rgba(225, 223, 229,0.3)',
                      }}>
                      <TextListSearchItemButton
                        style={{
                          color: itemId === item.id ? '#fff' : '#6793f2',
                        }}>
                        {item.name}
                      </TextListSearchItemButton>
                    </ListSearchItemContent>
                  </ListSearchItemButton>
                )}
              />
            </ListSearch>
          </ListCategory>
        </ListCategoryContainer>
        <Content>
          <Title>Adopt Me</Title>
          {loading && <ActivityIndicator size="large" color="#f77e4b" />}
          <AdoptmeContent>
            {!start && postFilter.length === 0 ? (
              <PawMessageContainer>
                <IconPaw name="paw" size={300} color="#eb377c" />
                <PawMessageContent>
                  <TextPawMessageContent>Oops!!</TextPawMessageContent>
                  <TextPawMessageContent>Não encontramos</TextPawMessageContent>
                  <TextPawMessageContent>o que procura!</TextPawMessageContent>
                </PawMessageContent>
              </PawMessageContainer>
            ) : (
              <AdoptmeContentFlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={start ? allPosts : postFilter}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => (
                  <AdoptmeContentItem>
                    <AdoptmeItemImage key={item.images[0].id}>
                      <AdoptmeImage
                        source={{
                          uri: `http://192.168.18.6:3333/files/${item.images[0].path}`,
                        }}
                        resizeMode="cover"
                      />
                    </AdoptmeItemImage>

                    <AdoptmeItemImageContent>
                      <Title>{item.category}</Title>
                      <AdoptmeItemImageContentLocation>
                        <IconLocation
                          name="location-pin"
                          size={20}
                          color="#f77e4b"
                        />
                        <AdoptmeTextLocation numberOfLines={2}>
                          {item.place},{item.region}
                        </AdoptmeTextLocation>
                      </AdoptmeItemImageContentLocation>
                    </AdoptmeItemImageContent>
                    <ButtonAdoptmeItem
                      onPress={() => handlePetProfile(item.id)}>
                      <IconFont
                        name="long-arrow-right"
                        size={30}
                        color="#fff"
                      />
                    </ButtonAdoptmeItem>
                  </AdoptmeContentItem>
                )}
              />
            )}
          </AdoptmeContent>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Search;
