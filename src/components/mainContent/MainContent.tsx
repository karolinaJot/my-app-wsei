import {FC} from 'react';
import styled from 'styled-components';

import { Publications } from './publications/Publications';
import { Workspaces } from './workspaces/Workspaces';
import { Resume } from './resume/Resume';

const Wrapper = styled.div`
    width: 900px;
    height: calc(auto - 50px);
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