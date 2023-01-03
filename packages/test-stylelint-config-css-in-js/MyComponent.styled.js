import styled from 'styled-components';

export const MyComponent = styled.div`
  --var-a: 50px;
  --var-b: 50px;
  --var-1: 50px;
  --var-2: 50px;

  background-color: red;
  block-size: 50px;
  display: grid;
  inline-size: 50px;
  margin: 25px;
  margin-block-end: 50px;
  margin-block-start: 50px;
  margin-inline-end: 50px;
  margin-inline-start: 50px;
  text-align: end;

  &[dir='rtl'] {
    background-color: burlywood;
  }

  @media (min-width: 50px) {
    background-color: springgreen;
  }
`;
