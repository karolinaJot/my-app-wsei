import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';



const Wrapper =styled.div`
    height: auto;
    width: 100%;
    background-color: ${Colors.white};
    border: 2px solid violet;
    flex: 1;

`;

export const Resume: FC = () => {

    return(
        <Wrapper>

        </Wrapper>
    );

}