import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';
import { IUserInfo } from './ProfileHeader';




const Wrapper = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 20px;
    border-bottom: 2px solid white;

`;

const ContentWrapper = styled.div`
    display: flex;
`;


const PhotoEleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 20px 0 0;

`;

const PhotoWrapper = styled.div`
    width: 70px;
    height: 70px;
    overflow: hidden;
    position: relative;
`;

const PhotoBox = styled.span`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 90%;
        height: 90%;
        object-fit: cover;
    };
`;

const PhotoDotBox = styled.span`
    background-color: ${Colors.profileGreen};
    border: 3px solid white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    bottom: 5px;
    right: 5px;
`;


const CostumLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    text-align: left;
    font-size: ${FontSize[16]};
    color: ${Colors.blue1};
`;


const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 40px 20px 0;
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    };
`;

const DetailsTextBig = styled.span`
    font-size: ${FontSize[18]};
    font-weight: 700;
    letter-spacing: 2px;
    color: ${Colors.gray2};
    margin-bottom: 5px;
   
`;

const DetailsTextSmall = styled.span`
    font-size: ${FontSize[18]};
    letter-spacing: 2px;
    color: ${Colors.gray2};
    margin-top: 5px;
`;


const EditWrapper = styled.div`

    img {
        padding: 0 15px;
        width: 25px;
        height: 25px;
    }
 
`;
const ContactsWrapper = styled.span`
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 20px;
   

`;

interface IProfileHeaderInfo {
    userData: IUserInfo,
    editHandle(): void,
}

const ProfileHeaderInfo: FC<IProfileHeaderInfo> = (props: IProfileHeaderInfo) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <PhotoEleWrapper>
                    <PhotoWrapper>
                        <PhotoBox>
                            <img src='./media/icons/userAvatar_2.jpg' alt=''></img>
                        </PhotoBox>
                        <PhotoDotBox></PhotoDotBox>
                    </PhotoWrapper>
                    <CostumLink to='profile'>
                        See profile
                    </CostumLink>
                </PhotoEleWrapper>
                {props.userData &&
                    <DetailsWrapper>
                        <div>
                            <DetailsTextBig>{props.userData.name}</DetailsTextBig>
                            <DetailsTextBig>{props.userData.companyName}</DetailsTextBig>
                        </div>
                        <div>
                            <DetailsTextSmall>{props.userData.city}</DetailsTextSmall>
                            <DetailsTextSmall>{props.userData.website}</DetailsTextSmall>
                        </div>
                    </DetailsWrapper>
                }
                <ContactsWrapper>
                    <DetailsTextSmall>{props.userData.email}</DetailsTextSmall>
                    <DetailsTextSmall>{props.userData.tel}</DetailsTextSmall>
                </ContactsWrapper>
            </ContentWrapper>
            <EditWrapper>
                <button onClick={props.editHandle}>
                    <img src='./media/icons/settings.svg' alt='settings'></img>
                </button>
            </EditWrapper>
        </Wrapper>
    );
};


export default ProfileHeaderInfo;