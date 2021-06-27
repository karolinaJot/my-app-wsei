import { FC } from 'react';
import styled from 'styled-components';

import WorkspaceCenter from './WorkspaceCenter';
import WorkspaceHeader from './WorkspaceHeader';
import {Resume}  from '../mainContent/resume/Resume';


const Wrapper = styled.div`
    width: 900px;
`;
 
const Workspace: FC  = () => {
    return ( 
        <Wrapper>
            <WorkspaceHeader></WorkspaceHeader>
            <WorkspaceCenter></WorkspaceCenter>
            <Resume></Resume>
        </Wrapper>
     );
}
 
export default Workspace;