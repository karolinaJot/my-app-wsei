import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';

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
    background-color: lightblue;
    width: 100%;
    height: 100%;
    border-radius: 5%;
`;
// TODO: upewnić się czy działa scrollowanie dla menu
const MenuItemsWrapper = styled.div`
    height: 336px;
    border-bottom: solid 1px black;
    overflow: auto;
`;

const SectionName = styled.span`

`;

const MenuHome = styled.li`
    background-color: lightblue;
    height: 30px;
    background-image: url('./media/icons/house2.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;

`;

const MenuPublications = styled(MenuHome)`
    background-image: url('./media/icons/publications.png');
`;

const MenuPeople = styled(MenuHome)`
    background-image: url('./media/icons/people.png');
`;

const MenuEntities = styled(MenuHome)`
    background-image: url('./media/icons/entities.png');
`;

const MenuAdmin = styled(MenuHome)`
    background-image: url('./media/icons/administration.png');
`;

const MenuClientContract = styled(MenuHome)`
    background-image: url('./media/icons/entities2.png');
`;

const MenuSupplierContract = styled(MenuHome)`
    background-image: url('./media/icons/entities2.png');
`;

const MenuCorporate = styled(MenuHome)`
    background-image: url('./media/icons/entities2.png');
`;

const MenuGroupNorms = styled(MenuHome)`
    background-image: url('./media/icons/entities2.png');
`;

const MenuRealEstateContracts = styled(MenuHome)`
    background-image: url('./media/icons/entities2.png');
`;

const MenuItem = styled(MenuHome)`
    background-image: url('./media/icons/entities2.png');
`;

const AccountWrapper = styled.div`
`;

const AccountItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 10px;

`;

const IconBox = styled.div`
    width: 32px;
    height: 32px;

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



const ExpandedMenu: FC = () => {
    return(
        <Wrapper>
            <FilterBox>
                <Filter type='search'placeholder='Filter...' ></Filter>
            </FilterBox>
            <MenuItemsWrapper>
                <SectionName>Platform</SectionName>
                <ul>
                    <MenuHome>Home</MenuHome>
                    <MenuPublications>Publications</MenuPublications>
                    <MenuPeople>People</MenuPeople>
                    <MenuEntities>Entities</MenuEntities>
                    <MenuAdmin>Administration</MenuAdmin>
                </ul>
                <SectionName>Workspaces</SectionName>
                <ul>
                    <MenuClientContract>Client Contract</MenuClientContract>
                    <MenuSupplierContract>Supplier Contract</MenuSupplierContract>
                    <MenuCorporate>Corporate</MenuCorporate>
                    <MenuGroupNorms>Group Norms</MenuGroupNorms>
                    <MenuRealEstateContracts>Real estate contracts</MenuRealEstateContracts>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item</MenuItem>
                </ul>
            </MenuItemsWrapper>
            <AccountWrapper>
                <SectionName>Account</SectionName>
                <AccountItem>
                    <ImageBox>
                        <img src='./media/icons/userAvatar_2.jpg' ></img>
                    </ImageBox>
                    <AccountUserName>
                        <span>Aniela Kowalska</span>
                        <span>See profile</span>
                    </AccountUserName>
                </AccountItem>
                <AccountItem>
                    <IconBox>
                        <img src='./media/icons/privacy.png'></img>
                    </IconBox>
                    <span>Privacy</span>
                </AccountItem>
                <AccountItem>
                    <IconBox>
                        <img src='./media/icons/settings.png'></img>
                    </IconBox>
                    <span>Settings</span>
                </AccountItem>

            </AccountWrapper>
        </Wrapper>
    )
}

export default ExpandedMenu;