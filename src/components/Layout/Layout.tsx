import { LayoutContent, LayoutSide, LayoutWrapper } from './styles';
import { SideBar } from '../SideBar';
import { Header } from '../Header';

interface props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: props) => (
  <LayoutWrapper>
    <SideBar />
    <LayoutSide>
      <Header />
      <LayoutContent>{children}</LayoutContent>
    </LayoutSide>
  </LayoutWrapper>
);

export default Layout;
