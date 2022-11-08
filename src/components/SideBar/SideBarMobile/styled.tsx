import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

export const SideBarMobileWrapper = styled.div<{
  dark?: boolean;
  light?: boolean;
  initial?: boolean;
}>`
  .bm-menu-wrap {
    left: 0;
    top: 4.688rem;
  }

  .bm-burger-button {
    position: fixed;
    width: 29px;
    height: 22px;
    left: 36px;
    top: 34px;
  }

  .bm-burger-bars {
    ${(props) => props.dark
      && css`
        @media (min-width: 200px) {
          background: ${colors.White};
        }
      `}

    ${(props) => props.light
      && css`
        @media (min-width: 200px) {
          background: ${colors.Black};
        }
      `}

    ${(props) => !props.dark
      && !props.light
      && css`
        @media (min-width: 200px) {
          background: ${colors.White};
        }
      `}
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    display: none;
  }

  .bm-menu {
    background: ${colors.Gray200};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-overlay {
    background: transparent !important;
  }
`;

export const SideBarLink = styled.a`
  font-size: 12px;
  color: ${colors.Black};
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.2s;
`;
