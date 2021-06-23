import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';
import WorkspaceCenterCard from './WorkspaceCenterCard';


const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: ${Colors.gray1};
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
    margin-top: 20px;

`;

const HeaderWrapper = styled.div`
    margin: 20px 20px 20px 20px;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: ${FontSize[16]};
    font-weight: 400;
    color: ${Colors.black};
    font-size: ${FontSize[16]};
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
                <WorkspaceCenterCard
                    image='./media/icons/entities2.svg'
                    title='Explor your '
                    boldText='entities'
                    description='Take a few minutes to look at the most imporatant elements and specificities of your eneities.'
                />
                <WorkspaceCenterCard
                    image='./media/icons/administration.svg'
                    title='Structure the '
                    boldText='ownership'
                    description='Get clear view of the ownership by looking at the relations between individuals and entities.'
                />
                <WorkspaceCenterCard
                    image='./media/icons/house.svg'
                    title='Define the '
                    boldText='calendar'
                    description='Prepare future events by creating deatils plans around the life of your entity.'
                />
            </CardWrapper>
        </Wrapper>
    );
}

export default WorkspaceCenter;