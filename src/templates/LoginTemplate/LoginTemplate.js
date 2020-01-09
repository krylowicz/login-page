import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right top, #3051b6, #415bc7, #5166d8, #6170e9, #717bfb);
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginTemplate = () => (
  <Wrapper>
    <h1>login</h1>
  </Wrapper>
);

export default LoginTemplate;
