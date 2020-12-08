import styled, { css } from 'styled-components';
import colSizes from '../../utils/colSizes';

interface StyledProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export const StyledCol = styled.div<StyledProps>`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;

  // Responsive breakpoints
  // Extra small <576px - Default content size: 100% of screen
  ${props =>
    props.xs
      ? css`@media (max-width: 576px) {
      -ms-flex: 0 0 ${colSizes[props.xs - 1]};
      flex: 0 0 ${colSizes[props.xs - 1]};
      max-width: ${colSizes[props.xs - 1]};
    `
      : css`@media (max-width: 576px) {
        -ms-flex: 0 0 ${colSizes[11]};
        flex: 0 0 ${colSizes[11]};
        max-width: ${colSizes[11]};
      }`
    }

  // Small >=576px
  ${props =>
    props.sm &&
    css`@media (min-width: 576.01px) {
      -ms-flex: 0 0 ${colSizes[props.sm - 1]};
      flex: 0 0 ${colSizes[props.sm - 1]};
      max-width: ${colSizes[props.sm - 1]};
    }`
  }


  // Medium >=768px
  ${props =>
    props.md &&
    css`@media (min-width: 768px) {
      -ms-flex: 0 0 ${colSizes[props.md - 1]};
      flex: 0 0 ${colSizes[props.md - 1]};
      max-width: ${colSizes[props.md - 1]};
    }`
  }

  // Large >=992px
  ${props =>
    props.lg &&
    css`@media (min-width: 992px) {
      -ms-flex: 0 0 ${colSizes[props.lg - 1]};
      flex: 0 0 ${colSizes[props.lg - 1]};
      max-width: ${colSizes[props.lg - 1]};
    }`
  }

  // Extra Large >=1200px
  ${props =>
    props.xl &&
    css`@media (min-width: 1200px) {
      -ms-flex: 0 0 ${colSizes[props.xl - 1]};
      flex: 0 0 ${colSizes[props.xl - 1]};
      max-width: ${colSizes[props.xl - 1]};
    }`
  }
`;
