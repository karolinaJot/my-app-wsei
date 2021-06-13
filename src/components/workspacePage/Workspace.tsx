import { FC } from 'react';
import styled from 'styled-components';
import WorkspaceCenter from './WorkspaceCenter';
import WorkspaceHeader from './WorkspaceHeader';
import WorkspaceUpdates from './WorkspaceUpdates';


const Wrapper = styled.div`
    width: 900px;
`;
 
const Workspace: FC  = () => {
    return ( 
        <Wrapper>
            <WorkspaceHeader></WorkspaceHeader>
            <WorkspaceCenter></WorkspaceCenter>
            <WorkspaceUpdates></WorkspaceUpdates>
        </Wrapper>
     );
}
 
export default Workspace;