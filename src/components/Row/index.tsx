import React, { ReactChildren, ReactChild } from 'react';

import { StyledRow } from './styles';

interface Props {
  children?: JSX.Element[] | ReactChild | ReactChildren;
  styles?: React.CSSProperties;
  className?: string;
}

const Row: React.FC<Props> = ({ children, styles, className }) => {
  return (
    <StyledRow style={styles} className={className}>
      {children}
    </StyledRow>
  );
};

export default Row;
