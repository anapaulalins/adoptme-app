import React, {useState} from 'react';

import Swiper from 'react-native-swiper';
import IconArt from 'react-native-vector-icons/AntDesign';
import IconPaw from 'react-native-vector-icons/Ionicons';

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {usePost} from '../../hooks/PetContext';

import AvatarUserImage from '../../assets/21378450.jpg';

import {
  ButtonBack,
  Container,
  DotSwiper,
  PostImage,
  PostImageContant,
  LoadingActivity,
  LoadingContent,
  ContainerUser,
  UserAvatar,
  UserContent,
  TextUser,
  DataUserCreate,
  TextLocation,
  LocationContainer,
  CommentsContainer,
  CommentsText,
} from './styles';
import Comments from '../../components/Comments';

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

const PetPage: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [postInfo, setPostInfo] = useState<PropsPosts>({} as PropsPosts);
  const [loading, setLoading] = useState(true);

  const {getPetProfile} = usePost();

  const getPost = async () => {
    const postData = await getPetProfile(route.params.id);
    setPostInfo(postData);
    setLoading(false);
  };

  useFocusEffect(() => {
    getPost();
  });

  return (
    <Container>
      <ScrollView>
        {loading && (
          <LoadingContent>
            <IconPaw name="paw" size={85} color="#6793f2" />
            <LoadingActivity size="small" color="rgb(247, 126, 75)" />
          </LoadingContent>
        )}
        {postInfo.images && (
          <Swiper
            style={{height: 370}}
            dot={<DotSwiper name="paw" size={13} color="#fdfdfd" />}
            activeDot={
              <DotSwiper name="paw" size={13} color="rgb(247, 126, 75)" />
            }
            paginationStyle={{
              top: undefined,
              right: '45%',
              bottom: 15,
              left: undefined,
            }}
            loop={false}>
            {postInfo.images.map((image) => (
              <PostImageContant key={image.id}>
                <PostImage
                  source={{uri: `http://192.168.18.6:3333/files/${image.path}`}}
                  resizeMode="cover"
                />
              </PostImageContant>
            ))}
          </Swiper>
        )}
        <ButtonBack onPress={() => navigation.goBack()}>
          <IconArt name="arrowleft" size={30} color="#fff" />
        </ButtonBack>

        <ContainerUser>
          <UserAvatar source={AvatarUserImage} resizeMode="cover" />
          {postInfo.user && (
            <UserContent>
              <TextUser>{postInfo.user.name}</TextUser>
              <LocationContainer>
                <TextLocation>{postInfo.place}, </TextLocation>
                <TextLocation>{postInfo.region}</TextLocation>
              </LocationContainer>
              <DataUserCreate>
                {postInfo.created_at.split('T', 1)}
              </DataUserCreate>
            </UserContent>
          )}
        </ContainerUser>
        <CommentsContainer>
          <CommentsText>Comentarios</CommentsText>
          {postInfo.comments && (
            <Comments
              comments={postInfo.comments}
              postId={postInfo.id}
              show={true}
            />
          )}
        </CommentsContainer>
      </ScrollView>
    </Container>
  );
};

export default PetPage;
