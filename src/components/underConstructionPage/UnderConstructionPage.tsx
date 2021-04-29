import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontSize } from '../../styledHelpers/FontSizes';



const Wrapper = styled.div`
    width: 900px;
    background-color: gold;
    height: calc(100vh - 50px);
    border: solid 4px black;
    margin: 0 auto;
    font-size: ${FontSize[24]};
    font-weight: 700;
    text-align: center;
    padding-top: 50px;
`;

export const UnderConstructionPage: FC = () => {

    return(
        <Wrapper>
                Hello from under construction site!
                <br></br>
                <br></br>
                <br></br>
                We are working hard to create this uniqe site for you as soon as possible.
                <br></br>
                <br></br>
                <br></br>
                Take your time, go for a walk, relax
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <Link to="/">or simply back to main page</Link>
                </div>

        </Wrapper>

    );
};