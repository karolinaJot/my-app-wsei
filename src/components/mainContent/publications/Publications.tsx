import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';
import ListItem from './ListItem';
import { PublicationDetails, Date, ImageBox, Author, PublicationText } from './Common';



const Wrapper = styled.div`
    height: 300px;
    width: 100%;
    background-color: ${Colors.white};
    border: 2px solid black;
    display: flex;
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
`;

const NewPublicationWrapper = styled.div`
    background-color: lightcoral;
    height: 100%;
    flex: 1;
    background-image: linear-gradient(
        to top,
        rgba(156, 71, 143, 0.8),
        rgba(215, 171, 218, 0.4)), 
        url('./media/icons/bg-image.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${Colors.bg};
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

`;

const LatestPublicationsWrapper = styled.div`
    background-color: lightgreen;
    height: 100%;
    flex: 2;
`;

const HeaderText = styled.span`
    margin: 20px 0 10px 10px;
    font-size: ${FontSize[16]};
    font-weight: 700;
    letter-spacing: 0.4px;
`;

const ListItemsWrapper = styled.div`
     margin: 10px;
`;


export const Publications: FC = () => {

    return (
        <Wrapper>
            <NewPublicationWrapper>
                <PublicationText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem odio fugiat et sequi illo ex consequuntur nulla voluptatum laborum ab!
                </PublicationText>
                <PublicationDetails>
                    <Date>7 jan. 2020</Date>
                    <ImageBox>
                        <img src='./media/icons/userAvatar_2.jpg'></img>
                    </ImageBox>
                    <Author>Aniela Kowalska</Author>
                </PublicationDetails>
            </NewPublicationWrapper>
            <LatestPublicationsWrapper>
                <HeaderText>Latest Publications</HeaderText>
                <ListItemsWrapper>
                   <ListItem></ListItem>
                </ListItemsWrapper>
            </LatestPublicationsWrapper>
        </Wrapper>
    );

}