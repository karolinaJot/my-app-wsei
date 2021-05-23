import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontSize } from '../../styledHelpers/FontSizes';




const Wrapper = styled.div`
    height: 150px;
    display: flex;
    margin: 20px 20px;

`;

const PhotoEleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-right: 20px;

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
    background-color:green;
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
`;

const PhotoText = styled.span`
    color: #86d4e2;
    font-size: ${FontSize[16]};
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
    color: #575757;
    margin-bottom: 5px;
   
`;

const DetailsTextSmall = styled.span`
    font-size: ${FontSize[18]};
    letter-spacing: 2px;
    color: #575757;
    margin-top: 5px;
`;

const LeftElemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 0;
`;

const EditWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
 
`;
const ContactsWrapper = styled.span`
    display: flex;
    flex-direction: column;
   

`;

const ProfileHeaderMain: FC = () => {
    return (
        <Wrapper>
            <PhotoEleWrapper>
                <PhotoWrapper>
                    <PhotoBox>
                        <img src='./media/icons/userAvatar_2.jpg'></img>
                    </PhotoBox>
                    <PhotoDotBox></PhotoDotBox>
                </PhotoWrapper>
                <CostumLink to='profile'>
                    <PhotoText>See profile</PhotoText>
                </CostumLink>
            </PhotoEleWrapper>
            <DetailsWrapper>
                <div>
                    <DetailsTextBig>Aniela Kowalska</DetailsTextBig>
                    <DetailsTextBig>fajna firma</DetailsTextBig>
                </div>
                <div>
                    <DetailsTextSmall>City Krakow</DetailsTextSmall>
                    <DetailsTextSmall>Szef główny</DetailsTextSmall>
                </div>
            </DetailsWrapper>
            <LeftElemsWrapper>
                <EditWrapper>
                    <span>Edit</span>
                </EditWrapper>
                <ContactsWrapper>
                    <DetailsTextSmall>fajnymail@gmail.com</DetailsTextSmall>
                    <DetailsTextSmall>+33 (0)62345667733</DetailsTextSmall>
                </ContactsWrapper>
            </LeftElemsWrapper>
        </Wrapper>
    );
};


export default ProfileHeaderMain;