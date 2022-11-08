import { useNavigate, useLocation } from 'react-router-dom';

import { Logo } from '../UI/Icons/Logo';

import { ICONS_ORDER } from '../../constants';
import data from '../../data/data.json';

import {
  LogoWrapper,
  SideBarWrapper,
  SideBarSection,
  LogOutWrapper,
  LogOutBtn,
  MenuList,
  LiElement,
  SideBarItem,
  SectionName,
  IconWrapper,
} from './styles';

const SideBar = () => {
  const { pages } = data;
  const navigate = useNavigate();
  const location = useLocation();

  const getAvailableRoute = (route: string) => (route === '/' ? navigate('/') : navigate(`/${route}`));
  const pathname = location.pathname.length > 1 ? location.pathname.slice(1) : location.pathname;

  const setLogOut = () => {
    window.localStorage.removeItem('name');
    navigate('/login');
  };

  return (
    <SideBarWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SideBarSection>
        <MenuList>
          {pages?.map((item, idx) => (
            <LiElement key={idx}>
              <SideBarItem
                onClick={() => getAvailableRoute(item.page)}
                active={pathname === item.page}
                disabled={!Object.keys(item.content).length}
                type="button"
              >
                <IconWrapper key={idx}>
                  {ICONS_ORDER[idx]?.element}
                </IconWrapper>
                <SectionName>{item.name}</SectionName>
              </SideBarItem>
            </LiElement>
          ))}
        </MenuList>
        <LogOutWrapper>
          <LogOutBtn onClick={() => setLogOut()} type="button">Log out</LogOutBtn>
        </LogOutWrapper>
      </SideBarSection>
    </SideBarWrapper>
  );
};

export default SideBar;
