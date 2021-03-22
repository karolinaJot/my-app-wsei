import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    margin-top: 3px;
    background: ${Colors.white};
    height: 46px;
    display: flex;

`
const Logo = styled.img`
    height: 40px;
    width: 40px;
    margin-left: 15px;
    padding: 0 3px;
`
const HouseImg = styled.img`
    height: 30px;
    width: 30px;
    margin-left: 15px;
    padding: 0 3px;
`

const Home = styled.div`
    height: 30px;
    width: 200px;
    display: flex;
    text-align: center;
    font-size: ${fontSize[18]};
    margin-left: 15px;
    padding: 0 auto;

    
`

const TopBar: FC = () => {
    return (
        <Wrapper>
            <Logo src='./media/icons/logo.png'></Logo>
            <HouseImg src='./media/icons/house2.png'></HouseImg>
            <Home>Home</Home>
        </Wrapper>
    );
}

export default TopBar;