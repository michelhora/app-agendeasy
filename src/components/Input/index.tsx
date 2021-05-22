import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { TextInputProps, Dimensions } from 'react-native';
import { UnformContext, UnformField, useField } from '@unform/core';
import InputScrollView from 'react-native-input-scroll-view';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: any;
  label?: string;
  rawText?: string;
  onInitialData?: any;
}

interface InputValueReference {
  value: string;
}
interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, icon, label, rawText, onChangeText, onInitialData, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [text, setText] = useState('');

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    if (onInitialData) onInitialData(defaultValue);
  }, [defaultValue, onInitialData]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      // getValue: (ref: any, value: string) => {
      //   if (rawText) return rawText;
      //   if (inputValueRef.current) return inputValueRef.current.value;
      //   return '';
      // },
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, rawText, registerField]);

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#2b90d9' : '#e8e8e8'}
      />
      {/* <Icon name={icon} size={20} color="#e8e8ee" /> */}

      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#adadad"
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
          if (onChangeText) onChangeText(value);
          setText(value);
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
