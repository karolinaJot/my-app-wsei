import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

import { FontSize } from '../../styledHelpers/FontSizes';
import useDropdown from 'react-dropdown-hook';
import Filters from './entitiesFilter/Filters';

const Wrapper = styled.div`
`;

const TopItems = styled.div`
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    font-size: ${FontSize[20]};
`;

const EntitiesBox = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;

    span {
        padding-right: 0.5rem;


        img {
            width: 15px;
            height: 15px;
        };
    };
`;

const TopButtonBox = styled.div`

    button {
        margin-left: 20px;
        cursor: pointer;
        padding: 5px;

        span {
            padding-left: 5px;
            padding-right: 5px;
            text-align: center;

            img{
                width: 13px;
                height: 13px;
                object-fit: cover;
            };
        };
    };

`;

const BottomBtns = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    position: relative;

`;

const LeftBottomBtns = styled.div`
    display: flex;

    span {
        display: block;
        padding-right: 0.5rem;
    };
`;

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const CostumeBtn = styled.button`
    display: flex;
    padding: 5px 5px;
    cursor: pointer;
    font-size: ${FontSize[16]};

    span {
            padding-left: 5px;
            padding-right: 5px;
            text-align: center;

            img{
                width: 15px;
                object-fit: cover;
            };
    };

`;

const SelectIconBox = styled.span`
    padding-right: 0;
    width: 15px;
    height: 15px;

    img{
                width: 80%;
                object-fit: cover;
            };


`;


const RightBottomBtns = styled.div`
    display: flex;
    
    span {
        display: block;
        padding-right: 0.5rem;
    };
`;

const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 2px #D2D3D6;
    padding: 5px 0;
`;

const SearchInput = styled.input`

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

const CostumeSelect = styled.select`
 

`;

interface IEntitiesHeaderProps {
    clickFullScreen(): void,
    clickSort(): void,
    clickCopy(): void,
    clickMosaic(): void,
    clickList(): void,
    isCopied: boolean,
    changeText(e: ChangeEvent<HTMLInputElement>): void;
    followedChange(e: ChangeEvent<HTMLSelectElement>): void;

}


const EntitiesHeader: FC<IEntitiesHeaderProps> = (props: IEntitiesHeaderProps) => {

    const [wrapperRef, dropdownOpen, togggleDropdown] = useDropdown();

    const menuHandler = () => {
        togggleDropdown();
    };

    return (
        <Wrapper>
            <TopItems>
                <EntitiesBox>
                    <span>Entities</span>
                    <span>
                        <img src='./media/icony_z_sieci/settings1.png' alt='settings icon'></img>
                    </span>
                </EntitiesBox>
                <TopButtonBox>
                    <button onClick={props.clickMosaic}>
                        <span>
                            <img src='./media/icony_z_sieci/grid.png' alt='grid icon'></img>
                        </span>
                        <span>Mosaic</span>
                    </button>
                    <button onClick={props.clickList}>
                        <span>
                            <img src='./media/icony_z_sieci/list.png' alt='list icon'></img>
                        </span>
                        <span>List</span>
                    </button>
                </TopButtonBox>
            </TopItems>
            <BottomBtns>
                <LeftBottomBtns>
                    <span>
                        <SelectWrapper>
                            <CostumeBtn>
                                <SelectIconBox>
                                    <img src='./media/icony_z_sieci/target.png' alt='target icon'></img>
                                </SelectIconBox>
                                <span>All</span>
                                <SelectIconBox>
                                    <img src='./media/icons/arrow-down.png' alt='arrow down icon'></img>
                                </SelectIconBox>
                            </CostumeBtn>
                        </SelectWrapper>
                    </span>
                    <span>
                        <CostumeBtn style={{ fontWeight: 700 }}>...</CostumeBtn>
                    </span>
                    <span>
                        <CostumeBtn onClick={props.clickSort}>
                            <span>
                                <img src='./media/icony_z_sieci/sort_Z-A.png' alt='sorting icon'></img>
                            </span>
                            <span>Sort</span>
                        </CostumeBtn>
                    </span>
                    <span ref={wrapperRef}>
                        <CostumeBtn onClick={menuHandler}>
                            <span>
                                <img src='./media/icony_z_sieci/filter.png' alt='filter icon'></img>
                            </span>
                            <span>Filters</span>
                        </CostumeBtn>
                        {dropdownOpen &&
                            <Filters />
                        }
                    </span>
                    <span>
                        <CostumeBtn onClick={props.clickFullScreen}>
                            <span>
                                <img src='./media/icony_z_sieci/full_screen.png' alt='filter icon'></img>
                            </span>
                        </CostumeBtn>
                    </span>
                    <span>
                        <CostumeBtn onClick={props.clickCopy}>
                            <span>
                                <img src='./media/icony_z_sieci/share.png' alt='share icon'></img>
                            </span>
                            <span>{!props.isCopied ? "Share" : "Copied"}</span>
                        </CostumeBtn>
                    </span>
                </LeftBottomBtns>
                <RightBottomBtns>
                    <span>
                        <SearchWrapper>
                            <SearchInput onChange={props.changeText} type='text' placeholder='Search...'></SearchInput>
                            <SearchSubmit type='image' alt='submit' src='./media/icons/search.png'></SearchSubmit>
                        </SearchWrapper>
                    </span>
                    <span >
                        <SelectWrapper>
                            <CostumeBtn>
                                <SelectIconBox>
                                    <img src='./media/icony_z_sieci/radar.png' alt='target icon'></img>
                                </SelectIconBox>
                                <span>
                                    <CostumeSelect onChange={props.followedChange}>
                                        <option>All</option>
                                        <option>My</option>
                                    </CostumeSelect>
                                </span>
                            </CostumeBtn>
                        </SelectWrapper>
                    </span>

                </RightBottomBtns>
            </BottomBtns>
        </Wrapper>
    );
};

export default EntitiesHeader;