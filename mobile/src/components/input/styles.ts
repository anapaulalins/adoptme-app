import styled, {css} from 'styled-components/native';

interface PropsContainer {
  onFoused: boolean;
  onCheckTextInput: boolean;
  isErrored: boolean;
}

export const Container = styled.View<PropsContainer>`
  background-color: #fdfdfd;
  width: 100%;
  border-radius: 5px;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  height: 58px;
  margin-top: 15px;

  ${(props) =>
    props.isErrored &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #ff5d36;
    `}

  ${(props) =>
    props.onFoused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #8091b4;
      padding-top: 12px;
    `}

  ${(props) =>
    props.onCheckTextInput &&
    css`
      padding-top: 12px;
    `}
`;

export const TextInput = styled.TextInput`
  width: 100%;
  color: #333;
  flex: 1;
`;

export const LabelInput = styled.Text`
  position: absolute;
  color: #8091b4;
  margin-left: 15px;
  letter-spacing: 0.5px;
`;

export const TextError = styled.Text`
  font-family: 'BreeSerif-Regular';
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #ff5d36;
  margin-top: 2px;
`;

export const EyeButton = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
`;
