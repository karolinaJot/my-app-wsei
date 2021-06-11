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
    margin-bottom: 10px;

    li {
        text-decoration: none;
        height: 30px;
        display: flex;
    }

    `;

const ImageBox = styled.div`
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
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

const CompanyName = styled.span`
    display: block;
    padding-top: 0.3rem;
    font-size: ${FontSize[16]};
    font-weight: 700;
    color:#0381BE;
    margin-right: 10px;
`;

const Addres = styled.span`
    display: block;
    padding-bottom: 0.3rem;
    font-size: ${FontSize[16]};
    color: gray;

`;



interface IEntitiesListItemProps {
    image: string;
    companyName: string;
    companyAddresCity: string;
    companyAddresZipCode: string;
    companyAddresStreet: string;
    companyAddresSuite: string;
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
                    <Addres>{props.companyAddresCity}, {props.companyAddresZipCode},
                     {props.companyAddresStreet} {props.companyAddresSuite}</Addres>
                </TextBox>
            </li>
        </ListItem>
    );
}

export default EntitiesListItem;