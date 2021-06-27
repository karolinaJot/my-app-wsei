import { ChangeEvent, FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Colors } from '../../styledHelpers/Colors';
import { IState } from '../../reducers';
import EntitiesHeader from './EntitiesHeader';
import EntitiesItem from './EntitiesItem';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { ISinglePhoto } from '../../entities/photos';

const Wrapper = styled.div`
    width: 900px;
    height: auto;
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

const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        padding: 5px 20px;
        margin: 5px;
        border-radius: 3px;
    };
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
    const [myPhotosList, setMyPhotosList] = useState<ISinglePhoto[]>([]);
    const [isfollowed, setIsFollowed] = useState<boolean>(false);


    useEffect(() => {
        setMyPhotosList([...photosList?.slice(0, 10), ...photosList?.slice(150, 161), ...photosList?.slice(250, 261)]);
    }, []);

    const handleSortClick = () => {
        myPhotosList?.sort(function (a, b) {
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
        setIsFullScreen(isFullScreen => !isFullScreen);
    };


    const handleCopyClick = () => {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setIsCopied(true);
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
    };

    const followedChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const text = e.target.value;

        text === "My" ? setIsFollowed(true) : setIsFollowed(false);
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
                followedChange={followedChangeHandler}
            />

            {!isfollowed &&
                <ItemsWrapper isMosaic={isMosaic} isFullScreen={isFullScreen}>

                    {isFullScreen &&
                        <ButtonBox>
                            <button onClick={handleFullScreenClick}>Close</button>
                        </ButtonBox>
                    }

                    {
                        myPhotosList?.map((photo) =>
                            (usersList[photo?.albumId - 1]?.company.name.toLocaleLowerCase()
                                .includes(inputText.toLocaleLowerCase())) &&
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
                </ItemsWrapper>
            }
            {isfollowed &&
                <ItemsWrapper isMosaic={isMosaic} isFullScreen={isFullScreen}>

                    {isFullScreen &&
                        <ButtonBox>
                            <button onClick={handleFullScreenClick}>Close</button>
                        </ButtonBox>
                    }

                    {
                        myPhotosList?.map((photo) =>
                            (usersList[photo?.albumId - 1]?.company.name.toLocaleLowerCase()
                                .includes(inputText.toLocaleLowerCase())) &&
                            photo.albumId === 1 &&
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
                </ItemsWrapper>
            }
        </Wrapper>
    )
}
export default Entities;