import { PageNotFoundWrapper, PageNotFoundText } from './styles';
import { Logo } from '../../components/UI/Icons/Logo';
import colors from '../../styles/colors';

const PageNotFound = () => (
  <PageNotFoundWrapper>
    <Logo color={colors.Blue} />
    <PageNotFoundText>
      Page Not Found 404
    </PageNotFoundText>
  </PageNotFoundWrapper>
);

export default PageNotFound;
