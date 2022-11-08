import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.Gray200};
  padding: 24px 30px;
`;

export const HeaderSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
`;

export const DateText = styled(Text)`
  @media (min-width: 200px) {
    display: none;
  }

  @media (min-width: 1000px) {
    display: inline-block;
  }
`;

export const Notifications = styled.div`
  margin-left: 1rem;
  cursor: pointer;
  position: relative;

  &:after {
    content: '1';
    background: ${colors.Red};
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    border-radius: 50%;
    border: 1px solid ${colors.White};
    font-size: 0.625rem;
    color: ${colors.White};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    top: 0;
    right: -0.3rem;
  }

  svg {
    color: ${colors.Blue};
  }
`;

export const ExchangeRateDate = styled.div`
  @media (min-width: 200px) {
    display: none;
  }

  @media (min-width: 1000px) {
    display: inline-block;
  }
`;

export const HeaderMobileLogo = styled.div`
  @media (min-width: 200px) {
    display: inline-block;
    
    svg {
      margin-left: 3rem;
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;
