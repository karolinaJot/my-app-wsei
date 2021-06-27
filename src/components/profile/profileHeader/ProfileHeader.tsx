import { ChangeEvent, useEffect } from 'react';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { ISingleUser } from '../../../entities/users';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import ProfileHeaderForm from './ProfileHeaderForm';
import ProfileHeaderInfo from './ProfileHeaderInfo';
import ProfileHeaderTopBar from './ProfileHeaderTopBar';



const Wrapper = styled.div`
    height: auto;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export interface IUserInfo {
    name: string,
    companyName: string,
    city: string,
    website: string,
    email: string,
    tel: string
}

const ProfileHeader: FC = () => {


    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<ISingleUser>();


    const [userInfo, setUserInfo] = useState<IUserInfo>({
        name:'',
        companyName: '',
        city: '',
        website: '',
        email: '',
        tel: ''
    });


    useEffect(() => {
        setCurrentUser(usersList?.[0])
        setUserInfo({
            name:usersList?.[0]?.name,
            companyName: usersList?.[0]?.company.name,
            city: usersList?.[0]?.address.city,
            website: usersList?.[0]?.website,
            email: usersList?.[0]?.email,
            tel: usersList?.[0]?.phone
        })
    }, [usersList]);

    const handleEditClick = () => {
        setIsEdit(isEdit => !isEdit);
    }

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserInfo({...userInfo, [name]: value});
    };



    return (
        <Wrapper>
            <ProfileHeaderTopBar></ProfileHeaderTopBar>

            {!isEdit &&
                <ProfileHeaderInfo userData={userInfo}
                    editHandle={handleEditClick}
                />
            }
            {isEdit &&
                <ProfileHeaderForm
                    editHandle={handleEditClick}
                    textChange={handleChangeText}
                    userData={userInfo}
                />
            }
        </Wrapper>
    );
};


export default ProfileHeader;