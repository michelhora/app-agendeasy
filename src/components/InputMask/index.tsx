import React, { useState, useCallback, forwardRef, useEffect } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import Input from '../Input';
import { Container, Icon } from './styles';

const InputMask = ({ icon, type, ...rest }: any, inputValueRef: any) => {
  const [text, setText] = useState('');
  const [rawText, setRawText] = useState('');
  const [textSize, setTextSize] = useState('');
  const [isCnpj, setIsCnpj] = useState(false);
  console.log('antes de tudo');
  console.log(icon);
  console.log(isCnpj);
  const handleChangeText = useCallback(
    (maskedText, unmaskedText) => {
      setText(maskedText);
      setRawText(unmaskedText);

      console.log(unmaskedText.length);
      unmaskedText.length > 11 ? setIsCnpj(true) : setIsCnpj(false);
      console.log(isCnpj);
    },
    [isCnpj],
  );

  return (
    <TextInputMask
      icon={icon ? icon : isCnpj ? 'briefcase' : 'file-text'}
      type={type ? type : isCnpj ? 'cnpj' : 'cpf'}
      includeRawValueInChangeText
      value={text}
      onChangeText={handleChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref: inputValueRef,
        rawText,
        onInitialData: setText,
        textSize,
      }}
      {...rest}
    />
  );
};
export default forwardRef(InputMask);
