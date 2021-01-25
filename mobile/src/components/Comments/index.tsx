import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconsPost from 'react-native-vector-icons/FontAwesome';
import IconReply from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ButtonSendComment,
  CommentContent,
  CommentContentHeader,
  CommentsContainer,
  CommentText,
  CommentUserAvatar,
  CommentUserName,
  Container,
  InputComment,
  InputContainer,
  ConmmentContent,
  ButtonComment,
  CountComment,
  ReplyCoomentButton,
  ReplyComment,
  ReplyContainer,
  ReplyInput,
  ReplyContentInput,
  ButtonReplyComment,
  ReplyContentComment,
  ReplyContent,
  ButtonShowContentReplyComment,
  TextButtonShowContentReplyComment,
  ButtonReplyCancel,
  ReplyCommentCancel,
  ContentShowContentReplyComment,
  CommentTextUser,
  CommentUserContainer,
} from './styles';

import AvatarUserImage from '../../assets/21378450.jpg';
import api from '../../service/api';
import {useAuth} from '../../hooks/Auth';

interface PropsComments {
  comments: Array<PropsComment>;
  postId: string;
  show: boolean;
}

interface PropsComment {
  id: string;
  message: string;
  user: {
    name: string;
    avatar: string;
    created_at: string;
  };
  replyComment: Array<PropsReplyComment>;
}

interface PropsReplyComment {
  id: string;
  message: string;
  user: {
    name: string;
    avatar: string;
    created_at: string;
  };
}

const Comments: React.FC<PropsComments> = ({comments, postId, show}) => {
  const [showContainerComments, setShowContainerComments] = useState(show);
  const [message, setMessage] = useState('');
  const [messageReply, setMessageReply] = useState('');
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showContentReply, setShowContentReply] = useState(false);
  const [commentId, setCommentId] = useState('');

  const {user} = useAuth();

  const handleShow = () => {
    if (comments.length !== 0) {
      setShowContainerComments(!showContainerComments);
    }
  };

  const handleComment = useCallback(async () => {
    const data = {
      message: message,
      user: user.id,
      post: postId,
    };
    await api.post('posts/comments', data);

    setMessage('');
    setShowContainerComments(true);
  }, [message, user, postId]);

  const handleReplyComment = useCallback(
    async (commentId) => {
      const dataReply = {
        message: messageReply,
        user: user.id,
        comment: commentId,
      };

      await api.post('posts/comments/reply', dataReply);

      setMessageReply('');
      setShowContentReply(true);
      setShowReplyInput(false);
    },
    [messageReply, user],
  );

  const HandleShowInput = useCallback((id) => {
    setCommentId(id);
    setShowReplyInput(true);
  }, []);

  const HandleShowContentRepy = useCallback((id) => {
    setCommentId(id);
    setShowContentReply(true);
  }, []);

  return (
    <Container>
      <ConmmentContent>
        <ButtonComment onPress={handleShow}>
          <IconsPost name="comments" size={25} color="#6793f2" />
          <CountComment>{comments.length}</CountComment>
        </ButtonComment>
      </ConmmentContent>

      {showContainerComments && (
        <CommentsContainer>
          {comments.map((comment) => (
            <CommentContent key={comment.id}>
              <CommentContentHeader>
                {comment.user.avatar ? (
                  <CommentUserAvatar
                    source={{
                      uri: `http://192.168.18.6:3333/files/${comment.user.avatar}`,
                    }}
                  />
                ) : (
                  <CommentUserAvatar source={AvatarUserImage} />
                )}
                <CommentUserContainer>
                  <CommentUserName>{comment.user.name}</CommentUserName>
                  <CommentTextUser>
                    {comment.user.created_at.split('T', 1)}
                  </CommentTextUser>
                </CommentUserContainer>
              </CommentContentHeader>
              <CommentText>{comment.message}</CommentText>
              <ReplyCoomentButton onPress={() => HandleShowInput(comment.id)}>
                <ReplyComment>Responder</ReplyComment>
              </ReplyCoomentButton>

              <ReplyContainer>
                <ReplyContent>
                  {comment.replyComment.length !== 0 && (
                    <ContentShowContentReplyComment>
                      {showContentReply && comment.id === commentId ? (
                        <ButtonShowContentReplyComment
                          onPress={() => setShowContentReply(false)}>
                          <TextButtonShowContentReplyComment>
                            Ocultar Respostas
                          </TextButtonShowContentReplyComment>
                        </ButtonShowContentReplyComment>
                      ) : (
                        <ButtonShowContentReplyComment
                          onPress={() => HandleShowContentRepy(comment.id)}>
                          <TextButtonShowContentReplyComment>
                            Ver Respostas
                          </TextButtonShowContentReplyComment>
                        </ButtonShowContentReplyComment>
                      )}
                      <IconReply
                        name="message-reply-text"
                        size={20}
                        color="#6793f2"
                      />
                    </ContentShowContentReplyComment>
                  )}
                </ReplyContent>

                {comment.id === commentId && (
                  <>
                    {showContentReply && (
                      <ReplyContentComment>
                        {comment.replyComment.map((reply) => (
                          <CommentContent key={reply.id}>
                            <CommentContentHeader>
                              {reply.user.avatar ? (
                                <CommentUserAvatar
                                  source={{
                                    uri: `http://192.168.18.6:3333/files/${reply.user.avatar}`,
                                  }}
                                />
                              ) : (
                                <CommentUserAvatar source={AvatarUserImage} />
                              )}
                              <CommentUserContainer>
                                <CommentUserName>
                                  {reply.user.name}
                                </CommentUserName>
                                <CommentTextUser>
                                  {comment.user.created_at.split('T', 1)}
                                </CommentTextUser>
                              </CommentUserContainer>
                            </CommentContentHeader>
                            <CommentText>{reply.message}</CommentText>
                          </CommentContent>
                        ))}
                      </ReplyContentComment>
                    )}
                  </>
                )}

                {comment.id === commentId && (
                  <>
                    {showReplyInput && (
                      <>
                        <ReplyContentInput>
                          <ReplyInput
                            placeholder="Responda..."
                            multiline
                            placeholderTextColor="#838da1"
                            selectionColor="#6793f2"
                            value={messageReply}
                            onChangeText={(text) => setMessageReply(text)}
                          />
                          <ButtonReplyComment
                            onPress={() => handleReplyComment(comment.id)}>
                            <Icon name="send" size={20} color="#6793f2" />
                          </ButtonReplyComment>
                        </ReplyContentInput>
                        <ButtonReplyCancel
                          onPress={() => setShowReplyInput(false)}>
                          <ReplyCommentCancel>Cancelar</ReplyCommentCancel>
                        </ButtonReplyCancel>
                      </>
                    )}
                  </>
                )}
              </ReplyContainer>
            </CommentContent>
          ))}
        </CommentsContainer>
      )}

      <InputContainer>
        <InputComment
          placeholder="Comente..."
          multiline
          placeholderTextColor="#838da1"
          selectionColor="#6793f2"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <ButtonSendComment onPress={handleComment}>
          <Icon name="send" size={20} color="#6793f2" />
        </ButtonSendComment>
      </InputContainer>
    </Container>
  );
};

export default Comments;
