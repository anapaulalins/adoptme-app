/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useRef, useEffect, useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';
import {Container, EyeButton, LabelInput, TextError, TextInput} from './styles';

interface PropsInput extends TextInputProps {
  name: string;
  icon?: string;
  secure?: boolean;
  setSecure?: any;
  nameLabel: string;
}

const Input: React.FC<PropsInput> = ({
  name,
  nameLabel,
  icon,
  secure,
  setSecure,
  ...props
}) => {
  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef({value: defaultValue});

  const [onFoused, setOnFoused] = useState(false);
  const [onCheckTextInput, setOnCheckTextInput] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
      },
      clearValue() {
        inputValueRef.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        onFoused={onFoused}
        isErrored={!!error}
        onCheckTextInput={onCheckTextInput}>
        {onFoused || onCheckTextInput ? (
          <LabelInput style={{fontSize: 12, top: 5}}>{nameLabel}</LabelInput>
        ) : (
          <LabelInput>{nameLabel}</LabelInput>
        )}

        <TextInput
          onFocus={() => setOnFoused(true)}
          onBlur={() => setOnFoused(false)}
          defaultValue={defaultValue}
          onChangeText={(valueText) => {
            inputValueRef.current.value = valueText;
            inputValueRef.current.value.length !== 0
              ? setOnCheckTextInput(true)
              : setOnCheckTextInput(false);
          }}
          {...props}
        />

        {nameLabel === 'Password' && (
          <EyeButton onPress={() => setSecure(!secure)}>
            <Icon name={secure ? 'eye-off' : 'eye'} size={25} color="#8091b4" />
          </EyeButton>
        )}
      </Container>
      {error && <TextError>{error}</TextError>}
    </>
  );
};

export default Input;
