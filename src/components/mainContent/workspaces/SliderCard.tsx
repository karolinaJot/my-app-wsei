import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    width: 240px;
    height: 195px;
    border: 3px solid black;
    display: flex;
    flex-direction:column;
`;

const BackgroundBox = styled.div`
    width: 100%;
    height: 80px;
    background-color: purple;
`;


const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: -1.5rem;
    background-color: transparent;
`;

const IconBox = styled.div`
    width: 82px;
    height: 82px;
    background-color: grey;
    margin-left: 1rem;
`;
const Title = styled.span`
    display: block;
    font-size: ${FontSize[16]};
    margin-left: 1rem;
`;

const Details = styled.div`
    width: 100%;
    flex: 1;
    background-color: goldenrod;
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