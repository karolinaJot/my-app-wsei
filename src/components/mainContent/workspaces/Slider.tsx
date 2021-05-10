import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';
import { SliderCard } from './SliderCard';



const Wrapper = styled.div`
    /* border: 2px solid blue; */
    width: 1005;
    margin-top: 3px;
    display: flex;
    justify-content: left;
    flex: 1;
`;

export const Slider: FC = () => {

    return(
        
        <Wrapper>
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Client contract"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Contract"
                detailsHeaderUsers="150 users"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Supplier Contract"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Contract"
                detailsHeaderUsers="25 users"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Corporate"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Contract"
                detailsHeaderUsers="15 users"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Group Norms"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Norms"
                detailsHeaderUsers="45 users"
            />
            
          
        </Wrapper>
    
    );

}