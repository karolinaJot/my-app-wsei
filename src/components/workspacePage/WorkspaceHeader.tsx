import { FC } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    border: 2px solid red;
    width: 100%;
`;

const WorkspaceHeader: FC = () => {
    return (
        <Wrapper>Worspace Header</Wrapper>
    );
}
 
export default WorkspaceHeader;