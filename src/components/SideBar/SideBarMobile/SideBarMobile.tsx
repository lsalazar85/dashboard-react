import { slide as Menu } from 'react-burger-menu';
import { SideBarMobileWrapper, SideBarLink } from './styled';

interface ISideBar {
  pageWrapId: string;
  outerContainerId: string;
  dark?: boolean;
  light?: boolean;
  initial?: boolean;
}

const SideBarMobile = ({
  pageWrapId,
  outerContainerId,
  dark,
  light,
  initial,
}: ISideBar) => (
  <SideBarMobileWrapper dark={dark} light={light} initial={initial}>
    <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
      <SideBarLink href="/shopAll">Shop All</SideBarLink>

      <SideBarLink href="/drops">Drops</SideBarLink>

      <SideBarLink href="/memberships">Membership</SideBarLink>
    </Menu>
  </SideBarMobileWrapper>
);

export default SideBarMobile;
