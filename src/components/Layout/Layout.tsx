import { LayoutContent } from './styles';

interface props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({children}: props) => {
  return (
    <>
      <LayoutContent>{children}</LayoutContent>
    </>
  );
};

export default Layout;
