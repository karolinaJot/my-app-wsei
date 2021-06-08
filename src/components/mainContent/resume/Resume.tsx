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
        padding-right: 10px;
        cursor: pointer;
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

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };

    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setCurentPage(selected);
    }

    return (
        <Wrapper>
            <ResumeHeader changeText={inputHandler} />
            {commentsList &&
                <ResumeItemsWrapper>
                    {commentsList.slice(currentPage, currentPage + 10)
                        .map(comment =>
                            <ResumeItem
                                key={comment.id}
                                title={comment.name}
                                body={comment.body}
                                author={usersList[comment.postId - 1] ? usersList[comment.postId - 1].name : usersList[0].name}
                                company={usersList[comment.postId - 1] ? usersList[comment.postId - 1].company.name : usersList[0].company.name}
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
                    breakClassName={'break-me'}
                    pageCount={commentsList.length / 10}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </ResumeNavigation>
        </Wrapper>
    );

}