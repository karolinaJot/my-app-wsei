import { FC } from 'react';
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

    a {
        text-decoration: none;
        cursor: pointer;
        color: black;
        text-align: left;
    };

    span {
        padding-left: 10px;
    }
`;

const IconBox = styled.span`
    width: 30px;
    height: 30px;
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
                            <img src='./media/icons/house2.png'></img>
                        </IconBox>
                        <a>
                            <span>Home</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src='./media/icons/publications.png'></img>
                        </IconBox>
                        <a>
                            <span>Publications</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src='./media/icons/people.png'></img>
                        </IconBox>
                        <a>
                            <span>People</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src='./media/icons/entities.png'></img>
                        </IconBox>
                        <a>
                            <span>Entities</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src='./media/icons/administration.png'></img>
                        </IconBox>
                        <a>
                            <span>Administration</span>
                        </a>
                    </MenuItem>
                </ul>
                <SectionTitle>Workspaces</SectionTitle>
                <ul>
                    <MenuItem>
                        <IconBox>
                            <img src='./media/icons/entities2.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span> Client Contract</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src='./media/icons/entities2.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Supplier Contract</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src='./media/icons/entities2.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Corporate</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src='./media/icons/entities2.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Group Norms</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src='./media/icons/entities2.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Real estate contracts</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src ='./media/icons/entities2.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Next Item</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src ='./media/icons/entities2.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Next Item</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src ='./media/icons/entities2.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Next Item</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src ='./media/icons/entities2.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Next Item</span>
                        </a>
                    </MenuItem>
                </ul>
            </MenuItemsWrapper>
            <AccountWrapper>
                <SectionTitle>Account</SectionTitle>
                <ul>
                    <MenuItem>
                        <ImageBox>
                            <img src='./media/icons/userAvatar_2.jpg' ></img>
                        </ImageBox>
                        <AccountUserName>
                            <span>Aniela Kowalska</span>
                            <a href='#'>
                                <AccountUserLink>See profile</AccountUserLink>
                            </a>
                        </AccountUserName>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src='./media/icons/privacy.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Privacy</span>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <IconBox>
                            <img src='./media/icons/settings.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Settings</span>
                        </a>
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