import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Colors } from '../../styledHelpers/Colors';
import TopBar from '../topBar/TopBar';
import LeftBar from '../leftBar/LeftBar';
import MainContent from '../mainContent/MainContent';
import { UnderConstructionPage } from '../underConstructionPage/UnderConstructionPage';
import Profile from '../profile/Profile'; 
import Entities from '../entities/Entities';
import { getUsers } from '../../actions/usersActions';
import { getPhotos } from '../../actions/photosActions';
import { getComments } from '../../actions/commentsActions';
import { getPosts } from '../../actions/postsActions';
import Workspace from '../workspacePage/Workspace';
import { getWorkspaceTitle } from '../../actions/workspaceTitleActions';

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetComments = ReturnType<typeof getComments>;
type GetPosts = ReturnType<typeof getPosts>;
type GetWorkspaceTitle = ReturnType<typeof getWorkspaceTitle>;


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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetComments>(getComments());
    dispatch<GetPosts>(getPosts());
  }, []);

  return (
    <Router>
      <Wrapper>
        <TopBar />
        <Content>
          <LeftBar />
          <Switch>
            <Route path="/proposals" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/publications" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/people" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/entities" exact>
              <Entities />
            </Route>
            <Route path="/administration" exact>
              <UnderConstructionPage />
            </Route>
            <Route path="/clientcontract" exact>
              <Workspace />
            </Route>
            <Route path="/suppliercontract" exact>
              <Workspace />
            </Route>
            <Route path="/corporate" exact>
              <Workspace />
            </Route>
            <Route path="/groupnorms" exact>
              <Workspace />
            </Route>
            <Route path="/realestatecontracts" exact>
              <Workspace />
            </Route>
            <Route path="/nextitem" exact>
              <Workspace />
            </Route>
            <Route path="/profile" exact>
              <Profile />
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
