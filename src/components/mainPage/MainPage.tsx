import React, { FC } from 'react';
import styled from 'styled-components';

import TopBar from '../topBar/TopBar';
import LeftBar from '../leftBar/LeftBar';


const MainPage : FC = () => {
  return (
    <div>
      <TopBar />
      <LeftBar />
      <div>Hello</div>
    </div>
  );
}

export default MainPage;
