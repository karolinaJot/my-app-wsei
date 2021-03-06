import { FC } from 'react';
import styled, { css } from 'styled-components';


import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';

const Wrapper = styled.div<{isMosaic: boolean}>`
    background-color: ${Colors.white};
    height: 70px;
    display: flex;
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
    margin-bottom: 1rem;
    ${props => !props.isMosaic && css`
        width: 100%;
    `}
`;

const ImageBox = styled.div`
    height: 100%;
    width: 70px;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding-left: 0.3rem;


    img {
        height: 90%;
        width: 90%;
    
    }
`;

const TextBox = styled.div`
    height: 100%;
    width: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CompanyName = styled.span`
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

interface IEntitiesItemProps {
    image: string;
    companyName: string;
    companyAddresCity: string;
    companyAddresZipCode: string;
    companyAddresStreet: string;
    companyAddresSuite: string;
    isMosaic: boolean;
};

const EntitiesItem: FC<IEntitiesItemProps> = (props: IEntitiesItemProps) => {
    
  
    
    return (
        <Wrapper isMosaic={props.isMosaic}>
            <ImageBox>
                <img src={props.image} alt='mosaic'></img>
            </ImageBox>
            <TextBox>
                <CompanyName>{props.companyName}</CompanyName> 
                <Addres>{props.companyAddresCity}, {props.companyAddresZipCode}, {props.companyAddresStreet} {props.companyAddresSuite}</Addres>
            </TextBox>
        </Wrapper>
    );
};

export default EntitiesItem;