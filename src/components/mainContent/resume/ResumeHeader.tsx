import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';


const Wrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
        display: block;
    };
`;

const HeaderText = styled.span`
    font-size: ${FontSize[18]};
    font-weight: 700;
    display: block;
    color: grey;
    margin-left: 10px;
`;

const RightSideWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const FilerBox = styled.span`
    color: lightgray;
    margin-right: 50px;
`;

const FollowBox = styled.span`
    color: #0381BE;
    margin-right: 10px;
`;


const ResumeHeader: FC = () =>{
    return(
        <Wrapper>
            <HeaderText>Resume your work</HeaderText>
            <RightSideWrapper>
                <FilerBox>Filter by title...</FilerBox>
                <FollowBox>O Followed</FollowBox>
            </RightSideWrapper>
        </Wrapper>
    );
};

export default ResumeHeader;