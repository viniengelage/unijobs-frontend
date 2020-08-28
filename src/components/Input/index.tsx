import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Container, InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  help?: string;
}
const Input: React.FC<InputProps> = ({ label, name, icon: Icon,  help, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);
  
  const [show, setShow] = useState<boolean>(false);
  
  const showTooltip = ()  => {
    if (show || help === undefined) {
      setShow(false);
    }
    else {
      setShow(true);
    }
  }

  let visible = show? 'visible' : 'disable';

  const tooltip = (
    <i onMouseEnter={showTooltip} onMouseLeave={showTooltip} className="pi pi-info-circle ico">
      <div id={visible} className="Tooltip">
        <div id="arrow"></div>
        <span id="help">{help}</span>
      </div>
    </i>
  ) 

  return (
    <InputBlock>
      <label htmlFor={name}>
        {label}{help? tooltip : false}
      </label>
      <Container isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon />}
        <input
          name={name}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </Container>
    </InputBlock>
  );
};

export default Input;
