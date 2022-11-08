import { SideBar } from '../SideBar';
import { Header } from '../Header';

import { LayoutContent, LayoutSide, LayoutWrapper } from './styles';

import { ChildrenElement } from '../../interfaces';

const Layout = ({ children }: ChildrenElement) => (
  <LayoutWrapper>
    <SideBar />
    <LayoutSide>
      <Header />
      <LayoutContent>{children}</LayoutContent>
    </LayoutSide>
  </LayoutWrapper>
);

export default Layout;
