import { useEffect } from 'react';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { ISingleUser } from '../../../entities/users';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import ProfileHeaderInfo from './ProfileHeaderInfo';
import ProfileHeaderTopBar from './ProfileHeaderTopBar';



const Wrapper = styled.div`
    height: auto;
    border: 2px solid pink;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export interface IUserInfo {
    name: string | undefined,
    companyName: string | undefined,
    city: string | undefined,
    website: string | undefined,
    email: string | undefined,
    tel: string | undefined
}

const ProfileHeader: FC = () => {


    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const [currentUser, setCurrentUser] = useState<ISingleUser>();

    const [userInfo, setUserInfo] = useState<IUserInfo>({
        name: currentUser?.name,
        companyName: currentUser?.company.name,
        city: currentUser?.address.city,
        website: currentUser?.website,
        email: currentUser?.email,
        tel: currentUser?.phone
    });

    useEffect(() => {
        setCurrentUser(usersList?.[0])
    }, []);

    return (
        <Wrapper> {console.log(userInfo)}
            <ProfileHeaderTopBar></ProfileHeaderTopBar>
            <ProfileHeaderInfo  userData={userInfo}></ProfileHeaderInfo>
        </Wrapper>
    );
};


export default ProfileHeader;