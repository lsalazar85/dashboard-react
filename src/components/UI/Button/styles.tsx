import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

export const ButtonContainer = styled.button<{
  disabled?: boolean;
  secondary?: boolean;
}>`
  display: flex;
  font-weight: 600;
  padding: 0.625rem 1.9rem;
  font-size: 0.75rem;
  cursor: pointer;
  
  ${(props) => (props.secondary
    ? css`
          background: ${colors.Blue};
          color: ${colors.White};
          cursor: no-drop;
        `
    : css`
          background: ${colors.White};
          border: 1px solid ${colors.Blue};
          color: ${colors.Blue};
        `)};
`;
