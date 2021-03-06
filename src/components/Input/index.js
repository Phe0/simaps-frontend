import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

function Input({ name, icon: Icon, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      {Icon && <Icon size={20} color="#AAA" />}
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}

export default Input;
