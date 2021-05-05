import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';
import { PublicationDetails, Date, ImageBox, Author, PublicationText } from './Common';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

`;

const ListItemImg = styled.span`
    display: block;
    flex: 1;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
`;
const ListItemInfo = styled.div`
    flex: 6;
`;

const ItemText = styled(PublicationText)`

`;

const ListItem: FC = () => {

    return (
        <Wrapper>
            <ListItemImg>
                <img src='./media/icons/bg-image.jpg'></img>
            </ListItemImg>
            <ListItemInfo>
                <ItemText>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni sed corrupti distinctio
            </ItemText>
                <PublicationDetails>
                    <Date>7 jan. 2020</Date>
                    <ImageBox>
                        <img src='./media/icons/userAvatar_2.jpg'></img>
                    </ImageBox>
                    <Author>Aniela Kowalska</Author>
                </PublicationDetails>
            </ListItemInfo>
        </Wrapper>
    );

};

export default ListItem;