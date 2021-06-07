import {FC} from 'react';
import styled from 'styled-components';
import ProfileHeaderMain from './ProfileHeaderMain';
import ProfileHeaderTopBar from './ProfileHeaderTopBar';



const Wrapper = styled.div`
    height: 300px;
    border: 2px solid pink;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const ProfileHeader: FC = () => {
    return (
        <Wrapper>
            <ProfileHeaderTopBar></ProfileHeaderTopBar>
            <ProfileHeaderMain></ProfileHeaderMain>
        </Wrapper>
    );
};


export default ProfileHeader;