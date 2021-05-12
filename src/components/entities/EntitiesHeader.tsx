import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    border: 2px solid green;
`;

const TopItems = styled.div`
    background-color: pink;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
`;

const EntitiesBox = styled.div`
    display: flex;
    flex-direction: row;

    span {
        padding-right: 0.5rem;
    }
`;

const TopButtonBox = styled.div``;

const BottomBtns = styled.div`
    background-color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;

`;

const LeftBottomBtns = styled.div`
    display: flex;

    span {
        display: block;
        padding-right: 0.5rem;
    };
`;
const RightBottomBtns = styled.div`
    display: flex;
    
    span {
        display: block;
        padding-right: 0.5rem;
    };

`;

const EntitiesHeader: FC = () => {
    return (
        <Wrapper>
            <TopItems>
                <EntitiesBox>
                    <span>Entities</span>
                    <span>icon</span>
                </EntitiesBox>
                <TopButtonBox>
                    <button>Mosaic</button>
                    <button>icon</button>
                </TopButtonBox>
            </TopItems>
            <BottomBtns>
                <LeftBottomBtns>
                    <span>All</span>
                    <span>...</span>
                    <span>Sort</span>
                    <span>Filters</span>
                    <span>strzalki</span>
                    <span>Share</span>
                </LeftBottomBtns>
                <RightBottomBtns>
                    <span>Search</span>
                    <span>Followed</span>
                </RightBottomBtns>
            </BottomBtns>
        </Wrapper>
    );
};

export default EntitiesHeader;