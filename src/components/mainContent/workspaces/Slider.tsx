import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';
import { SliderCard } from './SliderCard';



const Wrapper = styled.div`
    border: 2px solid blue;
    flex: 1;
`;

export const Slider: FC = () => {

    return(
        
        <Wrapper>
            <SliderCard></SliderCard>
        </Wrapper>
    
    );

}