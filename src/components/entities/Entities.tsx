import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';
import EntitiesHeader from './EntitiesHeader';
import EntitiesItem from './EntitiesItem';

const Wrapper = styled.div`
    border: 2px solid blue;
    width: 900px;
    height: calc(auto - 50px);
`;

const ItemsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
 `;



const Entities: FC = () => {
    return (
        <Wrapper>
            <EntitiesHeader></EntitiesHeader>
            <ItemsWrapper>
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/logo.png"
                    companyName="Lepsza Firma "
                    companyAddres="Warszawska 007, 34-000 Krakow, Poland"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/logo.png"
                    companyName="Lepsza Firma"
                    companyAddres="Warszawska 007, 34-000 Krakow, Poland"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/logo.png"
                    companyName="Lepsza Firma "
                    companyAddres="Warszawska 007, 34-000 Krakow, Poland"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/logo.png"
                    companyName="Lepsza Firma"
                    companyAddres="Warszawska 007, 34-000 Krakow, Poland"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/logo.png"
                    companyName="Lepsza Firma "
                    companyAddres="Warszawska 007, 34-000 Krakow, Poland"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/logo.png"
                    companyName="Lepsza Firma"
                    companyAddres="Warszawska 007, 34-000 Krakow, Poland"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/logo.png"
                    companyName="Lepsza Firma "
                    companyAddres="Warszawska 007, 34-000 Krakow, Poland"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/logo.png"
                    companyName="Lepsza Firma"
                    companyAddres="Warszawska 007, 34-000 Krakow, Poland"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                <EntitiesItem image="./media/icons/bg-image.jpg"
                    companyName="Super Company Ltd"
                    companyAddres="At the end of world 333, Vancuver 007, Canada"
                />
                
            </ItemsWrapper>
        </Wrapper>
    );
};

export default Entities;