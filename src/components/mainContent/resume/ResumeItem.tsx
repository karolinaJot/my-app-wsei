import { FC } from 'react';
import styled from 'styled-components';


import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    margin: 15px 0;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
    background-color: ${Colors.white};
`;


const Title = styled.span`
    display: block;
    margin: 5px 0;   
    font-size: ${FontSize[16]}; 
    font-weight: 500;
    color: ${Colors.blue1};
`;

const Text = styled.p`
    display: block;
    margin-bottom: 5px; 
    font-size: ${FontSize[14]}; 

`;

const InfoWrapper = styled.div`
    margin-bottom: 5px; 
    font-size: ${FontSize[14]}; 
    display: flex;
    flex-direction: row;
    justify-content: left;

    span {
        display: block;
    }
`;

const LogoBox = styled.span`
    padding-right: 5px;
    width: 14px;

    img {
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
        width: 100%;
        object-fit: cover;
    };
`;

const IconBox = styled.span`
    padding-right: 5px;

    img {
        width: 60%;
        object-fit: cover;
    };
`;

const InfoText = styled.span`
    color: ${Colors.gray2};
    padding-right: 5px;
`;

const InfoDot = styled.span`
    font-size: ${FontSize[12]};
    color: ${Colors.gray2};
    font-weight: 700;
    padding-right: 10px;
`;



const Update = styled.span`
    color: ${Colors.gray1};

    span {
        display: inline-block;
    };
`;

interface IResumeItemProps {
    title: string;
    body: string;
    author: string;
    company: string
};


const ResumeItem: FC<IResumeItemProps> = (props: IResumeItemProps) =>{
    return(
        <Wrapper>
            <Title>{props.title}</Title>
            <Text>{props.body}</Text>
            <InfoWrapper>
                <LogoBox>
                    <img src='./media/icons/logo.png' alt='logo'></img>
                </LogoBox>
                <InfoText>{props.company}</InfoText>
                <InfoDot>.</InfoDot>
                <IconBox>
                    <img src='./media/icons/entities2.svg' alt='icon'></img>
                </IconBox>
                <InfoText>Corporate</InfoText>
                <InfoDot>.</InfoDot>
                <Update><span>Updated 3 days ago by</span> <span>{props.author}</span></Update>
            </InfoWrapper>
        </Wrapper>
    );
};

export default ResumeItem;