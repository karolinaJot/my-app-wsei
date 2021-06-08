import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';
import ListItem from './ListItem';
import { PublicationDetails, ImageBox, PublicationText } from './Common';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IPhotosReducer } from '../../../reducers/photosReducers';
import { IPostsReducers } from '../../../reducers/postsReducers';



const Wrapper = styled.div`
    background-color: ${Colors.white};
    height: auto;
    width: 100%;
    display: flex;
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
    overflow: hidden;
`;

const NewPublicationWrapper = styled.div`
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
    overflow: hidden;

`;

export const Date = styled.span` 
    display: block;
`;

const Author = styled.span`
    padding-left: 5px;
    display: block;
`;

const LatestPublicationsWrapper = styled.div`
    height: 100%;
    flex: 2;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.span`
    margin: 10px 0 0 10px;
    font-size: ${FontSize[18]};
    font-weight: 700;
    letter-spacing: 0.4px;
    color: grey;
    flex: 1;
`;


const ListItemsWrapper = styled.div`
     margin: 10px;
     display: flex;
     flex-direction: column;
     flex: 4;
`;


const LinkWrapper = styled.div`
    margin-left: 10px;
    margin-bottom: 10px;
    flex: 1;
`;

const CostumLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: #0381BE;
    text-align: left;
    font-size: ${FontSize[14]};
    font-weight: 500;
    letter-spacing: 0.4px;
`;


export const Publications: FC = () => {

    const { usersList, photosList, postsList } = useSelector<IState, IUsersReducer & IPhotosReducer & IPostsReducers>(state => ({
        ...state.users,
        ...state.photos,
        ...state.posts
    }));


    return (
        <Wrapper>
            {console.log(postsList)}
            {postsList && usersList &&
                <NewPublicationWrapper>
                    <PublicationText>
                        {postsList[0].title}
                    </PublicationText>
                    <PublicationDetails>
                        <Date>7 jan. 2020</Date>
                        <ImageBox>
                            <img src='./media/icons/userAvatar_2.jpg'></img>
                        </ImageBox>
                        <Author>{usersList[0].name}</Author>
                    </PublicationDetails>
                </NewPublicationWrapper>
            }
            {postsList && usersList && photosList &&
                <LatestPublicationsWrapper>
                    <HeaderText>Latest Publications</HeaderText>
                    <ListItemsWrapper>
                        <ListItem text={postsList[1].body}
                            image={photosList[postsList[1].userId].url}
                            author={usersList[postsList[1].userId].name}
                        />
                        <ListItem text={postsList[2].body}
                            image={photosList[postsList[2].userId].url}
                            author={usersList[postsList[2].userId].name}
                        />
                        <ListItem text={postsList[3].body}
                            image={photosList[postsList[3].userId].url}
                            author={usersList[postsList[3].userId].name}
                        />
                    </ListItemsWrapper>
                    <LinkWrapper>
                        <CostumLink to="publications"> See more publications</CostumLink>
                    </LinkWrapper>
                </LatestPublicationsWrapper>
            }
        </Wrapper>
    );

}