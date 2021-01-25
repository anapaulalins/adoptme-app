/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useAuth} from '../../hooks/Auth';
import {useFocusEffect} from '@react-navigation/native';
import IconPaw from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Header,
  Title,
  Content,
  TitleContent,
  LoadingContent,
  LoadingActivity,
  UserProfile,
  HeaderContent,
  UserProfileButton,
  UserProfileName,
} from './styles';
import api from '../../service/api';
import Posts from '../../components/Posts';

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
    created_at: string;
  };
  replyComment: [];
}

import AvatarUserImage from '../../assets/21378450.jpg';

const Home: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PropsPosts[]>([]);
  const [loading, setLoading] = useState(true);

  const {user} = useAuth();
  const navigation = useNavigation();

  const getAllPosts = async () => {
    const {data} = await api.get('posts');

    setAllPosts(data);
    setLoading(false);
  };

  useFocusEffect(() => {
    getAllPosts();
  });

  return (
    <Container>
      <Header>
        <HeaderContent>
          <TitleContent>
            <IconPaw name="paw" size={35} color="#6793f2" />
            <Title>Adopt me! </Title>
          </TitleContent>
          <UserProfileButton onPress={() => navigation.navigate('Profile')}>
            <UserProfileName>{user.name}</UserProfileName>
            <UserProfile source={AvatarUserImage} resizeMode="cover" />
          </UserProfileButton>
        </HeaderContent>
      </Header>

      <Content>
        {loading && (
          <LoadingContent>
            <IconPaw name="paw" size={85} color="#6793f2" />
            <LoadingActivity size="small" color="rgb(247, 126, 75)" />
          </LoadingContent>
        )}

        <Posts allPosts={allPosts} />
      </Content>
    </Container>
  );
};

export default Home;
