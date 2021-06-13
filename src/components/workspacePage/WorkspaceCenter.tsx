import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';
import WorkspaceCenterCard from './WorkspaceCenterCard';


const Wrapper = styled.div`
    border: 2px solid green;
    width: 100%;
    background-color: #c0c0c0;
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
    margin-top: 20px;

`;

const HeaderWrapper = styled.div`
    margin: 10px 20px 20px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: ${FontSize[16]};
    font-weight: 400;
    color: ${Colors.black};
`;

const CardWrapper = styled.div`
    margin: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;





const WorkspaceCenter: FC = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <span>Start working on corporate matters</span>
                <span>Hide</span>
            </HeaderWrapper>
            <CardWrapper>
                <WorkspaceCenterCard />
                <WorkspaceCenterCard />
                <WorkspaceCenterCard />
            </CardWrapper>
        </Wrapper>
    );
}

export default WorkspaceCenter;