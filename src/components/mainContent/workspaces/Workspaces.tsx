import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';
import { Slider } from '../workspaces/Slider'


const Wrapper =styled.div`
    height: 235px;
    width: 100%;
    background-color: ${Colors.white};
    border: 2px solid greenyellow;
    display: flex;
    flex-direction: column;

`;

const SectionTitle = styled.span`
    font-size: ${FontSize[18]};
    font-weight: 700;
    display: block;
    color: grey;
    padding: 10px;
`;



export const Workspaces: FC = () => {
    return (
        <Wrapper>
            <SectionTitle>Workspaces</SectionTitle>
            <Slider></Slider>
        </Wrapper>
    );
}