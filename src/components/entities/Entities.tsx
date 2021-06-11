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
import EntitiesListItem from './EntitiesListItem';

const Wrapper = styled.div`
    width: 900px;
    height: calc(auto - 50px);
    background-color: ${Colors.white};
    border-radius: 5px;
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

const ListWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid green;
`;





const Entities: FC = () => {

    const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(state => ({
        ...state.users,
        ...state.photos
    }));

    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    const [isSortedFromA, setIsSortedFromA] = useState<boolean>(true);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [isMosaic, setIsMosaic] = useState<boolean>(true);

    const handleSortClick = () => {
        photosList?.sort(function (a, b) {
            let nameA = usersList[a.albumId - 1]?.company.name;
            let nameB = usersList[b.albumId - 1]?.company.name;

            if (nameA < nameB) {
                return isSortedFromA ? -1 : 1
            }
            if (nameA > nameB) {
                return isSortedFromA ? 1 : -1
            }
            else {
                return 0
            }

        })

        isSortedFromA ? setIsSortedFromA(false) : setIsSortedFromA(true);
    }


    const handleFullScreenClick = () => {
        if (isFullScreen === false) {
            setIsFullScreen(true);
        } else setIsFullScreen(false);
    };


    const handleCopyClick = () => {
        console.log("copy");
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setIsCopied(true);
        console.log("copied");
    };

    const handleMosaicClick = () => {
        setIsMosaic(true);
    }

    const handleListClick = () => {
        setIsMosaic(false);
    }


    return (
        <Wrapper>
            <EntitiesHeader clickFullScreen={handleFullScreenClick}
                clickSort={handleSortClick}
                clickCopy={handleCopyClick}
                clickMosaic={handleMosaicClick}
                clickList={handleListClick}
            />

            {/* {isSortedFromA &&
                <ItemsWrapper>
                    {
                        photosList.map((photo, index) =>
                            (index < 10) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddres={usersList[photo?.albumId -1]?.addres.city}
                            />
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 150) && (index < 160) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddres={usersList[photo?.albumId -1]?.addres.city}
                            />
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 250) && (index < 260) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddres={usersList[photo?.albumId -1]?.addres.city}
                            />
                        )
                    }
                </ItemsWrapper>
            }

            {!isSortedFromA &&
                <ItemsWrapper>
                    {
                        photosList.map((photo, index) =>
                            (index < 10) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddres={usersList[photo?.albumId -1]?.addres.city}
                            />
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 150) && (index < 160) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddres={usersList[photo?.albumId -1]?.addres.city}
                            />
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 250) && (index < 260) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddres={usersList[photo?.albumId -1]?.addres.city}
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
                                    companyAddres={usersList[photo?.albumId -1]?.addres.city}
                                />
                            )
                        }
                        {
                            photosList.map((photo, index) =>
                                (index > 150) && (index < 160) &&
                                <EntitiesItem key={photo?.id}
                                    image={photo?.thumbnailUrl}
                                    companyName={usersList[photo?.albumId - 1]?.company.name}
                                    companyAddres={usersList[photo?.albumId -1]?.addres.city}
                                />
                            )
                        }
                        {
                            photosList.map((photo, index) =>
                                (index > 250) && (index < 260) &&
                                <EntitiesItem key={photo?.id}
                                    image={photo?.thumbnailUrl}
                                    companyName={usersList[photo?.albumId - 1]?.company.name}
                                    companyAddres={usersList[photo?.albumId -1]?.addres.city}
                                />
                            )
                        }
                    </ItemsWrapper>
                </FullScrennWrapper>

            } */}

            {!isMosaic &&
                <ListWrapper>
                    <ul>

                        {
                            photosList.map((photo, index) =>
                                (index < 10) &&
                                <EntitiesListItem key={photo?.id}
                                    image={photo?.thumbnailUrl}
                                    companyName={usersList[photo?.albumId - 1]?.company.name}
                                    companyAddres={usersList[photo?.albumId - 1]?.address.city}
                                />
                            )
                        }
                        {
                            photosList.map((photo, index) =>
                                (index > 150) && (index < 160) &&
                                <EntitiesListItem key={photo?.id}
                                    image={photo?.thumbnailUrl}
                                    companyName={usersList[photo?.albumId - 1]?.company.name}
                                    companyAddres={usersList[photo?.albumId - 1]?.address.city}
                                />
                            )
                        }
                        {
                            photosList.map((photo, index) =>
                                (index > 250) && (index < 260) &&
                                <EntitiesListItem key={photo?.id}
                                    image={photo?.thumbnailUrl}
                                    companyName={usersList[photo?.albumId - 1]?.company.name}
                                    companyAddres={usersList[photo?.albumId - 1]?.address.city}
                                />
                            )
                        }
                    </ul>
                </ListWrapper>
            }
        </Wrapper>
    )
}


export default Entities;