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



const ExpandedMenu: FC = () => {
    return(
        <Wrapper>
            <FilterBox>
                <Filter type='search'placeholder='Filter...' ></Filter>
            </FilterBox>
            <div>
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
                </ul>
            </div>
        </Wrapper>
    )
}

export default ExpandedMenu;