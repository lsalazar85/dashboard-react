import styled, { css } from 'styled-components';
import colors from '../../styles/colors';
import { blink } from '../../styles/animations';

export const ExchangeRateWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ConvertSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.438rem;
  width: 80%;

  @media (min-width: 1000px) {
    max-width: 24.688rem;
  }
`;

export const ExchangeRateTitle = styled.span`
  font-weight: 500;
  font-size: 0.813rem;
  line-height: 1.063rem;
  margin-bottom: 0.563rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1.438rem;
  background: ${colors.White};
  border: 1px solid ${colors.Gray100};
  color: ${colors.Gray300};
  font-size: 1rem;
  gap: 1.188rem;
`;

export const InputValueMessageWrapper = styled.div`
  display: flex;
  margin-top: 0.438rem;
`;

export const InputValueMessage = styled.span`
  color: ${colors.Black};
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.938rem;
`;

export const CoinTypeWrapper = styled.div`
  display: flex;
`;

export const CoinType = styled.div`
  width: 100%;
  padding: 0.75rem 1.438rem;
  background: ${colors.White};
  border: 1px solid ${colors.Gray100};
  color: ${colors.Gray300};
  gap: 1.188rem;

  &:first-child {
    margin: 1rem 0;
  }

  @media (min-width: 200px) {
    font-size: 0.8rem;
  }

  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;

export const SwitchTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 200px) {
    width: 80%;
  }

  @media (min-width: 1000px) {
    width: 24.688rem;
  }
`;

export const SwitchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 200px) {
    width: 20%;
  }

  @media (min-width: 1000px) {
    width: 6.25rem;
  }
`;

export const SwitchIconBox = styled.div<{rotate?: boolean}>`
  border: 1px solid ${colors.Blue};
  background: ${colors.White};
  width: 2.688rem;
  height: 2.688rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  svg {
    color: ${colors.Blue};
    transition: 1s, transform 0.5s;
  }

  ${(props) => props.rotate && css`
    svg {
      transform: rotate(180deg);
    }
  `}

  ${(props) => !props.rotate && css`
    svg {
      transform: rotate(0deg);
    }
  `}
`;

export const TotalRate = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const TotalRateText = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.Blue};
  animation: ${blink} 0.3s ease-in;
`;

export const RateConversion = styled.div`
  display: flex;
  margin-top: 17px;
`;

export const RateConversionText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${colors.Black};
`;
