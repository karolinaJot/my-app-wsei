import { FC, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getWorkspaceTitle } from '../../actions/workspaceTitleActions';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';

type GetWorkspaceTitle = ReturnType<typeof getWorkspaceTitle>;

const Wrapper = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 230px;
    background-color: ${Colors.white};
    border: solid 1px ${Colors.gray2};
    z-index: 160;
`;

const FilterBox = styled.div`
    height: 30px;
    padding: 3px 10px;
    margin: 10px auto;
`;

const Filter = styled.input`
    border: solid 1px ${Colors.gray2};
    width: 100%;
    height: 100%;
    border-radius: 5%;

    &:focus {
        outline: none;
    };
`;

const MenuItemsWrapper = styled.div`
    height: 336px;
    border-bottom: solid 1px ${Colors.black};
    overflow: auto;
`;

const SectionTitle = styled.span`
    margin: 15px 0;
    display: block;
    color: ${Colors.gray2};
    font-weight: 700;
    text-align: left;
    padding-left: 10px;
`;

const AccountWrapper = styled.div`
    padding-top: 10px;
    border-bottom: solid 1px black;
`;

const MenuItem = styled.li`
    display: flex;
    font-size: ${FontSize[14]};
    align-items: center;
    margin: 5px 0;

    span {
        margin-left: 10px;
        display: block;
        font-size: ${FontSize[14]};
    }
`;

const CostumLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: ${Colors.black};
    display: flex;
    align-items: baseline;



    button {
        background-color: ${Colors.white};
        width: 200px;
        display: flex;
        justify-content:start;
        align-items: baseline;
        font-size: ${FontSize[14]};
        font-weight: 400;
        border: none;
    }
`;

const IconBox = styled.span`
    width: 30px;
    height: 30px;
    display: block;


    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    };
`;

const ImageBox = styled(IconBox)`
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    };
`;

const AccountUserName = styled.div`
    display: flex;
    flex-direction: column;
`;

const AccountUserLink = styled.span`
    color: ${Colors.blue1};
    font-size: ${FontSize[16]};
`;

const LogoutWrapper = styled.div`

`;

const LogoutBtn = styled.button`
    font-size: ${FontSize[16]};
    padding: 10px;
    width: 100%;
    cursor: pointer;
`;

const CostumList =styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;



const ExpandedMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };

    const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(state => ({
        ...state.users,
        ...state.photos

    }));

    const dispatch = useDispatch();


    return (
        <Wrapper>
            <FilterBox>
                <Filter type='text' value={inputText} onChange={inputHandler} placeholder='Filter...' ></Filter>
            </FilterBox>
            <MenuItemsWrapper>
                <SectionTitle>Platform</SectionTitle>
                <ul style={{marginLeft: "10px" }}>
                    <MenuItem>
                        {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/">
                                <IconBox>
                                    <img src='./media/icons/house2.png' alt='media image'></img>
                                </IconBox>
                                <span>Home</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/publications">
                                <IconBox>
                                    <img src='./media/icons/publications.png' alt='publication image'></img>
                                </IconBox>
                                <span>Publications</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/people">
                                <IconBox>
                                    <img src='./media/icons/people.png' alt='media image'></img>
                                </IconBox>
                                <span>People</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/entities">
                                <IconBox>
                                    <img src='./media/icons/entities.png' alt='media image'></img>
                                </IconBox>
                                <span>Entities</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/administration">
                                <IconBox>
                                    <img src='./media/icons/administration.png' alt='media image'></img>
                                </IconBox>
                                <span>Administration</span>
                            </CostumLink>
                        }
                    </MenuItem>
                </ul>
                <SectionTitle>Workspaces</SectionTitle>
                <ul>
                    <MenuItem>
                        {'Client Contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/clientcontract">
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    dispatch<GetWorkspaceTitle>(getWorkspaceTitle("Client Contract"));
                                }}>
                                    <IconBox>
                                        <img src='./media/icons/entities2.png' alt='media image'></img>
                                    </IconBox>
                                    <span> Client Contract</span>
                                </button>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Supplier Contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/suppliercontract">
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    dispatch<GetWorkspaceTitle>(getWorkspaceTitle("Supplier Contract"));
                                }}>
                                    <IconBox>
                                        <img src='./media/icons/entities2.png' alt='media image'></img>
                                    </IconBox>
                                    <span>Supplier Contract</span>
                                </button>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/corporate">
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    dispatch<GetWorkspaceTitle>(getWorkspaceTitle("Corporate"));
                                }}>
                                    <IconBox>
                                        <img src='./media/icons/entities2.png' alt='media image'></img>
                                    </IconBox>
                                    <span>Corporate</span>
                                </button>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/groupnorms">
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    dispatch<GetWorkspaceTitle>(getWorkspaceTitle("Group Norms"));
                                }}>
                                    <IconBox>
                                        <img src='./media/icons/entities2.png' alt='media image'></img>
                                    </IconBox>
                                    <span>Group Norms</span>
                                </button>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/realestatecontracts">
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    dispatch<GetWorkspaceTitle>(getWorkspaceTitle("Real estate Contract"));
                                }}>
                                    <IconBox>
                                        <img src='./media/icons/entities2.png' alt='media image'></img>
                                    </IconBox>
                                    <span>Real estate contracts</span>
                                </button>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Next Item'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/nextitem">
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    dispatch<GetWorkspaceTitle>(getWorkspaceTitle("Next Item 1"));
                                }}>
                                    <IconBox>
                                        <img src='./media/icons/entities2.png' alt='media image'></img>
                                    </IconBox>
                                    <span>Next Item 1</span>
                                </button>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Next Item'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/nextitem">
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    dispatch<GetWorkspaceTitle>(getWorkspaceTitle("Next Item 2"));
                                }}>
                                    <IconBox>
                                        <img src='./media/icons/entities2.png' alt='media image'></img>
                                    </IconBox>
                                    <span>Next Item 2</span>
                                </button>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Next Item'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/nextitem">
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    dispatch<GetWorkspaceTitle>(getWorkspaceTitle("Next Item 3"));
                                }}>
                                    <IconBox>
                                        <img src='./media/icons/entities2.png' alt='media image'></img>
                                    </IconBox>
                                    <span>Next Item 3</span>
                                </button>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Next Item'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/nextitem">
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    dispatch<GetWorkspaceTitle>(getWorkspaceTitle("Next Item 4"));
                                }}>
                                    <IconBox>
                                        <img src='./media/icons/entities2.png' alt='media image'></img>
                                    </IconBox>
                                    <span>Next Item 4</span>
                                </button>
                            </CostumLink>
                        }
                    </MenuItem>
                </ul>
            </MenuItemsWrapper>
            <AccountWrapper>
                <SectionTitle>Account</SectionTitle>
                <CostumList>
                    <MenuItem>
                        <ImageBox>
                            <Link to="profile">
                                <img src={photosList[0].url} alt='media image'></img>
                            </Link>
                        </ImageBox>
                        <AccountUserName>
                            <CostumLink to="profile">
                                <span>{usersList[0].name}</span>
                            </CostumLink>
                            <CostumLink to="profile">
                                <AccountUserLink>See profile</AccountUserLink>
                            </CostumLink>
                        </AccountUserName>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="privacy">
                                <img src='./media/icons/privacy.png' alt='media image'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="privacy">
                            <span>Privacy</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="settings">
                                <img src='./media/icons/settings.png' alt='media image'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="settings">
                            <span>Settings</span>
                        </CostumLink>
                    </MenuItem>
                </CostumList>
            </AccountWrapper>
            <LogoutWrapper>
                <LogoutBtn>Logout</LogoutBtn>
            </LogoutWrapper>
        </Wrapper>
    )
}

export default ExpandedMenu;