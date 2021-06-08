import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';
import { SliderCard } from './SliderCard';



const Wrapper = styled.div`
    height: 100%;
    margin-top: 3px;
    display: flex;
    
    overflow: auto;
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
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Real estate contracts"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Contract"
                detailsHeaderUsers="10 users"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Next Item"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Super"
                detailsHeaderUsers="100 users"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Next Item"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Super"
                detailsHeaderUsers="200 users"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Next Item"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Super"
                detailsHeaderUsers="300 users"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Next Item"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Super"
                detailsHeaderUsers="400 users"
            />
           
            
          
        </Wrapper>
    
    );

}