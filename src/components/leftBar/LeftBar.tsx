import {FC} from 'react';
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import styled from 'styled-components';

import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
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
    
    border-bottom: solid 2px ${Colors.bg};
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
    display: block;
`;
const Job = styled.span`
    padding: 18px 0;
    text-align: center;
    font-size: ${FontSize[16]};
    color:  #B6B9C2;
    display: block;
`;
const CradLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 15px;

    ul {
        width: 100%;
    };
`;

const CardLinksItem = styled.li`
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    justify-content: space-between;
    align-items: center;


    span {
        padding: 0 10px;
    };
`;

const CardLinksItemIconBox = styled.span`
    
    img {

    };
`;

const CardLinksItemText = styled.span`
`;

const CardLinksItemBtn = styled.span`

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

    span {
        padding-left: 10px;
    };
`;

const CostumLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: ${Colors.black};
    text-align: left;
`;

const IconBox = styled.span`
    width: 30px;
    height: 30px;
`;

const LeftBar: FC = () => {


const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer >(state => ({
    ...state.users,
    ...state.photos

}));

    return (
        <Wrapper>
            {console.log(usersList)}
            {console.log(photosList)}
            <CurrentUserCard>
                <UserCardInfoWrapper>
                    <ImageBox>
                        <Link to="profile">
                            <img src={photosList[0]?.url} alt='user image'></img>
                        </Link>
                    </ImageBox>
                    <CostumLink to="profile">
                        <Name>{usersList[0]?.name}</Name>
                    </CostumLink>
                    <CostumLink to="profile">
                        <Job>{usersList[0]?.company.name}</Job>
                    </CostumLink>
                </UserCardInfoWrapper>
                <CradLinksWrapper>
                    <ul>
                        <CardLinksItem>
                            <CardLinksItemIconBox>
                                <Link to="network">
                                    <img src='./media/icons/network.png' alt='network icon'></img>
                                </Link>
                            </CardLinksItemIconBox>
                            <CostumLink to="network">
                                <CardLinksItemText>Your Network</CardLinksItemText>
                            </CostumLink>
                            <CardLinksItemBtn>
                                <Link to="network">
                                    <PersonButton type='button'></PersonButton>
                                </Link>
                            </CardLinksItemBtn>
                        </CardLinksItem>
                        <CardLinksItem>
                            <CardLinksItemIconBox>
                                <Link to="/publications">
                                    <img src='./media/icons/publications.png' alt='publications icon'></img>
                                </Link>
                            </CardLinksItemIconBox>
                            <CostumLink to="/publications">
                                <CardLinksItemText>Your Publications</CardLinksItemText>
                            </CostumLink>
                            <CardLinksItemBtn>
                                <Link to="/publications">
                                    <PlusButton type='button'></PlusButton>
                                </Link>
                            </CardLinksItemBtn>
                        </CardLinksItem>
                    </ul>
                </CradLinksWrapper>
            </CurrentUserCard>
            <LinksListWrapper>
                <ul>
                    <ListItem>
                        <IconBox>
                            <Link to="/publications">
                                <img src='./media/icons/publications.png' alt='publication icon'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/publications">
                            <span>Publications</span>
                        </CostumLink>
                    </ListItem>
                    <ListItem>
                        <IconBox>
                            <Link to="/ecosystem">
                                <img src='./media/icons/ecosystem.png' alt='ecosystem icon'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/ecosystem">
                            <span>Ecosystem</span>
                        </CostumLink>
                    </ListItem>
                    <ListItem>
                        <IconBox>
                            <Link to="/entities">
                                <img src='./media/icons/entities2.png' alt='entities icon'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/entities">
                            <span>Entities</span>
                        </CostumLink>
                    </ListItem>
                </ul>
            </LinksListWrapper>
        </Wrapper>
    )

}

export default LeftBar;