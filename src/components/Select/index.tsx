import React, { SelectHTMLAttributes } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}
const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  const citySelectItems = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
  ];
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
        <select name={name} {...rest} >
            <option value="" disabled selected hidden>Selecione uma opção</option>
            {options.map (option => {
              return <option key={option.value} value={option.value}>{option.label}</option>
            })}
        </select>
    </Container>
  );
};

export default Select;
