import React, { SelectHTMLAttributes } from 'react';
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

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
        <Select name={name} options={options} {...rest} />
    </Container>
  );
};

export default SelectField;
