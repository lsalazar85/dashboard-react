import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

export const ButtonContainer = styled.button<{
  disabled?: boolean;
  secondary?: boolean;
}>`
  width: 8rem;
  justify-content: center;
  text-align: center;
  display: flex;
  font-weight: 600;
  padding: 0.625rem 0;
  font-size: 0.75rem;
  cursor: pointer;

  ${(props) => (props.secondary
    ? css`
          display: flex;
          background: ${colors.Blue};
          color: ${colors.White};
        `
    : css`
          background: ${colors.White};
          border: 1px solid ${colors.Blue};
          color: ${colors.Blue};
        `)};
`;
