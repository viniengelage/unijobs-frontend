import React, { ReactChildren, ReactChild } from 'react';

import { StyledRow } from './styles';

interface Props {
  children?: JSX.Element[] | ReactChild | ReactChildren;
}

const Row: React.FC<Props> = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
