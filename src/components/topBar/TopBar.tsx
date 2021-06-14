import React, { FC } from 'react';
import useDropdown from 'react-dropdown-hook';
import { Link } from 'react-router-dom';
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

const LeftWrapper = styled.div`
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

const ExpandedMenuWrapper = styled.div`
    height: 50px;
    width: 230px;
    text-align: center;
    font-size: ${FontSize[18]};
    position: relative;
    background-color: ${Colors.white};


`;

const ButtonExpandedMenu = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: ${Colors.white};
    border: none;

    span {
        padding-left: 10px;
    };
`;


const IconBox = styled.span`
    width: 30px;
    cursor: pointer;
`;

const MenuItemText = styled.span`
    width: 170px;
    text-align: left;
    cursor: pointer;
`;

const ArrowWrapper = styled.span`
    margin-right: 15px;
    cursor: pointer;
`;

const ArrowIcon = styled.img`
vertical-align: middle;
`;

const SearchWrapper = styled.div`
    width: 535px;
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

const IconsRightWrapper = styled.div`
    width: 310px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
`;

const HomeRightIcon = styled.img`
    padding-left: 190px;
`;
const NotificationsIcon = styled.div`
    padding: 5px;
    background-color: pink;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;

`;

const Badge = styled.span`
    position:absolute;
    top: 0;
    right: 0;
    color: ${Colors.white};
    font-size: ${FontSize[12]};
    height: 14px;
    width:20px;
    border-radius: 40%;
    background-color: #0381BE;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
`;



const TopBar: FC = () => {
    
    const [wrapperRef, dropdownOpen, togggleDropdown] = useDropdown();

    const menuHandler = () => {
        togggleDropdown();
    };


    return (
        <Wrapper>
            <LeftWrapper>
                <Link to="/">
                    <Logo src='./media/icons/logo.png'></Logo>
                </Link>
                <ExpandedMenuWrapper ref={wrapperRef} >
                    <ButtonExpandedMenu onClick={menuHandler}>
                        <IconBox>
                            <img src='./media/icons/house2.png'></img>
                        </IconBox>
                        <MenuItemText>Home</MenuItemText>
                        <ArrowWrapper>
                            <ArrowIcon src='./media/icons/arrow-down.png' ></ArrowIcon>
                        </ArrowWrapper>
                    </ButtonExpandedMenu>
                    {dropdownOpen &&
                        <ExpandedMenu />
                    }
                </ExpandedMenuWrapper>
            </LeftWrapper>
            <SearchWrapper>
                <SearchInput type='search' placeholder='Search Legalcluster'></SearchInput>
                <SearchSubmit type='image' alt='submit' src='./media/icons/search.png'></SearchSubmit>
            </SearchWrapper>
            <IconsRightWrapper>
                <HomeRightIcon src='./media/icons/house.png'></HomeRightIcon>
                <NotificationsIcon>
                    <img src='./media/icons/comments.png'></img>
                    <Badge>3</Badge>
                 </NotificationsIcon>
                <NotificationsIcon>
                    <img src='./media/icons/bell.png'></img>
                    <Badge>3</Badge>
                </NotificationsIcon>
            </IconsRightWrapper>
        </Wrapper>
    );
};

export default TopBar;