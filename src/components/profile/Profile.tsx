import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import ProfileDetails from './profileDeatils/ProfileDetails';
import ProfileHeader from './profileHeader/ProfileHeader';



const Wrapper = styled.div`
    width: 900px;
    background-color: ${Colors.white};
    padding-bottom: 20px;
`;

const Profile: FC = () => {
    return (
        <Wrapper>
            <ProfileHeader></ProfileHeader>
            <ProfileDetails></ProfileDetails>
        </Wrapper>
    );
};


export default Profile;