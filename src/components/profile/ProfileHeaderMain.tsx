import {FC} from 'react';
import styled from 'styled-components';




const Wrapper = styled.div`
    height: calc(300px - 30px);
    background-color: #86d4e2;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;

`;

const PhotoEleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const PhotoBox = styled.span``;

const PhotoDotBox = styled.span``;

const PhotoText = styled.span``;

const DetailsWrapper = styled.div``;

const LeftElemsWrapper = styled.div``;

const EditWrapper = styled.span``;
const ContactsWrapper = styled.span``;

const ProfileHeaderMain: FC = () => {
    return (
        <Wrapper>
           <PhotoEleWrapper>
               <PhotoBox>Photo</PhotoBox>
               <PhotoDotBox>dot</PhotoDotBox>
               <PhotoText>See profile</PhotoText>
           </PhotoEleWrapper>
           <DetailsWrapper>details</DetailsWrapper>
           <LeftElemsWrapper>
               <EditWrapper>Edit</EditWrapper>
               <ContactsWrapper>tel i mail</ContactsWrapper>
           </LeftElemsWrapper>
        </Wrapper>
    );
};


export default ProfileHeaderMain;