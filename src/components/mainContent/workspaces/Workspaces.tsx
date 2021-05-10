import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';
import { Slider } from '../workspaces/Slider'


const Wrapper =styled.div`
    min-height: 235px;
    width: 100%;
    display: flex;
    flex-direction: column;

`;

const SectionTitle = styled.span`
    font-size: ${FontSize[18]};
    font-weight: 700;
    display: block;
    color: grey;
    padding-left: 10px;
    margin: 25px 0 10px 0;
`;



export const Workspaces: FC = () => {
    return (
        <Wrapper>
            <SectionTitle>Workspaces</SectionTitle>
            <Slider></Slider>
        </Wrapper>
    );
}