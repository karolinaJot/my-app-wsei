import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import TopBar from '../topBar/TopBar';
import LeftBar from '../leftBar/LeftBar';
import MainContent from '../mainContent/MainContent';


const Wrapper = styled.div`
  max-width: 1285px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${Colors.bg};
  `
  
  const Content = styled.div`
   
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    height: calc(100vh - 50px);
    position: relative;
    
`


const MainPage : FC = () => {
  return (
    <Wrapper>
      <TopBar />
      <Content>
        <LeftBar />
        <MainContent />
      </Content>
    </Wrapper>
  );
}

export default MainPage;
