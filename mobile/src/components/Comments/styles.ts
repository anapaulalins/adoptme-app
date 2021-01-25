import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  padding: 0 20px;
`;

export const ConmmentContent = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
`;

export const ButtonComment = styled.TouchableOpacity`
  margin-right: 10px;
  flex-direction: row;
  align-items: center;
  background-color: rgba(103, 147, 242, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
`;

export const CountComment = styled.Text`
  margin-left: 10px;
  color: #fff;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InputComment = styled.TextInput`
  border-width: 1.5px;
  border-color: rgba(103, 147, 242, 0.8);
  border-radius: 6px;
  padding: 7px;
  flex: 1;
`;

export const ButtonSendComment = styled.TouchableOpacity`
  margin-left: 6px;
  padding: 11px;
  background-color: rgba(103, 147, 242, 0.5);
  border-radius: 5px;
`;

export const CommentsContainer = styled.View`
  margin-bottom: 15px;
`;

export const CommentContent = styled.View`
  margin-top: 10px;
  padding: 8px;
  border-radius: 10px;
`;

export const CommentContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CommentText = styled.Text`
  margin-top: 10px;
  font-family: 'BreeSerif-Regular';
  color: #063970;
  font-size: 13px;
`;
export const CommentUserContainer = styled.View`
  align-items: center;
`;

export const CommentUserName = styled.Text`
  margin-left: 7px;
  font-weight: bold;
  font-size: 11px;
  font-family: 'BreeSerif-Regular';
  color: #063970;
  letter-spacing: 0.5px;
`;

export const CommentTextUser = styled.Text`
  font-size: 10px;
  font-family: 'BreeSerif-Regular';
  color: #838da1;
  margin-left: 7px;
`;

export const CommentUserAvatar = styled.Image`
  height: 25px;
  width: 25px;
  border-radius: 12.5px;
`;

export const ReplyContainer = styled.View``;

export const ReplyContent = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ReplyCoomentButton = styled.TouchableOpacity`
  margin-top: 8px;
`;

export const ContentShowContentReplyComment = styled.View`
  padding: 3px 5px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonShowContentReplyComment = styled.TouchableOpacity``;

export const TextButtonShowContentReplyComment = styled.Text`
  font-size: 12px;
  font-family: 'BreeSerif-Regular';
  color: rgb(103, 147, 242);
  margin-right: 5px;
`;

export const ReplyComment = styled.Text`
  font-size: 12px;
  font-family: 'BreeSerif-Regular';
  color: #f77e4b;
`;

export const ButtonReplyCancel = styled.TouchableOpacity``;

export const ReplyCommentCancel = styled.Text`
  font-size: 12px;
  font-family: 'BreeSerif-Regular';
  color: #eb377c;
`;

export const ReplyContentInput = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ReplyInput = styled.TextInput`
  flex: 1;
  border-bottom-width: 2px;
  border-color: rgb(103, 147, 242);
`;

export const ButtonReplyComment = styled.TouchableOpacity`
  padding: 5px;
`;

export const ReplyContentComment = styled.View`
  margin-left: 30px;
`;
