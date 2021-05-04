import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';



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


const NewPublicationText = styled.p`
    margin-bottom: 10px;
    margin-left: 5px;
    font-weight: 500;
    font-size: ${FontSize[16]};
    `;

const NewPublicationDetails = styled.div`
    margin: 5px;
    display: flex;
    justify-content: left;
    font-size: ${FontSize[14]};
    font-weight: 300;
`;

const Date = styled.span` 
    display: block;
`;

const ImageBox = styled.span`
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 50%;
    margin-left: 10px;
    overflow: hidden;
    

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Author = styled.span`
    padding-left: 5px;
    display: block;    
`;


const LatestPublicationsWrapper = styled.div`
    background-color: lightgreen;
    height: 100%;
    flex: 2;
`;

const HeaderText = styled.span`
`;

const ListItemsWrapper = styled.div``;
const ListItem = styled.div``;

const ListItemImg = styled.span`
    display: block;
    
`;
const ListItemInfo = styled.div``;
const ItemText = styled(NewPublicationText)`

`;

export const Publications: FC = () => {

    return (
        <Wrapper>
            <NewPublicationWrapper>
                <NewPublicationText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem odio fugiat et sequi illo ex consequuntur nulla voluptatum laborum ab!
                    </NewPublicationText>
                <NewPublicationDetails>
                    <Date>7 jan. 2020</Date>
                    <ImageBox>
                        <img src='./media/icons/userAvatar_2.jpg'></img>
                    </ImageBox>
                    <Author>Aniela Kowalska</Author>
                </NewPublicationDetails>
            </NewPublicationWrapper>
            <LatestPublicationsWrapper>
                <HeaderText>Latest Publications</HeaderText>
                <ListItemsWrapper>
                    <ListItem>
                        <ListItemImg></ListItemImg>
                        <ListItemInfo>

                            <ItemText>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Magni sed corrupti distinctio
                        </ItemText>
                            <NewPublicationDetails>
                                <Date>7 jan. 2020</Date>
                                <ImageBox>
                                    <img src='./media/icons/userAvatar_2.jpg'></img>
                                </ImageBox>
                                <Author>Aniela Kowalska</Author>
                            </NewPublicationDetails>
                        </ListItemInfo>
                    </ListItem>
                </ListItemsWrapper>
            </LatestPublicationsWrapper>
        </Wrapper>
    );

}