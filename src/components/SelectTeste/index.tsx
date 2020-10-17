import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';

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
      getValue: ref => ref.state.value,
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
      clearValue: ref => {
        ref.select.clearValue();
      },
    });
  }, [fieldName, registerField]);

  return (
    <ReactSelect
      ref={selectRef}
      defaultValue={defaultValue}
      options={options}
      {...rest}
    />
  );
};

export default Select;
