import { mainModule } from 'node:process';
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

    const [isEdit, setIsEdit] = useState<boolean>(false);

    // -------------NIE DZIAŁA WPISANIE DANYCH Z API DO userInfo--------
    const [currentUser, setCurrentUser] = useState<ISingleUser>();

    const [userInfo, setUserInfo] = useState<IUserInfo>({
        name: "Aniela Kowalska",
        companyName: "Fajna firma",
        city: "Kraków",
        website: "www.fajnafirma.ok",
        email: "fajnyEmali@gmail.com",
        tel: "(000) 666 666 666"
    });

    useEffect(() => {
        setCurrentUser(usersList?.[0])
    }, []);

    const handleEditClick = () => {
        setIsEdit(isEdit => !isEdit);
    }

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserInfo({...userInfo, [name]: value});
    };



    return (
        <Wrapper> {console.log(currentUser)}
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