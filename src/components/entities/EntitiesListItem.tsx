import { FC } from 'react';
import styled from 'styled-components';
import { FontSize } from '../../styledHelpers/FontSizes';

// const List = styled.ul`
//     border: 2px solid green;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
// `;
const ListItem = styled.div`
    width: 100%;
    border: 1px solid red;

    li {
        text-decoration: none;
        height: 30px;
        display: flex;
    }

    `;

const ImageBox = styled.div`
    border: 1px solid pink;
    height: 100%;
    width: 30px;
    /* display: flex;
    align-items: center; */
    overflow: hidden;
    padding-left: 0.3rem;


    img {
        height: 90%;
        width: 90%;
    
    }
`;

const TextBox = styled.div`
    border: 1px solid blue;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CompanyName = styled.span`
    background-color: yellow;
    display: block;
    padding-top: 0.3rem;
    font-size: ${FontSize[16]};
    font-weight: 700;
    color:#0381BE;
`;

const Addres = styled.span`
    display: block;
    padding-bottom: 0.3rem;
    font-size: ${FontSize[12]};
    color: gray;

`;



interface IEntitiesListItemProps {
    image: string;
    companyName: string;
    companyAddres: string;
}

const EntitiesListItem: FC<IEntitiesListItemProps> = (props: IEntitiesListItemProps) => {
    return (
        <ListItem>
            <li>
                <ImageBox>
                    <img src={props.image}></img>
                </ImageBox>
                <TextBox>
                    <CompanyName>{props.companyName}</CompanyName>
                    <Addres>{props.companyAddres}</Addres>
                </TextBox>
            </li>
        </ListItem>
    );
}

export default EntitiesListItem;