import { FC } from 'react';
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
`;

const MenuItemsWrapper = styled.div`
    height: 336px;
    border-bottom: solid 1px black;
    overflow: auto;
`;

const SectionTitle = styled.span`
    margin-bottom: 10px;
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
    }
`;

const CostumLink = styled(Link)`
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
    return(
        <Wrapper>
            <FilterBox>
                <Filter type='search'placeholder='Filter...' ></Filter>
            </FilterBox>
            <MenuItemsWrapper>
                <SectionTitle>Platform</SectionTitle>
                <ul>
                    <MenuItem>
                        <IconBox>
                            <Link to="/">
                                <img src='./media/icons/house2.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/">
                            <span>Home</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/publications">
                                <img src='./media/icons/publications.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/publications">
                            <span>Publications</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/people">
                                <img src='./media/icons/people.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/people">
                            <span>People</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/entities">
                                <img src='./media/icons/entities.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/entities">
                            <span>Entities</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/administration">
                                <img src='./media/icons/administration.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/administration">
                            <span>Administration</span>
                        </CostumLink>
                    </MenuItem>
                </ul>
                <SectionTitle>Workspaces</SectionTitle>
                <ul>
                    <MenuItem>
                        <IconBox>
                            <Link to="/clientcontract">
                                <img src='./media/icons/entities2.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/clientcontract">
                            <span> Client Contract</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/suppliercontract">
                                <img src='./media/icons/entities2.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/suppliercontract">
                            <span>Supplier Contract</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/corporate">
                                <img src='./media/icons/entities2.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/corporate">
                            <span>Corporate</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/groupnorms">
                                <img src='./media/icons/entities2.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/groupnorms">
                            <span>Group Norms</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/realestatecontracts">
                                <img src='./media/icons/entities2.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/realestatecontracts">
                            <span>Real estate contracts</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/nextitem">
                                <img src ='./media/icons/entities2.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/nextitem">
                            <span>Next Item</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/nextitem">
                                <img src ='./media/icons/entities2.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/nextitem">
                            <span>Next Item</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/nextitem">
                                <img src ='./media/icons/entities2.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/nextitem">
                            <span>Next Item</span>
                        </CostumLink>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <Link to="/nextitem">
                                <img src ='./media/icons/entities2.png'></img>
                            </Link>
                        </IconBox>
                        <CostumLink to="/nextitem">
                            <span>Next Item</span>
                        </CostumLink>
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