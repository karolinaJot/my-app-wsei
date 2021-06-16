import { ChangeEvent, FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';
import { IUserInfo } from './ProfileHeader';



const Wrapper = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 20px;
    border-bottom: 2px solid white;
`;

const ContentWrapper = styled.div`

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
    background-color: ${Colors.profileGreen};
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
    font-size: ${FontSize[16]};
    color: ${Colors.blue1};
`;

const CostumeForm = styled.form`
    display: flex;
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
    color: ${Colors.gray2};
    margin-bottom: 5px;
   
`;

const DetailsTextSmall = styled.span`
    font-size: ${FontSize[18]};
    letter-spacing: 2px;
    color: ${Colors.gray2};
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
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 20px;
   

`;




interface IProfileHeaderForm {
    editHandle(): void,
    userData: IUserInfo,
    textChange(e: ChangeEvent<HTMLInputElement>): void,
}

const ProfileHeaderForm: FC<IProfileHeaderForm> = (props: IProfileHeaderForm) => {

    return (
        <Wrapper>
            <ContentWrapper>
                <PhotoEleWrapper>
                    <PhotoWrapper>
                        <PhotoBox>
                            <img src='./media/icons/userAvatar_2.jpg'></img>
                        </PhotoBox>
                        <PhotoDotBox></PhotoDotBox>
                    </PhotoWrapper>
                    <CostumLink to='profile'>
                        See profile
                    </CostumLink>
                </PhotoEleWrapper>
                <CostumeForm>
                    <DetailsWrapper>
                        <div>
                            <DetailsTextBig>
                                <label></label>
                                <input
                                    type="text"
                                    name='name'
                                    value={props.userData.name}
                                    onChange={props.textChange}
                                ></input>
                            </DetailsTextBig>
                            <DetailsTextBig>
                            <label></label>
                                <input
                                    type="text"
                                    name='companyName'
                                    value={props.userData.companyName}
                                    onChange={props.textChange}
                                ></input>
                            </DetailsTextBig>
                        </div>
                        <div>
                            <DetailsTextSmall>
                            <label></label>
                                <input
                                    type="text"
                                    name='city'
                                    value={props.userData.city}
                                    onChange={props.textChange}
                                ></input>
                            </DetailsTextSmall>
                            <DetailsTextSmall>
                            <label></label>
                                <input
                                    type="text"
                                    name='website'
                                    value={props.userData.website}
                                    onChange={props.textChange}
                                ></input>
                            </DetailsTextSmall>
                        </div>
                    </DetailsWrapper>
                    <ContactsWrapper>
                        <DetailsTextSmall>
                        <label></label>
                                <input
                                    type="text"
                                    name='email'
                                    value={props.userData.email}
                                    onChange={props.textChange}
                                ></input>
                        </DetailsTextSmall>
                        <DetailsTextSmall>
                        <label></label>
                                <input
                                    type="text"
                                    name='tel'
                                    value={props.userData.tel}
                                    onChange={props.textChange}
                                ></input>
                        </DetailsTextSmall>
                    </ContactsWrapper>
                </CostumeForm>
            </ContentWrapper>
            <EditWrapper>
                <button onClick={props.editHandle}>
                    <img src='./media/icons/settings.svg'></img>
                </button>
            </EditWrapper>
        </Wrapper>
    );
}

export default ProfileHeaderForm;
