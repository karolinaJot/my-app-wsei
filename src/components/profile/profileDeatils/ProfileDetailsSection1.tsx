import styled from "styled-components";
import { FC, useState } from "react";
import { Colors } from "../../../styledHelpers/Colors";
import { FontSize } from "../../../styledHelpers/FontSizes";


export interface ProfileDetailsSection1Props {

}




const Wrapper = styled.div`
display: flex;
flex-direction: column;

form {
    display: flex;
    flex-direction: column;
}

`;

const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid red;
    margin-top: 20px;

    label {
        display: block;
        margin-bottom: 10px;
        text-align: left;
        color: #868282;
        font-size: ${FontSize[20]};
        
    }

    input {
        width: 300px;
        color: #86d4e2;
        background-color: #d6d6d6;
        font-size: ${FontSize[20]};
    }
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;

    button  {
        cursor: pointer;
    }
`;

const ProfileDetailsSection1: FC = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [experties, setExpertise] = useState("");

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
                        <input disabled></input>
                    </FormItem>
                    <FormItem>
                        <label>Admission to practice law</label>
                        <input disabled></input>
                    </FormItem>
                    <FormItem>
                        <label>Countires</label>
                        <input disabled></input>
                    </FormItem>
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
                        <input></input>
                    </FormItem>
                    <FormItem>
                        <label>Admission to practice law</label>
                        <input></input>
                    </FormItem>
                    <FormItem>
                        <label>Countires</label>
                        <input></input>
                    </FormItem>
                </form>
            </div>
            }
        </Wrapper>
    );
}

export default ProfileDetailsSection1;