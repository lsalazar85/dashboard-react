import { useLocation, useNavigate } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import { SideBarMobileWrapper, SideBarLink } from './styled';

import data from '../../../data/data.json';
import { ISideMobileBar } from '../../../interfaces';

const SideBarMobile = ({ pageWrapId, outerContainerId }: ISideMobileBar) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pages } = data;

  const setLogOut = () => {
    window.localStorage.removeItem('name');
    navigate('/login');
  };

  const getAvailableRoute = (route: string) => (route === '/' ? navigate('/') : navigate(`/${route}`));
  const pathname = location.pathname.length > 1 ? location.pathname.slice(1) : location.pathname;

  return (
    <SideBarMobileWrapper>
      <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
        {pages.map((item, idx) => (
          <SideBarLink
            onClick={() => getAvailableRoute(item.page)}
            active={pathname === item.page}
            disabled={!Object.keys(item.content).length}
            key={idx}
          >
            {item.name}
          </SideBarLink>
        ))}
        <SideBarLink logout onClick={() => setLogOut()}>Log out</SideBarLink>
      </Menu>
    </SideBarMobileWrapper>
  );
};

export default SideBarMobile;
