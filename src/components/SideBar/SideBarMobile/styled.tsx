import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

export const SideBarMobileWrapper = styled.div`
  .bm-menu-wrap {
    position: absolute !important;
    left: 0;
    top: 6rem;
  }

  .bm-burger-button {
    position: relative;
    width: 1.813rem;
    height: 1.375rem;
    top: 2rem;
  }

  .bm-burger-bars {
    background: ${colors.Blue};
    position: relative;
  }

  .bm-cross-button {
    height: 1.5rem;
    width: 1.5rem;
  }

  .bm-cross {
    display: none;
  }

  .bm-menu {
    background: ${colors.White};
    border: 1px solid ${colors.Gray};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: ${colors.Gray400};
  }

  .bm-overlay {
    background: transparent !important;
  }
`;

export const SideBarLink = styled.button<{active?: boolean, disabled?: boolean, logout?: boolean}>`
  font-size: 1.2rem;
  color: ${colors.Black};
  text-decoration: none;
  margin-bottom: 0.625rem;
  transition: color 0.2s;
  cursor: pointer;

  ${(props) => props.active && css`
    font-weight: 700;
    color: ${colors.Blue};
  `}

  ${(props) => !props.active && css`
    font-weight: 500;
    color: ${colors.Blue};
  `}

  ${(props) => props.disabled && css`
    color: ${colors.Gray};
  `}
  
  ${(props) => props.logout && css`
    color: ${colors.Black};
    font-weight: 700;
    margin-top: 2rem;
  `}
`;
