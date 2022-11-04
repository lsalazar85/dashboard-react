import styled from 'styled-components';
import colors from '../../styles/colors';

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 16.875rem;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${colors.Blue};
  justify-content: center;
  align-items: center;
`;

export const SideBarSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const LiElement = styled.li``;

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
