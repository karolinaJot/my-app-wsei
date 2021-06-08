import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';



export const PublicationDetails = styled.div`
margin: 5px;
display: flex;
justify-content: left;
align-items: center;
font-size: ${FontSize[14]};
font-weight: 300;
`;


export const ImageBox = styled.span`
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 50%;
    margin-left: 10px;
    overflow: hidden;
    

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const PublicationText = styled.p`
    margin-bottom: 10px;
    margin-left: 5px;
    font-weight: 500;
    font-size: ${FontSize[16]};
    `;