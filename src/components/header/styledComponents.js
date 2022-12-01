import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  height: 40px;
  background-color: #273737;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  border-radius: 20px 20px 0 0;
`;

export const Rate = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: #c9c900;
  &:first-child {
    margin-right: 10px;
  }
`;