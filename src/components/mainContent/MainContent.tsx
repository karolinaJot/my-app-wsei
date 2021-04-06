import React, {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 900px;
    background-color: pink;
    height: calc(100vh - 50px);
`

const MainContent: FC = () => {
    return (
        <Wrapper> hello from main content</Wrapper>
    );
}

export default MainContent;