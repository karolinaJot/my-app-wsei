import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    
    width: 240px;
    height: auto;
    display: flex;
    flex-direction:column;
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
`;

const BackgroundBox = styled.div`
    width: 100%;
    height: 80px;
    background-image: url('./media/icons/bg-image.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
`;


const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: -1.5rem;
    background-color: transparent;
`;

const IconBox = styled.div`
    width: 82px;
    height: 82px;
    background-color: ${Colors.white};
    margin-left: 1rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);

  
    img {
        padding-top: 5px;
        width: 80%;
        height: 80%;
        object-fit: cover;
        
    };
`;
const Title = styled.span`
    display: block;
    font-size: ${FontSize[16]};
    margin-left: 1rem;
`;

const Details = styled.div`
    margin: 5px 0;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: ${FontSize[14]};
`;

const DetailsHeader = styled.div`
    display: flex;
    justify-content: left;
    margin-right: 2rem;
    margin: 5px 0 5px 10px;

`;

const DetailsHeaderIcon = styled.span`
    width: 16px;
    padding-left: 0.5rem;

    img {
        width: 80%;
        object-fit: cover;

    };
`;

const DetailsHeaderText = styled.span`
    padding-left: 0.3rem;
`;

const DetailsHeaderDot = styled.span`
    padding-left: 0.5rem;
    font-size:${FontSize[12]};
    font-weight: 700;

`;


const UpdateInfo = styled.span`
    font-size: ${FontSize[10]};
    margin-left: 15px;
    margin-top: 5px;
    color: grey;
`;

export const SliderCard: FC = () => {
    return (
        <Wrapper>
            <BackgroundBox></BackgroundBox>
            <HeaderWrapper>
                <IconBox>
                        <img src='./media/icons/entities2.svg' alt='icon'></img>
                </IconBox>
                <Title>Client contract</Title>
            </HeaderWrapper>
            <Details>
                <DetailsHeader>
                    <DetailsHeaderIcon>
                        <img src='./media/icons/entities2.svg' alt='icon'></img>
                    </DetailsHeaderIcon>
                    <DetailsHeaderText>Contract</DetailsHeaderText>
                    <DetailsHeaderDot>.</DetailsHeaderDot>
                    <DetailsHeaderIcon>
                        <img src='./media/icons/people.svg' alt='icon'></img>
                    </DetailsHeaderIcon>
                    <DetailsHeaderText>150 users</DetailsHeaderText>
                </DetailsHeader>
                <UpdateInfo>Last update 2 days ago</UpdateInfo>
            </Details>
        </Wrapper>

    );

}