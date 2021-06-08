import React, { ChangeEvent, FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../../reducers';
import { ICommetsReducer } from '../../../reducers/commentsReducreds';
import { IPhotosReducer } from '../../../reducers/photosReducers';
import { IUsersReducer } from '../../../reducers/usersReducers';

import { Colors } from '../../../styledHelpers/Colors';
import ResumeHeader from './ResumeHeader';
import ResumeItem from './ResumeItem';






const Wrapper = styled.div`
    height: auto;
    width: 100%;
`;

const ResumeItemsWrapper = styled.div`
 `;

const ResumeNavigation = styled.div`
   padding-bottom: 20px;
   display: flex;
   text-align: center;

    ul {
        margin: 0 auto;
        display: flex;
    }
    
    ul li {
        padding: 10px;
        cursor: pointer;
    }

    ul li:active {
        background-color: grey;
    }
`;

export const Resume: FC = () => {

    const { usersList, photosList, commentsList } = useSelector<IState, IUsersReducer & IPhotosReducer & ICommetsReducer>(state => ({
        ...state.users,
        ...state.photos,
        ...state.comments,

    }));

    const [inputText, setInputText] = useState<string>("");
    const [currentPage, setCurentPage] = useState<number>(0);
    const [followed, setFollowed] = useState<string>("All");
    const [isAllFollowed, setIsAllFollowed] = useState<boolean>(true);

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };

    const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const text = e.target.value;
        setFollowed(text);
        text === "My" ? setIsAllFollowed(false) : setIsAllFollowed(true)


    };

    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setCurentPage(selected);
    }

    return (
        <Wrapper>
            <ResumeHeader changeText={inputHandler}
                changeFollowed={selectHandler}
            />
            {isAllFollowed &&
                <ResumeItemsWrapper>
                    {commentsList.slice(currentPage, currentPage + 10)
                        .map(comment =>
                            comment.name.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            <ResumeItem
                                key={comment.id}
                                title={comment.name}
                                body={comment.body}
                                author={usersList[comment.postId - 1] ? usersList[comment.postId - 1].name : usersList[1].name}
                                company={usersList[comment.postId - 1] ? usersList[comment.postId - 1].company.name : usersList[1].company.name}
                            />
                        )
                    }
                </ResumeItemsWrapper>
            }
            {!isAllFollowed &&
                <ResumeItemsWrapper>
                    {commentsList.slice(currentPage, currentPage + 10)
                        .map(comment =>
                            comment.name.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            comment.postId === 1 &&
                            <ResumeItem
                                key={comment.id}
                                title={comment.name}
                                body={comment.body}
                                author={usersList[comment.postId - 1] ? usersList[comment.postId - 1].name : usersList[1].name}
                                company={usersList[comment.postId - 1] ? usersList[comment.postId - 1].company.name : usersList[1].company.name}
                            />
                        )
                    }
                </ResumeItemsWrapper>

            }
            <ResumeNavigation>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={commentsList.length / 10}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                />
            </ResumeNavigation>
        </Wrapper>
    );

}