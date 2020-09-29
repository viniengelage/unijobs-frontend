import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Label, Field } from './styles';

export default function Input({ name, type, label, placeholder}: { name: string, label: string, placeholder:string, type: string }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
      <Label>{label}: </Label>
      <Field ref={inputRef} defaultValue={defaultValue} placeholder={placeholder} />
    </>
  );
}
