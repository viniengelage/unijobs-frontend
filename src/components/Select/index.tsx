import React, { SelectHTMLAttributes } from 'react';
import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    id?: string;
    value: string;
    label: string;
  }>;
}
const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {

  const listOptions = options.map((option) =>
    <option key={option.id} value={option.value}>{option.label}</option>
  );


  return (
    <Container>
      <label htmlFor={name}>{label}</label>
        <select name={name} {...rest} >
            {listOptions}
        </select>
    </Container>
  );
};

export default Select;
