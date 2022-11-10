import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

export const SideBarWrapper = styled.div`
  border-right: 1px solid ${colors.Gray200};
  
  @media(min-width: 200px){
    display: none;
  }

  @media(min-width: 1024px){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0 0 16.875rem;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  padding: 2.188rem 1.3rem;
  background: ${colors.Blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideBarSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5rem;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const IconWrapper = styled.div``;

export const SectionName = styled.span`
    font-size: 0.875rem;
    font-weight: 500;
`;

export const LogOutWrapper = styled.div`
  width: 100%;
  font-size: 1rem;
  padding: 0 0 1.875rem 1.875rem;
`;

export const LogOutBtn = styled.button`
  background: transparent;
  font-size: 1rem;
  font-weight: 800;
`;

export const LiElement = styled.li`
  display: flex;
  align-items: center;
`;

export const SideBarItem = styled.button<{active: boolean, disabled: boolean}>`
  display: flex;
  width: 100%;
  align-items: center;
  background: ${colors.White};
  padding: 2rem;

  svg {
    color: ${colors.LightBlue};
    margin-right: 1.25rem;
  }

  ${(props) => props.active && css`
    background: ${colors.SecondaryLightBlue};
    svg {
      color: ${colors.Blue};
    }
  `}

  ${(props) => props.disabled && css`
    svg {
      color: ${colors.Gray};
    }
  `}

  ${(props) => !props.disabled && css`
    &:hover{
      background: ${colors.SecondaryLightBlue};
      svg {
        color: ${colors.Blue};
      }
    }
  `}
`;
