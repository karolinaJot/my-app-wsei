import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';
import { PublicationDetails, ImageBox, PublicationText } from './Common';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

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

const Date = styled.span` 
    display: block;
    color: ${Colors.gray1};
`;

const Author = styled.span`
    padding-left: 5px;
    display: block;
    color: ${Colors.gray2};    
`;

interface IListItemProps {
    text: string,
    image: string,
    author: string,
}


const ListItem: FC<IListItemProps> = (props: IListItemProps) => {

    return (
        <Wrapper>
            <ListItemImg>
                <img src={props.image} alt='item image'></img>
            </ListItemImg>
            <ListItemInfo>
                <ItemText>{props.text}</ItemText>
                <PublicationDetails>
                    <Date>7 jan. 2020</Date>
                    <ImageBox>
                        <img src={props.image} alt='item image'></img>
                    </ImageBox>
                    <Author>{props.author}</Author>
                </PublicationDetails>
            </ListItemInfo>
        </Wrapper>
    );

};

export default ListItem;