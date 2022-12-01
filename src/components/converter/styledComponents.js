import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  background-color: rgba(67, 78, 78, 0.51);
`;

export const CurrencyBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

export const FirstBlockOfCurrency = styled.div`
  display: flex;
`;

export const SecondBlockOfCurrency = styled.div`
  display: flex;
`;

export const CurrencyInput = styled.input`
  width: 200px;
  height: 48px;
  background-color: lightgray;
  border: none;
  border-radius: 10px;
  outline: none;
  color: black;
  font-size: 30px;
  line-height: 30px;
  padding: 0 10px;
`;

export const CurrencySelection = styled.div`
  position: relative;
  height: 48px;
  width: 60px;
  margin: 0 5px;
  background-color: lightgray;
  border-radius: 10px;
  cursor: pointer;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.arrows});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;