import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontSize } from '../../../styledHelpers/FontSizes';




const Wrapper = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 20px;
    border-bottom: 2px solid white;

`;

const Wrapper2 = styled.div`
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


const EditWrapper = styled.div`
    img {
        padding: 0 15px;
        width: 25px;
        height: 25px;
    }
 
`;
const ContactsWrapper = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 20px;
   

`;

const ProfileHeaderMain: FC = () => {
    return (
        <Wrapper>
            <Wrapper2>

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
                <ContactsWrapper>
                    <DetailsTextSmall>fajnymail@gmail.com</DetailsTextSmall>
                    <DetailsTextSmall>+33 (0)62345667733</DetailsTextSmall>
                </ContactsWrapper>
            </Wrapper2>
            <EditWrapper>
                <img src='./media/icons/settings.svg'></img>
            </EditWrapper>
        </Wrapper>
    );
};


export default ProfileHeaderMain;