import React, { ReactChildren, ReactChild } from 'react';

import { StyledCol } from './styles';

interface Props {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children?: JSX.Element[] | ReactChild | ReactChildren;
}

const Col: React.FC<Props> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}) => {
  return (
    <StyledCol
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      {children}
    </StyledCol>
  );
};

export default Col;
