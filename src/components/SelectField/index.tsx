import React, { useState, SelectHTMLAttributes } from 'react';
import { Container } from './styles';

import Select from 'react-select';


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}
const SelectField: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  const [selectedOption, setSelectedOption] = useState('');
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
        <Select defaultValue={selectedOption} onChange={setSelectedOption} name={name} options={options} {...rest} />
    </Container>
  );
};

export default SelectField;
