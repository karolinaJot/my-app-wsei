import React, { FC, useState } from 'react';
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
    background-color: ${Colors.white};
`;

const ItemsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
 `;

const FullScrennWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: ${Colors.white};
    width: 100%;
    height: 100%;

    
 `;

const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        padding: 5px 20px;
        margin: 5px;
        border-radius: 3px;
    }
 `;





const Entities: FC = () => {

    const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(state => ({
        ...state.users,
        ...state.photos
    }));

    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

    const handleFullScreenClick = () => {
        if (isFullScreen === false) {
            setIsFullScreen(true);
        } else setIsFullScreen(false);
    };


    return (
        <Wrapper>
            <EntitiesHeader clickFullScreen={handleFullScreenClick}></EntitiesHeader>
            {!isFullScreen &&
                <ItemsWrapper>
                    {
                        photosList.map((photo, index) =>
                            (index < 10) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                            // companyAddres={usersList[photo?.albumId]?.addres.city}
                            />
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 150) && (index < 160) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                            // companyAddres={usersList[photo?.albumId]?.addres.city}
                            />
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 250) && (index < 260) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                            // companyAddres={usersList[photo?.albumId]?.addres.city}
                            />
                        )
                    }
                </ItemsWrapper>
            }
            {isFullScreen &&

                <FullScrennWrapper>
                    <ButtonBox>
                        <button onClick={handleFullScreenClick}>Close</button>
                    </ButtonBox>
                    <ItemsWrapper>
                        {console.log("full screen mode")}
                        {
                            photosList.map((photo, index) =>
                                (index < 10) &&
                                <EntitiesItem key={photo?.id}
                                    image={photo?.thumbnailUrl}
                                    companyName={usersList[photo?.albumId - 1]?.company.name}
                                // companyAddres={usersList[photo?.albumId]?.addres.city}
                                />
                            )
                        }
                        {
                            photosList.map((photo, index) =>
                                (index > 150) && (index < 160) &&
                                <EntitiesItem key={photo?.id}
                                    image={photo?.thumbnailUrl}
                                    companyName={usersList[photo?.albumId - 1]?.company.name}
                                // companyAddres={usersList[photo?.albumId]?.addres.city}
                                />
                            )
                        }
                        {
                            photosList.map((photo, index) =>
                                (index > 250) && (index < 260) &&
                                <EntitiesItem key={photo?.id}
                                    image={photo?.thumbnailUrl}
                                    companyName={usersList[photo?.albumId - 1]?.company.name}
                                // companyAddres={usersList[photo?.albumId]?.addres.city}
                                />
                            )
                        }
                    </ItemsWrapper>
                </FullScrennWrapper>
            }


        </Wrapper>
    );
};

export default Entities;