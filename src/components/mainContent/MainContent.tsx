import {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 900px;
    background-color: pink;
    height: calc(100vh - 50px);
    border: solid 4px black;
    margin: 0 auto;
`

const MainContent: FC = () => {
    return (
        <Wrapper> hello from main content</Wrapper>
    );
}

export default MainContent;