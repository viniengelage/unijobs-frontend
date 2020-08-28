import React, {
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { Container } from './styles';
import { useField } from '@unform/core';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
const TextArea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleTextareaFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleTextareaBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!textareaRef.current?.value);
  }, []);
  
  return (
      <Container>
        <label htmlFor={name}>{label}</label>
        <textarea 
          name={name} 
          defaultValue={defaultValue}
          ref={textareaRef}
          {...rest}
          onFocus={handleTextareaFocus}
          onBlur={handleTextareaBlur}/>
      </Container>
  );
};

export default TextArea;
