import { FC } from 'react';
import useDropdown from 'react-dropdown-hook';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';
import ExpandedMenu from '../topBar/ExpandedMenu';

const Wrapper = styled.div`
    margin-top: 3px;
    background: ${Colors.white};
    height: 50px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    margin-top: 2px;
    align-items: center;
    position: relative;

`;

const IconsWrapper = styled.div`
    width: 310px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
`;

const Logo = styled.img`
    height: 40px;
    width: 40px;
`;
const HouseImg = styled.img`
    height: 20px;
    width: 20px;
`;

const SelectWrapper = styled.div`
    height: 50px;
    width: 210px;
    text-align: center;
    font-size: ${FontSize[18]};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HomeText = styled.div`
`;
const ArrowWrapper = styled.div`
`;
const ArrowIcon = styled.img`
vertical-align: middle;
`;
const SearchWrapper = styled.div`
    width: 535px;
    margin-left: 15px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 2px #D2D3D6;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const SearchInput = styled.input`
    height: 100%;
    width: 500px;
    border: none;
    text-align: center;
    &:focus {
        outline: none;
    };
`;
const SearchSubmit = styled.input`
   height: 20px;
   padding-right: 5px;
   &:focus {
        outline: none;
    };
`;

const HomeRightIcon = styled.img`
    padding-left: 190px;
`;
const CommentsIcon = styled.img`
`;
const BellIcon = styled.img`
`;


const TopBar: FC = (props) => {
    const [wrapperRef, dropdownOpen, togggleDropdown] = useDropdown();

    const menuHandler = () => {
        togggleDropdown();
    };


    return (
        <Wrapper>
            <IconsWrapper>
                <Logo src='./media/icons/logo.png'></Logo>
                <HouseImg src='./media/icons/house2.png'></HouseImg>
                <SelectWrapper ref={wrapperRef} onClick={menuHandler}>
                    <HomeText>Home</HomeText>
                    <ArrowWrapper>
                        <ArrowIcon src='./media/icons/arrow-down.png' ></ArrowIcon>
                    </ArrowWrapper>
                    {dropdownOpen && 
                        <ExpandedMenu/>
                    }
                </SelectWrapper>
            </IconsWrapper>    
            <SearchWrapper>
                <SearchInput type='search' placeholder='Search Legalcluster'></SearchInput>
                <SearchSubmit type='image' alt='Submit' src='./media/icons/search.png'></SearchSubmit>
            </SearchWrapper>
            <IconsWrapper>
                <HomeRightIcon src='./media/icons/house.png'></HomeRightIcon>
                <CommentsIcon src='./media/icons/comments.png'></CommentsIcon>
                <BellIcon src='./media/icons/bell.png'></BellIcon>
            </IconsWrapper>
        </Wrapper>
    );
};

export default TopBar;