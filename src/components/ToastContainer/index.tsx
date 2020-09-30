import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTrasitions = useTransition(
    messages,
    message => message.id,
    {
      from: { left: '-120%', opacity: 0 },
      enter: { left: '0%', opacity: 1 },
      leave: { left: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTrasitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
