import { FC } from 'react';
import styled from 'styled-components';

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
                link="/clientcontract"

            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Supplier Contract"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Contract"
                detailsHeaderUsers="25 users"
                link="/suppliercontract"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Corporate"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Contract"
                detailsHeaderUsers="15 users"
                link="/corporate"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Group Norms"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Norms"
                detailsHeaderUsers="45 users"
                link="/groupnorms"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Real estate contracts"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Contract"
                detailsHeaderUsers="10 users"
                link="/realestatecontracts"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Next Item 1"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Super"
                detailsHeaderUsers="100 users"
                link="/nextitem"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Next Item 2"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Super"
                detailsHeaderUsers="200 users"
                link="/nextitem"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Next Item 3"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Super"
                detailsHeaderUsers="300 users"
                link="/nextitem"
            />
            <SliderCard
                bigIcon="./media/icons/entities2.svg"
                title="Next Item 4"
                smallIcon="./media/icons/entities2.svg"
                detailsHeaderText="Super"
                detailsHeaderUsers="400 users"
                link="/nextitem"
            />
        </Wrapper>
    );
}