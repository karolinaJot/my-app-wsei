import {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';



const Wrapper = styled.aside`
    height: 370px;
    flex: 2;
    margin-right: 40px;
`
const CurrentUser = styled.div`
    height: 225px;
    /* width: 100%; */
    padding: 18px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.white};
    border-radius: 3%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`

const ImageBox = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
`
const UserImage = styled.img`
    
`

const UserInfo = styled.div`

`
const Name = styled.p`
    color: #5A6AB3;
    padding-top:18px;
    text-align: center;
    font-size: ${FontSize[18]};
`
const Job = styled.p`
    padding: 18px 0;
    border-bottom: solid 3px ${Colors.bg};
    text-align: center;
    font-size: ${FontSize[16]};
    color:  #B6B9C2;

`
const UserNetworkPublications = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 15px;
    

`
const NetworkPublicationsText = styled.p`
    flex: 4;
    text-align: center;

`

const CurrentUserIcons = styled.img`
    text-align: center;
    flex: 0;

`
const PersonButton = styled.button`
    background-image: url('./media/icons/people.png');
    width: 35px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: center;
    background-color: ${Colors.white};
    border: solid 1px ${Colors.black};
    border-radius: 10%;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.6);
`
const PlusButton = styled.button`
    background-image: url('./media/icons/plus.png');
    width: 35px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: center;
    background-color: ${Colors.white};
    border: solid 1px ${Colors.black};
    border-radius: 10%;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.6);
`
const LinksListWrapper = styled.div`

`;

const ListItem = styled.li`
    display: flex;
    margin: 5px 0;

    a {
        text-decoration: none;
        cursor: pointer;
        color: black;
        text-align: left;
    };

    span {
        padding-left: 10px;
    }
`;

const IconBox = styled.span`
    width: 30px;
    height: 30px;
`;

const LeftBar: FC = () => {
    return (
        <Wrapper>
            <CurrentUser>
                <ImageBox>
                    <UserImage src='./media/icons/userAvatar_2.jpg'></UserImage>
                </ImageBox>
                <UserInfo>
                    <Name>Aniela Kowalska</Name>
                    <Job>Job title - Company</Job>
                    <UserNetworkPublications>
                        <CurrentUserIcons src='./media/icons/network.png'></CurrentUserIcons>
                        <NetworkPublicationsText>Your Network</NetworkPublicationsText>
                        <PersonButton></PersonButton>
                    </UserNetworkPublications>
                    <UserNetworkPublications>
                        <CurrentUserIcons src='./media/icons/publications.png'></CurrentUserIcons>
                        <NetworkPublicationsText>Your Publications</NetworkPublicationsText>
                        <PlusButton></PlusButton>
                    </UserNetworkPublications>
                </UserInfo>
            </CurrentUser>
            <LinksListWrapper>
                <ul>
                    <ListItem>
                        <IconBox>
                            <img src='./media/icons/publications.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Publications</span>
                        </a>
                    </ListItem>
                    <ListItem>
                        <IconBox>
                            <img src='./media/icons/ecosystem.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Ecosystem</span>
                        </a>
                    </ListItem>
                    <ListItem>
                        <IconBox>
                            <img src='./media/icons/entities2.png'></img>
                        </IconBox>
                        <a href='#'>
                            <span>Entities</span>
                        </a>
                    </ListItem>
                </ul>
            </LinksListWrapper>
        </Wrapper>
    )

}

export default LeftBar;