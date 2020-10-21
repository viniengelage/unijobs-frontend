import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';

import { Container } from './styles';

interface OptionType {
  [key: string]: any;
}

interface SelectProps {
  name: string;
  options: OptionType[];
  isMulti?: boolean;
}

type SelectdValue = OptionType | OptionType[] | null;

const Select: React.FC<SelectProps> = ({ name, options, ...rest }) => {
  const { fieldName, defaultValue, registerField } = useField(name);

  const selectRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
      clearValue: ref => {
        ref.select.clearValue();
      },
      getValue: rest.isMulti
        ? ref =>
            ref.state.value?.map((option: OptionType) => option.value) || []
        : ref => (ref.state.value ? ref.state.value.value : ''),
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <ReactSelect
        ref={selectRef}
        defaultValue={defaultValue}
        options={options}
        {...rest}
      />
    </Container>
  );
};

export default Select;
