import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-height: 200px;
  border-radius: 10px;
  background-color: lightgray;;
  margin-top: 5px;
  overflow-y: auto;
  padding: 5px;
  
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const Currency = styled.div`
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 7px;
  :last-child {
    margin-bottom: 0;
  }
`;