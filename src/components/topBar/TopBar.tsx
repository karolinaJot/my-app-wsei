import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    margin-top: 3px;
    background: ${Colors.white};
    height: 50px;
    display: flex;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    margin-top: 2px;
    align-items: center;

`
const Logo = styled.img`
    height: 40px;
    width: 40px;
    margin-left: 15px;
    padding: 0 3px;
`
const HouseImg = styled.img`
    height: 20px;
    width: 20px;
    margin-left: 15px;
    padding: 0 3px;
`

const SelectWrapper = styled.div`
    height: 50px;
    width: 210px;
    text-align: center;
    font-size: ${FontSize[18]};
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HomeText = styled.div`
`
const ArrowWrapper = styled.div`
`
const ArrowIcon = styled.img`
vertical-align: middle;
`
const SearchWrapper = styled.div`
    width: 535px;
    margin-left: 15px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 2px #D2D3D6;
`

const SearchInput = styled.input`
    height: 100%;
    width: 500px;
    border: none;
    text-align: center;
`
const SearchSubmit = styled.input`
   height: 20px;
   padding-right: 5px;
`
const RightSideIconsWrapper = styled.div`
    width: 120px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
`
const HomeRightIcon = styled.img`
`
const CommentsIcon = styled.img`
`
const BellIcon = styled.img`
`


const TopBar: FC = () => {
    return (
        <Wrapper>
            <Logo src='./media/icons/logo.png'></Logo>
            <HouseImg src='./media/icons/house2.png'></HouseImg>
            <SelectWrapper>
                <HomeText>Home</HomeText>
                <ArrowWrapper>
                    <ArrowIcon src='./media/icons/arrow-down.png' ></ArrowIcon>
                </ArrowWrapper>
            </SelectWrapper>
            <SearchWrapper>
                <SearchInput type='search' placeholder='Search Legalcluster'></SearchInput>
                <SearchSubmit type='image' alt='Submit' src='./media/icons/search.png'></SearchSubmit>
            </SearchWrapper>
            <RightSideIconsWrapper>
                <HomeRightIcon src='./media/icons/house.png'></HomeRightIcon>
                <CommentsIcon src='./media/icons/comments.png'></CommentsIcon>
                <BellIcon src='./media/icons/bell.png'></BellIcon>
            </RightSideIconsWrapper>
        </Wrapper>
    );
}

export default TopBar;