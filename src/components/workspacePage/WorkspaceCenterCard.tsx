import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';



const Wrapper = styled.div`
    border: 2px solid red;
    background-color: ${Colors.white};
    width: 250px;
    height: 150px;
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;

`;
 
const WorkspaceCenterCard: FC = () => {
    return (
        <Wrapper>Card</Wrapper>
    );
}
 
export default WorkspaceCenterCard;