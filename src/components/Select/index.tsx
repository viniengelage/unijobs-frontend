import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, InputBlock, Error } from './styles';

interface OptionType {
  [key: string]: any;
}

interface SelectProps {
  label?: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  help?: string;
  options: OptionType[];
  isMulti?: boolean;
}

type SelectdValue = OptionType | OptionType[] | null;

const Select: React.FC<SelectProps> = ({
  label,
  name,
  icon: Icon,
  help,
  options,
  ...rest
}) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [show, setShow] = useState<boolean>(false);

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

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!selectRef);
  }, []);

  const showTooltip = () => {
    if (show || help === undefined) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const visible = show ? 'visible' : 'disable';

  const tooltip = (
    <i
      onMouseEnter={showTooltip}
      onMouseLeave={showTooltip}
      className="pi pi-info-circle ico"
    >
      <div id={visible} className="Tooltip">
        <div id="arrow" />
        <span id="help">{help}</span>
      </div>
    </i>
  );

  return (
    <InputBlock>
      <label htmlFor={name}>
        {label}
        {help ? tooltip : false}
      </label>
      <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        <ReactSelect
          ref={selectRef}
          defaultValue={defaultValue}
          options={options}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Container>
    </InputBlock>
  );
};

export default Select;
