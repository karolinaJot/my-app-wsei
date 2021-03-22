import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import TopBar from '../topBar/TopBar';
import LeftBar from '../leftBar/LeftBar';


const Wrapper = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${Colors.bg};
  `
  
  const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: calc(100vh - 30px);
`


const MainPage : FC = () => {
  return (
    <Wrapper>
      <TopBar />
      <Content>
        <LeftBar />
        <div>Hello from content</div>
      </Content>
    </Wrapper>
  );
}

export default MainPage;
