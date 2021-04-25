import { FC } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Colors } from '../../styledHelpers/Colors';
import TopBar from '../topBar/TopBar';
import LeftBar from '../leftBar/LeftBar';
import MainContent from '../mainContent/MainContent';
import { UnderConstructionPage } from '../underConstructionPage/UnderConstructionPage';


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
    <Router>
      <Wrapper>
        <TopBar />
        <Content>
          <LeftBar />
          <Switch>
            <Route path="/publications" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/people" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/entities" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/administration" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/clientcontract" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/suppliercontract" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/corporate" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/groupnorms" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/realestatecontracts" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/nextitem" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/profile" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/privacy" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/settings" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/ecosystem" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/network" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/" exact>
              <MainContent />
            </Route>
          </Switch>
        </Content>
      </Wrapper>
    </Router>
  );
}

export default MainPage;
