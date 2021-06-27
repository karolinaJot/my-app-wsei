import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Wrapper = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    

`;

const ElementWrapper = styled.span`
    display: block;
    display: flex;
    align-items: center;
    margin-right: 20px;
`;
const ImageBox = styled.span`
    display: block;
    width: 30px;
    height: 100%;

    img {
        height: 90%;
        width: 90%;
    }
`;
const TextBox = styled.span`
    display: block;
    margin-left: 10px;
`;

const CostumLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: black;
    
`;


const ProfileHeaderTopBar: FC = () => {
    return (
        <Wrapper>
            <ElementWrapper>
                <ImageBox>
                    <img src='./media/icons/comments.svg' alt="icon"></img>
                </ImageBox>
                <TextBox>Message</TextBox>
            </ElementWrapper>
            <ElementWrapper>
                <ImageBox>
                    <img src='./media/icons/entities2.svg' alt='icon'></img>
                </ImageBox>
                <TextBox>Create a request</TextBox>
            </ElementWrapper>
            <ElementWrapper>
                <ImageBox>
                    <img src='./media/icons/entities2.svg' alt="icon"></img>
                </ImageBox>
                <TextBox>Add to a cluster</TextBox>
            </ElementWrapper>
            <ElementWrapper>
                <CostumLink to='/'>
                    <ImageBox>
                        <img src='./media/icony_z_sieci/close.png' alt=''></img>
                    </ImageBox>
                </CostumLink>
            </ElementWrapper>
        </Wrapper>
    );
};


export default ProfileHeaderTopBar;