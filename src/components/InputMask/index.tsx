import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props extends InputProps {
  name: string;
}
const InputMask: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        const realFormatado = Number(value);

        const money = new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(realFormatado);
        ref.setInputValue(money);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};
export default InputMask;
