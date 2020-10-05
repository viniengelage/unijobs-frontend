import React, { SelectHTMLAttributes } from 'react';
import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    _id?: string;
    value: string;
    label: string;
  }>;
}
const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
        <select name={name} {...rest} >
            <option value="" disabled selected hidden>Selecione uma opção</option>
            {options.map (option => {
              return <option key={option._id} value={option.value}>{option.label}</option>
            })}
        </select>
    </Container>
  );
};

export default Select;
