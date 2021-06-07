import { FC } from 'react';
import styled from 'styled-components';
import ProfileDetailsSection1 from './ProfileDetailsSection1';


const Wrapper = styled.div``;


export interface ProfileDetailsProps {
    
}
 
const ProfileDetails: FC = () => {
    return ( 
        <Wrapper>
            <ProfileDetailsSection1></ProfileDetailsSection1>
        </Wrapper>
     );
}
 
export default ProfileDetails;