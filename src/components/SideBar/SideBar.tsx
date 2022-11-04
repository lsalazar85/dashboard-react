import logo from '../../images/logo.svg';
import { Image } from '../UI/Image';

import data from '../../data/data.json';

import {
  LogoWrapper,
  SideBarWrapper,
  SideBarSection,
  LogOutWrapper,
  LogOutBtn,
  MenuList,
  LiElement,
} from './styles';

const SideBar = () => {
  const { sideBar } = data;

  return (
    <SideBarWrapper>
      <LogoWrapper>
        <Image src={logo} width="200px" alt="Logo" />
      </LogoWrapper>
      <SideBarSection>
        <MenuList>
          {sideBar.map((item, idx) => (
            <LiElement key={idx}>{item.name}</LiElement>
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
