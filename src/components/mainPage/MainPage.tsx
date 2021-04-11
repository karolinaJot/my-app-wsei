import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import TopBar from '../topBar/TopBar';
import LeftBar from '../leftBar/LeftBar';
import MainContent from '../mainContent/MainContent';


const Wrapper = styled.div`
  max-width: 1285px;
  margin: 0 auto;
  background-color: ${Colors.bg};
  `
  
  const Content = styled.main`
    display: flex;
    flex: 6;
    margin: 15px 88px 0 25px
   
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
