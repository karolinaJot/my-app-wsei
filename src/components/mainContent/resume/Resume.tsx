import React, { ChangeEvent, FC, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../../reducers';
import { ICommetsReducer } from '../../../reducers/commentsReducreds';
import { IPhotosReducer } from '../../../reducers/photosReducers';
import { IUsersReducer } from '../../../reducers/usersReducers';

import { Colors } from '../../../styledHelpers/Colors';
import ResumeHeader from './ResumeHeader';
import ResumeItem from './ResumeItem';
import ResumeNavigation from './ResumeNavigation';





const Wrapper = styled.div`
    height: auto;
    width: 100%;
`;

const ResumeItemsWrapper = styled.div`
 `;

export const Resume: FC = () => {

    const { usersList, photosList, commentsList } = useSelector<IState, IUsersReducer & IPhotosReducer & ICommetsReducer>(state => ({
        ...state.users,
        ...state.photos,
        ...state.comments,

    }));

    const [inputText, setInputText] = useState<string>("");

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };



    return (
        <Wrapper>
            <ResumeHeader changeText={inputHandler} />
            {commentsList &&
                <ResumeItemsWrapper>
                    {
                        commentsList.map(comment => 
                            <ResumeItem
                                key={comment.id}
                                title={comment.name}
                                body={comment.body}
                                author={usersList[comment.postId -1]? usersList[comment.postId -1].name : usersList[0].name  }
                                company={usersList[comment.postId - 1]? usersList[comment.postId -1].company.name : usersList[0].company.name }
                            />
                        )
                    }
                </ResumeItemsWrapper>
            }
            <ResumeNavigation></ResumeNavigation>
        </Wrapper>
    );

}