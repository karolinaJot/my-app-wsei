import { FC, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 230px;
    background-color: ${Colors.white};
    border: solid 1px gray;
    z-index: 160;
`;

const FilterBox = styled.div`
    height: 30px;
    padding: 3px 10px;
    margin: 10px auto;
`;

const Filter = styled.input`
    border: solid 1px grey;
    width: 100%;
    height: 100%;
    border-radius: 5%;

    &:focus {
        outline: none;
    };
`;

const MenuItemsWrapper = styled.div`
    height: 336px;
    border-bottom: solid 1px black;
    overflow: auto;
`;

const SectionTitle = styled.span`
    margin: 15px 0;
    display: block;
    color: gray;
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
    margin: 5px 0;

    span {
        padding-left: 10px;
        display: inline-block;
    }
`;

const CostumLink = 
styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: black;
    text-align: left;
`;

const IconBox = styled.span`
    width: 30px;
    height: 30px;
    display: block;
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
    color: blue;
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



const ExpandedMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return (
        <Wrapper>
            <FilterBox>
                <Filter type='text' value={inputText} onChange={inputHandler} placeholder='Filter...' ></Filter>
            </FilterBox>
            <MenuItemsWrapper>
                <SectionTitle>Platform</SectionTitle>
                <ul>
                    <MenuItem>
                        {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/">
                                <IconBox>
                                    <img src='./media/icons/house2.png'></img>
                                </IconBox>
                                <span>Home</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/publications">
                                <IconBox>
                                    <img src='./media/icons/publications.png'></img>
                                </IconBox>
                                <span>Publications</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/people">
                                <IconBox>
                                    <img src='./media/icons/people.png'></img>
                                </IconBox>
                                <span>People</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/entities">
                                <IconBox>
                                    <img src='./media/icons/entities.png'></img>
                                </IconBox>
                                <span>Entities</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/administration">
                                <IconBox>
                                    <img src='./media/icons/administration.png'></img>
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
                                <IconBox>
                                    <img src='./media/icons/entities2.png'></img>
                                </IconBox>
                                <span> Client Contract</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Supplier Contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/suppliercontract">
                                <IconBox>
                                    <img src='./media/icons/entities2.png'></img>
                                </IconBox>
                                <span>Supplier Contract</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/corporate">
                                <IconBox>
                                    <img src='./media/icons/entities2.png'></img>
                                </IconBox>
                                <span>Corporate</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/groupnorms">
                                <IconBox>

                                    <img src='./media/icons/entities2.png'></img>

                                </IconBox>
                                <span>Group Norms</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/realestatecontracts">
                                <IconBox>

                                    <img src='./media/icons/entities2.png'></img>

                                </IconBox>
                                <span>Real estate contracts</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Next Item'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/nextitem">
                                <IconBox>

                                    <img src='./media/icons/entities2.png'></img>

                                </IconBox>
                                <span>Next Item</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Next Item'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/nextitem">
                                <IconBox>
                                    <img src='./media/icons/entities2.png'></img>
                                </IconBox>
                                <span>Next Item</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Next Item'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/nextitem">
                                <IconBox>
                                    <img src='./media/icons/entities2.png'></img>
                                </IconBox>
                                <span>Next Item</span>
                            </CostumLink>
                        }
                    </MenuItem>
                    <MenuItem>
                        {'Next Item'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CostumLink to="/nextitem">
                                <IconBox>
                                    <img src='./media/icons/entities2.png'></img>
                                </IconBox>
                                <span>Next Item</span>
                            </CostumLink>
                        }
                    </MenuItem>
                </ul>
            </MenuItemsWrapper>
            <AccountWrapper>
                <SectionTitle>Account</SectionTitle>
                <ul>
                    <MenuItem>
                        <ImageBox>
                            <Link to="profile">
                                <img src='./media/icons/userAvatar_2.jpg' ></img>
                            </Link>
                        </ImageBox>
                        <AccountUserName>
                            <CostumLink to="profile">
                                <span>Aniela Kowalska</span>
                            </CostumLink>
                            <CostumLink to="profile">
                                <AccountUserLink>See profile</AccountUserLink>
                            </CostumLink>
                        </AccountUserName>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="privacy">
                                <img src='./media/icons/privacy.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="privacy">
                            <span>Privacy</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/settings">
                                <img src='./media/icons/settings.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/settings">
                            <span>Settings</span>
                        </CostumLink>
                    </MenuItem>
                </ul>
            </AccountWrapper>
            <LogoutWrapper>
                <LogoutBtn>Logout</LogoutBtn>
            </LogoutWrapper>
        </Wrapper>
    )
}

export default ExpandedMenu;