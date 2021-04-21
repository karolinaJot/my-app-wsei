import {FC} from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';



const Wrapper = styled.aside`
    flex: 2;
    margin-right: 40px;
`
const CurrentUserCard = styled.div`
    padding-top: 18px;
    background-color: ${Colors.white};
    border-radius: 3%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`
const UserCardInfoWrapper = styled.div`
    border-bottom: solid 1px ${Colors.bg};
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const ImageBox = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    };
`

const Name = styled.span`
    color: #5A6AB3;
    padding-top:18px;
    text-align: center;
    font-size: ${FontSize[18]};
`;
const Job = styled.span`
    padding: 18px 0;
    text-align: center;
    font-size: ${FontSize[16]};
    color:  #B6B9C2;
`;
const CradLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 15px;
`;

const CardLinksItem = styled.li`
    display: flex;
    position: relative;
    margin-bottom: 15px;


    span {
        padding-left: 10px;
    };
`;

const CardLinksItemIconBox = styled.span`
    
    img {

    };
`;

const CardLinksItemText = styled.span`
`;

const CardLinksItemBtn = styled.span`
    position: absolute;
    top: 0;
    right: -50%;

    button {
        width: 30px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: 16px;
        background-position: center;
        background-color: ${Colors.white};
        border: solid 1px ${Colors.black};
        border-radius: 10%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        
        &:focus {
            outline: none;
        };

        &:active {
            transform: translateY(-1px);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);

        };
    };
`;


const PersonButton = styled.button`
    background-image: url('./media/icons/people.png');
`;

const PlusButton = styled.button`
    background-image: url('./media/icons/plus.png');
`;


const LinksListWrapper = styled.div`
    margin-top: 20px;
`;

const ListItem = styled.li`
    display: flex;
    margin: 5px 0;

    a {
        text-decoration: none;
        cursor: pointer;
        color: black;
        text-align: left;
    };

    span {
        padding-left: 10px;
    };
`;

const IconBox = styled.span`
    width: 30px;
    height: 30px;
`;

const LeftBar: FC = () => {
    return (
        <Wrapper>
            <CurrentUserCard>
                <UserCardInfoWrapper>
                    <ImageBox>
                        <img src='./media/icons/userAvatar_2.jpg'></img>
                    </ImageBox>
                    <Name>Aniela Kowalska</Name>
                    <Job>Job title - Company</Job>
                </UserCardInfoWrapper>
                <CradLinksWrapper>
                    <ul>
                        <CardLinksItem>
                            <CardLinksItemIconBox>
                                <img src='./media/icons/network.png'></img>
                            </CardLinksItemIconBox>
                            <CardLinksItemText>Your Network</CardLinksItemText>
                            <CardLinksItemBtn>
                                <PersonButton type='button'></PersonButton>
                            </CardLinksItemBtn>
                        </CardLinksItem>
                        <CardLinksItem>
                            <CardLinksItemIconBox>
                                <img src='./media/icons/publications.png'></img>
                            </CardLinksItemIconBox>
                            <CardLinksItemText>Your Publications</CardLinksItemText>
                            <CardLinksItemBtn>
                                <PlusButton type='button'></PlusButton>
                            </CardLinksItemBtn>
                        </CardLinksItem>
                    </ul>
                </CradLinksWrapper>
            </CurrentUserCard>
            <LinksListWrapper>
                <ul>
                    <ListItem>
                        <IconBox>
                            <img src='./media/icons/publications.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Publications</span>
                        </a>
                    </ListItem>
                    <ListItem>
                        <IconBox>
                            <img src='./media/icons/ecosystem.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Ecosystem</span>
                        </a>
                    </ListItem>
                    <ListItem>
                        <IconBox>
                            <img src='./media/icons/entities2.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Entities</span>
                        </a>
                    </ListItem>
                </ul>
            </LinksListWrapper>
        </Wrapper>
    )

}

export default LeftBar;