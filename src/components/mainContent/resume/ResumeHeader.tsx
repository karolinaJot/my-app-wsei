import React, { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';
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

const FilerBox = styled.div`
    /* border: solid 1px grey; */
    margin-right: 50px;
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: row;
    padding: 5px;
    background-color: ${Colors.white};

`;

const Filter = styled.input`
   
color: lightgray;
    display: block;
    border: none;
    border-radius: 8%;
    width: 100%;
    height: 100%;

    &:focus {
        outline: none;
    };
`;

const FilterSubmit = styled.input`
   height: 100%;
   display: block;
   /* padding-right: 5px; */
   &:focus {
        outline: none;
    };
`;

const FollowBox = styled.span`
    color: #0381BE;
    margin-right: 10px;
`;


const ResumeHeader: FC = (props) =>{
    
    
    // const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     const text = e.target.value;
    //     props.setInputText(text);
    // };
    // value={props.inputText} onChange={inputHandler} 
    
    return(
        <Wrapper>
            <HeaderText>Resume your work</HeaderText>
            <RightSideWrapper>
                <FilerBox>
                    <Filter type='text'placeholder='Filter by title...'></Filter> 
                    <FilterSubmit type='image' alt='submit' src='./media/icons/search.png'></FilterSubmit>
                </FilerBox>
                <FollowBox>O Followed</FollowBox>
            </RightSideWrapper>
        </Wrapper>
    );
};

export default ResumeHeader;