import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import TopBar from '../topBar/TopBar';
import LeftBar from '../leftBar/LeftBar';
import MainContent from '../mainContent/MainContent';


const Wrapper = styled.div`
  margin: 0 auto;
  background-color: ${Colors.bg};
  `;
  
  const Content = styled.main`
    max-width: 1200px;
    display: flex;
    flex: 6;
    margin: 15px auto 0;
`;


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
