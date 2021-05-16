import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';

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

    const [inputText, setInputText] = useState<string>("");

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };

    return(
        <Wrapper>
            <ResumeHeader changeText={inputHandler}/>
            <ResumeItemsWrapper>
                <ResumeItem title="World Company SAS"/>
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