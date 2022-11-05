import logo from '../../images/logo.svg';
import { Image } from '../UI/Image';

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
  SectionName,
} from './styles';

const SideBar = () => {
  const { sideBar } = data;

  return (
    <SideBarWrapper>
      <LogoWrapper>
        <Image src={logo} width="160px" alt="Logo" />
      </LogoWrapper>
      <SideBarSection>
        <MenuList>
          {sideBar.map((item, idx) => (
            <LiElement key={idx}>
              <div key={idx}>{ICONS_ORDER[idx].element}</div>
              <SectionName>{item.name}</SectionName>
            </LiElement>
          ))}
        </MenuList>
        <LogOutWrapper>
          <LogOutBtn type="button">Log out</LogOutBtn>
        </LogOutWrapper>
      </SideBarSection>
    </SideBarWrapper>
  );
};

export default SideBar;
