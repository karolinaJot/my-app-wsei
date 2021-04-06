import React, {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: green;
    width: 230px;
    height: 370px;
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100vh - 50px);
`
const CurrentUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const UserPhoto = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color:blanchedalmond;
`
const UserInfo = styled.div`

`
const Name = styled.p`
`
const Job = styled.p`
`

const LeftBar: FC = () => {
    return (
        <Wrapper>
            <CurrentUser>
                <UserPhoto></UserPhoto>
                <UserInfo>
                    <Name>Aniela Kowalska</Name>
                    <Job>Job title - Company</Job>
                </UserInfo>
            </CurrentUser>
        </Wrapper>
    )

}

export default LeftBar;