import React, {FC} from 'react';
import styled from 'styled-components';
import ProfileHeader from './ProfileHeader';



const Wrapper = styled.div`
    width: 100%;
`;

const Profile: FC = () => {
    return (
        <Wrapper>
            <ProfileHeader></ProfileHeader>
        </Wrapper>
    );
};


export default Profile;