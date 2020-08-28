import React, { TextareaHTMLAttributes } from 'react';
import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
const TextArea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  
  return (
      <Container>
        <label htmlFor={name}>{label}</label>
        <textarea 
          name={name} 
          {...rest}/>
      </Container>
  );
};

export default TextArea;
