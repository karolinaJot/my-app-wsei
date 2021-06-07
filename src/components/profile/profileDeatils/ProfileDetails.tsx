import styled from "styled-components";
import { FC, useState } from "react";

import { FontSize } from "../../../styledHelpers/FontSizes";
import { Colors } from "../../../styledHelpers/Colors";
import { setSyntheticTrailingComments } from "typescript";



const Wrapper = styled.div`
display: flex;
flex-direction: column;

form {
    display: flex;
    flex-direction: column;
}

`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;

    button  {
        cursor: pointer;
        font-size: ${FontSize[20]};
        color: #868282;
    }
`;

const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    label {
        display: block;
        margin-bottom: 10px;
        text-align: left;
        color: #868282;
        font-size: ${FontSize[20]};
        
    }

    div {
        display: flex;
        flex-direction: row;
        
    }

    input {
        width: 300px;
        color: #2b9aad;
        background-color: #d6d6d6;
        font-size: ${FontSize[20]};
        margin-right: 15px;
        text-align: center;
    }
`;

const SeparationBox = styled.div`
margin: 20px 0;
border-bottom: 2px solid #c2baba;;
`;

const HeaderWrapper = styled.span`
    font-size: ${FontSize[20]};
    color: ${Colors.black};
    margin-top: 20px;
`;


const ProfileDetails: FC = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [experties, setExpertise] = useState("Mergers and acqusition");
    const [specialities1, setSpecialities1] = useState("Cross border operation");
    const [specialities2, setSpecialities2] = useState("Transaction over 500M$");
    const [addmission, setAddmission] = useState("Paris bar association");
    const [countries, setCountires] = useState("France");
    const [fee, setFee] = useState("610$/hour (negociated)");
    const [terms, setTerms] = useState("Monthly 10k$ retainer");

    const handlingEditing = () => {
        setIsEditing(true);
    };

    const handlingSave = () => {
        console.log("zapisuje");
        setIsEditing(false);
    };


    return (
        <Wrapper>
            {!isEditing && <div>
                <ButtonBox>
                    <button onClick={handlingEditing}>Edit</button>
                </ButtonBox>
                <form>
                    <FormItem>
                        <label>Expertise</label>
                        <input disabled
                            value={experties}
                        ></input>
                    </FormItem>
                    <FormItem>
                        <label>Specialities</label>
                        <div>
                            <input disabled
                                value={specialities1}></input>
                            <input disabled
                                value={specialities2}></input>
                        </div>
                    </FormItem>
                    <FormItem>
                        <label>Admission to practice law</label>
                        <input disabled
                            value={addmission}></input>
                    </FormItem>
                    <FormItem>
                        <label>Countires</label>
                        <input disabled
                            value={countries}></input>
                    </FormItem>
                    <SeparationBox></SeparationBox>
                    <HeaderWrapper>Panel Information</HeaderWrapper>
                    <FormItem>
                        <label>Hourly fee</label>
                        <input disabled
                            value={fee}></input>
                    </FormItem>
                    <FormItem>
                        <label>Terms & Conditions</label>
                        <input disabled
                            value={terms}></input>
                        <input disabled
                            style={{ marginTop: '10px' }}
                            value="tutaj będzie załącznik"
                        ></input>
                    </FormItem>
                    <HeaderWrapper>Services & projects</HeaderWrapper>

                </form>
            </div>
            }
            {isEditing && <div>
                <ButtonBox>
                    <button onClick={handlingSave}>Save</button>
                </ButtonBox>
                <form>
                    <FormItem>
                        <label>Expertise</label>
                        <input
                            type="text"
                            required
                            value={experties}
                            onChange={(e) => setExpertise(e.target.value)}
                        ></input>
                    </FormItem>
                    <FormItem>
                        <label>Specialities</label>
                        <div>
                            <input
                                type="text"
                                value={specialities1}
                                onChange={(e) => setSpecialities1(e.target.value)}
                            ></input>
                            <input
                                type="text"
                                value={specialities2}
                                onChange={(e) => setSpecialities2(e.target.value)}></input>
                        </div>
                    </FormItem>
                    <FormItem>
                        <label>Admission to practice law</label>
                        <input
                            type="text"
                            value={addmission}
                            onChange={(e) => setAddmission(e.target.value)}
                        ></input>
                    </FormItem>
                    <FormItem>
                        <label>Countires</label>
                        <input
                            type="text"
                            value={countries}
                            onChange={(e) => setCountires(e.target.value)}
                        ></input>
                    </FormItem>
                    <SeparationBox></SeparationBox>
                    <HeaderWrapper>Panel Information</HeaderWrapper>
                    <FormItem>
                        <label>Hourly fee</label>
                        <input
                            type="text"
                            value={fee}
                            onChange={(e) => setFee(e.target.value)}
                        ></input>
                    </FormItem>
                    <FormItem>
                        <label>Terms & Conditions</label>
                        <input
                            type="text"
                            value={terms}
                            onChange={(e) => setTerms(e.target.value)}
                        ></input>
                        <input style={{ marginTop: '10px' }}
                        type="file"
                        accept="image/png, image/jpg"
                        ></input>
                    </FormItem>
                    <HeaderWrapper>Services & projects</HeaderWrapper>
                </form>
            </div>
            }
        </Wrapper>
    );
}

export default ProfileDetails;