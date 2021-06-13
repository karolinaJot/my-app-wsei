import React, { ChangeEvent, FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';
import { IState } from '../../reducers';

import EntitiesHeader from './EntitiesHeader';
import EntitiesItem from './EntitiesItem';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import EntitiesListItem from './EntitiesListItem';

const Wrapper = styled.div`
    width: 900px;
    height: calc(auto - 50px);
    background-color: ${Colors.white};
    border-radius: 5px;
`;

const ItemsWrapper = styled.div<{ isMosaic: boolean; isFullScreen: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    ${props => !props.isMosaic && css`
        flex-direction: column;
    `}
    ${props => props.isFullScreen && css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: ${Colors.white};
    width: 100%;
    height: 100%;
    `}
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
    const [isSortedFromA, setIsSortedFromA] = useState<boolean>(true);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [isMosaic, setIsMosaic] = useState<boolean>(true);
    const [inputText, setInputText] = useState<string>("");
    const [isSearch, setIsSearch] = useState<boolean>(false);
    // dodać usestte z pustą tablicą
    // useEffect(() => {
    //     pusta settablica([...photolist.slice(0, 10), ...photosList.slice(150,160)])

    // },[])
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
        /* if (isFullScreen === false) {
            setIsFullScreen(true);
        } else setIsFullScreen(false); */
        setIsFullScreen(isFullScreen => !isFullScreen);
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
    };

    const handleListClick = () => {
        setIsMosaic(false);
    };

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
        setIsSearch(true);
    };


    return (
        <Wrapper>
            <EntitiesHeader clickFullScreen={handleFullScreenClick}
                clickSort={handleSortClick}
                clickCopy={handleCopyClick}
                clickMosaic={handleMosaicClick}
                clickList={handleListClick}
                changeText={inputHandler}
                isCopied={isCopied}
            />

            {/* {isSearch &&
                <ItemsWrapper>
                    {
                        // --------- coś tu nie działa, dubluje wyświetlane elementy  -
                        photosList.map((photo, index) =>
                            (index < 10) &&
                            <div>
                                {usersList[photo?.albumId - 1]?.company.name.toLocaleLowerCase()
                                    .includes(inputText.toLocaleLowerCase()) &&
                                    <EntitiesItem key={photo?.id}
                                        image={photo?.thumbnailUrl}
                                        companyName={usersList[photo?.albumId - 1]?.company.name}
                                        companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                        companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                        companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                        companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                                    />
                                }
                            </div>
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 150) && (index < 160) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                            />
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 250) && (index < 260) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                            />
                        )
                    }
                </ItemsWrapper>


            }

            {isSortedFromA &&
                <ItemsWrapper>
                    {
                        photosList.map((photo, index) =>
                            (index < 10) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                            />
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 150) && (index < 160) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                            />
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 250) && (index < 260) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
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
                                companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                            />
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 150) && (index < 160) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                            />
                        )
                    }
                    {
                        photosList.map((photo, index) =>
                            (index > 250) && (index < 260) &&
                            <EntitiesItem key={photo?.id}
                                image={photo?.thumbnailUrl}
                                companyName={usersList[photo?.albumId - 1]?.company.name}
                                companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
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
                                    companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                    companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                    companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                    companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                                />
                            )
                        }
                        {
                            photosList.map((photo, index) =>
                                (index > 150) && (index < 160) &&
                                <EntitiesItem key={photo?.id}
                                    image={photo?.thumbnailUrl}
                                    companyName={usersList[photo?.albumId - 1]?.company.name}
                                    companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                    companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                    companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                    companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                                />
                            )
                        }
                        {
                            photosList.map((photo, index) =>
                                (index > 250) && (index < 260) &&
                                <EntitiesItem key={photo?.id}
                                    image={photo?.thumbnailUrl}
                                    companyName={usersList[photo?.albumId - 1]?.company.name}
                                    companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                                    companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                                    companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                                    companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                                />
                            )
                        }
                    </ItemsWrapper>
                </FullScrennWrapper>

            } */}

            <ItemsWrapper isMosaic={isMosaic} isFullScreen={isFullScreen}>
                {/* <ul> */}
                {isFullScreen &&
                    <ButtonBox>
                        <button onClick={handleFullScreenClick}>Close</button>
                    </ButtonBox>
                }

                {
                    photosList.map((photo, index) =>
                        (index < 10) &&
                        <EntitiesItem key={photo?.id}
                            image={photo?.thumbnailUrl}
                            companyName={usersList[photo?.albumId - 1]?.company.name}
                            companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                            companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                            companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                            companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                            isMosaic={isMosaic}
                        />
                    )
                }
                {
                    photosList.map((photo, index) =>
                        (index > 150) && (index < 160) &&
                        <EntitiesItem key={photo?.id}
                            image={photo?.thumbnailUrl}
                            companyName={usersList[photo?.albumId - 1]?.company.name}
                            companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                            companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                            companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                            companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                            isMosaic={isMosaic}
                        />
                    )
                }
                {
                    photosList.map((photo, index) =>
                        (index > 250) && (index < 260) &&
                        <EntitiesItem key={photo?.id}
                            image={photo?.thumbnailUrl}
                            companyName={usersList[photo?.albumId - 1]?.company.name}
                            companyAddresCity={usersList[photo?.albumId - 1]?.address.city}
                            companyAddresZipCode={usersList[photo?.albumId - 1]?.address.zipcode}
                            companyAddresStreet={usersList[photo?.albumId - 1]?.address.street}
                            companyAddresSuite={usersList[photo?.albumId - 1]?.address.suite}
                            isMosaic={isMosaic}
                        />
                    )
                }
                {/* </ul> */}
            </ItemsWrapper>
        </Wrapper>
    )
}


export default Entities;