import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';
import EntitiesHeader from './EntitiesHeader';
import EntitiesItem from './EntitiesItem';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';

const Wrapper = styled.div`
    border: 2px solid blue;
    width: 900px;
    height: calc(auto - 50px);
`;

const ItemsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
 `;



const Entities: FC = () => {

    const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(state => ({
        ...state.users,
        ...state.photos
    }));

    return (
        <Wrapper>
            <EntitiesHeader></EntitiesHeader>
            <ItemsWrapper>
                {
                    photosList.map((photo, index) => 
                        (index < 30) &&
                            <EntitiesItem image={photo?.url}
                                companyName={usersList[photo?.albumId -1]?.company.name}
                                // companyAddres={usersList[photo?.albumId]?.addres.city}
                            />
                        
                    )
                }
            </ItemsWrapper>
        </Wrapper>
    );
};

export default Entities;