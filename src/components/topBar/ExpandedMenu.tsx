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
const MenuItem = styled.li`
    background-color: lightblue;
    height: 30px;
`;

const FilterBox = styled.div`
    height: 30px;
    padding: 3px 10px;
`;

const Filter = styled.input`
    border: solid 1px grey;
    background-color: lightblue;
    width: 100%;
    height: 100%;
    border-radius: 5%;
`
const ExpandedMenu: FC = () => {
    return(
        <Wrapper>
            <FilterBox>
                <Filter type='search'placeholder='Filter...' ></Filter>
            </FilterBox>
            <ul>
                <MenuItem>hej</MenuItem>
                <MenuItem>hej</MenuItem>
                <MenuItem>hej</MenuItem>
                <MenuItem>hej</MenuItem>
                <MenuItem>hej</MenuItem>
                <MenuItem>hej</MenuItem>
            </ul>
        </Wrapper>
    )
}

export default ExpandedMenu;