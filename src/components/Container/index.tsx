import React, { ReactChildren, ReactChild } from 'react';

import { StyledContainer } from './styles';

interface Props {
  children?: JSX.Element[] | ReactChild | ReactChildren;
}

const Container: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
