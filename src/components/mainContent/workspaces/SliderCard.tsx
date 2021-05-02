import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    width: 240px;
    height: 195px;
    border: 3px solid black;
    /* position: relative; */
    display: flex;
    flex-direction:column;
`;

const BackgroundBox = styled.div`
    width: 100%;
    height: 80px;
    background-color: purple;
`;

const IconBox = styled.div`
    width: 82px;
    height: 82px;
    background-color: grey;
    
`;

const HeaderWrapper = styled.div`
    /* position: absolute;
    top: 55px;
    left: 10px; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    transform: translateY(-22px);
    background-color: palevioletred;
`;

const Title = styled.span`
    display: block;
    font-size: ${FontSize[16]};
`;

const Details = styled.div`
    width: 100%;
    flex: 1;
    background-color: goldenrod;
    /* transform: translateY(-22px); */
`;

export const SliderCard: FC = () => {
    return (
        <Wrapper>
            <BackgroundBox></BackgroundBox>
            <HeaderWrapper>
                <IconBox></IconBox>
                <Title>Client contract</Title>
            </HeaderWrapper>
            <Details></Details>
        </Wrapper>

    );

}