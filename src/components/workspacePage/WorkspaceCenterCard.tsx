import { FC } from 'react';
import styled from 'styled-components';


import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';



const Wrapper = styled.div`
    background-color: ${Colors.white};
    width: 250px;
    height: 150px;
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    background-image: url('./media/icons/entities2.svg');
    background-position: right;
    background-repeat: no-repeat;
    background-size: 40%;
    font-size: ${FontSize[16]};
`;

const IconWrapper = styled.div`

    margin-top: 10px;

    img {
        width: 30px;
        height: 30px;
        fill: ${Colors.blue1};
    }
`;

const TitleWrapper = styled.div`

    margin: 10px 0;

    span {
        font-weight: 700;
    }
`;

const DetailsWrapper = styled.div`
    margin-bottom: 10px;
`
 
interface IWorkspaceCenterCard {
    image: string,
    title: string,
    boldText: string,
    description: string
}

const WorkspaceCenterCard: FC<IWorkspaceCenterCard> = (props: IWorkspaceCenterCard) => {
    return (
        <Wrapper>
            <IconWrapper>
                <img src={props.image} alt='entities icon'></img>
            </IconWrapper>
            <TitleWrapper>{props.title}<span>{props.boldText}</span></TitleWrapper>
            <DetailsWrapper>{props.description}</DetailsWrapper>
        </Wrapper>
    );
}
 
export default WorkspaceCenterCard;