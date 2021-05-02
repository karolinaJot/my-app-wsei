import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';



const Wrapper =styled.div`
    height: 300px;
    width: 100%;
    background-color: ${Colors.white};
    border: 2px solid black;

`;

export const Publications: FC = () => {

    return(
        <Wrapper>

        </Wrapper>
    );

}