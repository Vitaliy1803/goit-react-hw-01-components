import styled from '@emotion/styled';
import { getRandomColor } from 'components/Utils/getRandomColor';

export const Stats = styled.section`
  display: flex;
  flex-direction: column;
  text-align: space-between;
  align-items: center;
  margin: 50px auto 50px;
  padding: 20px 0 0;
  width: 300px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 20px 0;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  text-align: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  padding: 10px;
  color: white;
  width: 40px;
  background-color: ${getRandomColor};
`;

export const Label = styled.span`
  display: flex;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
