import {FC} from 'react';
import styled from 'styled-components';

import { Publications } from './Publications';
import { Workspaces } from './workspaces/Workspaces';
import { Resume } from './Resume';

const Wrapper = styled.div`
    width: 900px;
    
    height: calc(100vh - 50px);
    border: solid 4px black;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const MainContent: FC = () => {
    return (
        <Wrapper>
            <Publications></Publications>
            <Workspaces></Workspaces>
            <Resume></Resume>
        </Wrapper>
    );
}

export default MainContent;