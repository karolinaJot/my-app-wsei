import React, { FC } from 'react';
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

    return(
        <Wrapper>
            <ResumeHeader></ResumeHeader>
            <ResumeItemsWrapper>
                <ResumeItem></ResumeItem>
                <ResumeItem></ResumeItem>
                <ResumeItem></ResumeItem>
                <ResumeItem></ResumeItem>
                <ResumeItem></ResumeItem>
                <ResumeItem></ResumeItem>
                <ResumeItem></ResumeItem>
                <ResumeItem></ResumeItem>
                <ResumeItem></ResumeItem>
                <ResumeItem></ResumeItem>
            </ResumeItemsWrapper>
            <ResumeNavigation></ResumeNavigation>
        </Wrapper>
    );

}