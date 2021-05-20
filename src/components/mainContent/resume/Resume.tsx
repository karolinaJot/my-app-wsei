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





const Wrapper =styled.div`
    height: auto;
    width: 100%;
`;

const ResumeItemsWrapper = styled.div``;

export const Resume: FC = () => {

    const { usersList, photosList, commentsList } = useSelector<IState, IUsersReducer & IPhotosReducer & ICommetsReducer >(state => ({
        ...state.users,
        ...state.photos,
        ...state.comments,
    
    }));

    const [inputText, setInputText] = useState<string>("");

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };



    return(
        <Wrapper>
            {console.log(commentsList)}
            <ResumeHeader changeText={inputHandler}/>
            <ResumeItemsWrapper>

                {/* <ResumeItem title= {commentsList[0].name}/> */}
                    
            
                <ResumeItem title="Company XVT"/>
                <ResumeItem title="Great Company"/>
                <ResumeItem title="Fantastic Foo"/>
                <ResumeItem title="Dreames job"/>
                <ResumeItem title="Great Company"/>
                <ResumeItem title="Fantastic Foo"/>
                <ResumeItem title="Dreames job"/>
                <ResumeItem title="World Company SAS"/>
                <ResumeItem title="World Company SAS"/> 
            </ResumeItemsWrapper>
            <ResumeNavigation></ResumeNavigation>
        </Wrapper>
    );

}