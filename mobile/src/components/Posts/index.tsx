import React, {useCallback} from 'react';
import Swiper from 'react-native-swiper';
import {useAuth} from '../../hooks/Auth';
import IconTash from 'react-native-vector-icons/Entypo';
import AvatarUserImage from '../../assets/21378450.jpg';
import Comments from '../../components/Comments';
import api from '../../service/api';

import {
  Description,
  DotSwiper,
  NameUser,
  PostsContent,
  SwiperImage,
  SwiperItem,
  UserAvatar,
  UserContent,
  DateUserCreatePost,
  UserContainer,
  TextInfoLocation,
  InfoLocationContent,
  ButtonTash,
  PostFlatList,
} from './styles';

interface PropsPost {
  allPosts: Array<PropsPosts>;
}
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

const Posts: React.FC<PropsPost> = ({allPosts}) => {
  const {user} = useAuth();

  const handleTashPost = useCallback(async (id) => {
    await api.delete(`posts/delete/${id}`);
  }, []);

  return (
    <PostFlatList
      data={allPosts}
      showsVerticalScrollIndicator
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => (
        <PostsContent>
          <UserContainer>
            {item.user.avatar ? (
              <UserAvatar
                source={{
                  uri: `http://192.168.18.6:3333/files/${item.user.avatar}`,
                }}
                resizeMode="cover"
              />
            ) : (
              <UserAvatar source={AvatarUserImage} resizeMode="cover" />
            )}
            <UserContent>
              <NameUser>{item.user.name}</NameUser>
              <InfoLocationContent>
                <TextInfoLocation>{item.place}, </TextInfoLocation>
                <TextInfoLocation>{item.region}</TextInfoLocation>
              </InfoLocationContent>
              <DateUserCreatePost>
                {item.created_at.split('T', 1)}
              </DateUserCreatePost>
            </UserContent>
            {item.user.name === user.name && (
              <ButtonTash onPress={() => handleTashPost(item.id)}>
                <IconTash name="trash" size={23} color="#f77e4b" />
              </ButtonTash>
            )}
          </UserContainer>
          <Description>{item.description}</Description>

          {item.images && (
            <Swiper
              style={{height: 370}}
              dot={<DotSwiper name="paw" size={13} color="#fdfdfd" />}
              activeDot={<DotSwiper name="paw" size={13} color="#6793f2" />}
              paginationStyle={{
                top: undefined,
                right: '45%',
                bottom: 15,
                left: undefined,
              }}
              loop={false}>
              {item.images.map((image) => (
                <SwiperItem key={image.id}>
                  <SwiperImage
                    source={{
                      uri: `http://192.168.18.6:3333/files/${image.path}`,
                    }}
                    resizeMode="cover"
                  />
                </SwiperItem>
              ))}
            </Swiper>
          )}
          <Comments comments={item.comments} postId={item.id} show={false} />
        </PostsContent>
      )}
    />
  );
};

export default Posts;
