import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    width: 230px;
    height: 370px;
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100vh - 50px);
`
const CurrentUser = styled.div`
    height: 225px;
    width: 100%;
    padding: 18px 0;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.white};
    border-radius: 3%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    
    

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
    color: #5A6AB3;
    padding-top:18px;
    text-align: center;
`
const Job = styled.p`
    padding: 18px 0;
    border-bottom: solid 3px ${Colors.bg};
    text-align: center;

`
const UserNetworkPublications = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 15px;

`
const NetworkPublicationsText = styled.p`
    flex-grow: 4;
    text-align: center;

`

const CurrentUserIcons = styled.img`
    flex-grow: 0;
    text-align: center;
    padding: 0 18px;

`


const LeftBar: FC = () => {
    return (
        <Wrapper>
            <CurrentUser>
                <UserPhoto></UserPhoto>
                <UserInfo>
                    <Name>Aniela Kowalska</Name>
                    <Job>Job title - Company</Job>
                    <UserNetworkPublications>
                        <CurrentUserIcons src='./media/icons/network.png'></CurrentUserIcons>
                        <NetworkPublicationsText>Your Network</NetworkPublicationsText>
                        <CurrentUserIcons src='./media/icons/people.png'></CurrentUserIcons>
                    </UserNetworkPublications>
                    <UserNetworkPublications>
                        <CurrentUserIcons src='./media/icons/publications.png'></CurrentUserIcons>
                        <NetworkPublicationsText>Your Publications</NetworkPublicationsText>
                        <CurrentUserIcons src='./media/icons/plus.png'></CurrentUserIcons>
                    </UserNetworkPublications>
                </UserInfo>
            </CurrentUser>
        </Wrapper>
    )

}

export default LeftBar;