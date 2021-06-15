import styled from "styled-components";
import { FC, useState } from "react";

import { FontSize } from "../../../styledHelpers/FontSizes";
import { Colors } from "../../../styledHelpers/Colors";
import { Link } from "react-router-dom";




const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0 10px;

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

    div {
        display: flex;
        flex-direction: row;
        
    }

    label {
        display: block;
        margin-bottom: 10px;
        text-align: left;
        color: ${Colors.gray2};
        font-size: ${FontSize[20]};
        
    }


    input {
        width: 80%;
        color: ${Colors.blue1};
        background-color: #d6d6d6;
        font-size: ${FontSize[16]};
        margin-right: 15px;
        text-align: left;
    }
`;

const SeparationBox = styled.div`
margin: 20px 0;
border-bottom: 1px solid ${Colors.gray1};
`;

const HeaderWrapper = styled.span`
    font-size: ${FontSize[20]};
    color: ${Colors.black};
    margin-top: 20px;
`;


const TableHeadersWrapper = styled.div`
    width: 100%;
    margin-top: 40px;
    font-size: ${FontSize[16]};
    display: flex;
    flex-direction: row;

    span {
        display: block;
        width: 170px;
        font-size: ${FontSize[18]};
        font-weight: 700;
        color: ${Colors.gray2};
        margin-right: 40px;
    };

`;

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;

    input {
        background-color: ${Colors.white};
        border: none;
    }
`;

const LinkWrapper = styled.div`
    font-size: ${FontSize[16]};
    margin: 10px 20px;
    display: flex;
    justify-content: flex-end;
    
`;

const MyLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.blue1};
    font-weight: 700;

`;


const ProfileDetails: FC = () => {

    const [isEditing, setIsEditing] = useState(true);
    const [experties, setExpertise] = useState("Mergers and acqusition");
    const [specialities1, setSpecialities1] = useState("Cross border operation");
    const [specialities2, setSpecialities2] = useState("Transaction over 500M$");
    const [addmission, setAddmission] = useState("Paris bar association");
    const [countries, setCountires] = useState("France");
    const [fee, setFee] = useState("610$/hour (negociated)");
    const [terms, setTerms] = useState("Monthly 10k$ retainer");
    const [services, setServices] = useState("Corporate M&A and international aquisitions");
    const [name1, setName1] = useState<string>("Operation");
    const [entity1, setEntity1] = useState<string>("Renault Co");
    const [location1, setLocation1] = useState<string>("France");
    const [expertise1, setExpertise1] = useState<string>("#Tax");
    const [date1, setDate1] = useState<string>("20/01/2018");
    const [firm1, setFirm1] = useState<string>("Racine");
    const [name2, setName2] = useState<string>("Op. Prometh...");
    const [entity2, setEntity2] = useState<string>("Renault HQ");
    const [location2, setLocation2] = useState<string>("USA");
    const [expertise2, setExpertise2] = useState<string>("#M$A");
    const [date2, setDate2] = useState<string>("20/02/2019");
    const [firm2, setFirm2] = useState<string>("Clifford chance");
    const [name3, setName3] = useState<string>("Op. Latandre");
    const [entity3, setEntity3] = useState<string>("Renault Br...");
    const [location3, setLocation3] = useState<string>("Italia");
    const [expertise3, setExpertise3] = useState<string>("#Social");
    const [date3, setDate3] = useState<string>("18/02/2019");
    const [firm3, setFirm3] = useState<string>("SVZ");

    const handlingEditing = () => {
        setIsEditing(true);
    };

    const handlingSave = () => {
        console.log("zapisuje");
        setIsEditing(false);
    };


    return (
        <Wrapper>
            {/* {!isEditing && 
            <div>
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
                            value="attachement.jpg"
                        ></input>
                    </FormItem>
                    <HeaderWrapper>Services & projects</HeaderWrapper>

                </form>
            </div>
            } */}
            {isEditing &&
                <div>
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
                        <FormItem>
                            <label>Services & projects</label>
                            <input
                                type="text"
                                value={services}
                                onChange={(e) => setServices(e.target.value)}
                            ></input>
                        </FormItem>
                        <FormItem>
                            <label>Internal correspondants TO DOOOO</label>

                        </FormItem>
                        <SeparationBox></SeparationBox>

                        <HeaderWrapper>Proposlas</HeaderWrapper>
                        <TableHeadersWrapper>
                            <span>Name</span>
                            <span>Entity</span>
                            <span>Location</span>
                            <span>Expertise</span>
                            <span>Data</span>
                            <span>Firm</span>
                        </TableHeadersWrapper>
                        <SeparationBox></SeparationBox>
                        <RowWrapper>
                            <FormItem>
                                <label></label>
                                <input
                                    id='name1'
                                    type="text"
                                    value={name1}
                                    onChange={(e) => setName1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='entity1'
                                    type="text"
                                    value={entity1}
                                    onChange={(e) => setEntity1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='location1'
                                    type="text"
                                    value={location1}
                                    onChange={(e) => setLocation1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='expertise1'
                                    type="text"
                                    value={expertise1}
                                    onChange={(e) => setExpertise1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='date1'
                                    type="text"
                                    value={date1}
                                    onChange={(e) => setDate1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='firm1'
                                    type="text"
                                    value={firm1}
                                    onChange={(e) => setFirm1(e.target.value)}
                                ></input>
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label></label>
                                <input
                                    id='name2'
                                    type="text"
                                    value={name2}
                                    onChange={(e) => setName2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='entity2'
                                    type="text"
                                    value={entity2}
                                    onChange={(e) => setEntity2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='location2'
                                    type="text"
                                    value={location2}
                                    onChange={(e) => setLocation2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='expertise2'
                                    type="text"
                                    value={expertise2}
                                    onChange={(e) => setExpertise2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='date2'
                                    type="text"
                                    value={date2}
                                    onChange={(e) => setDate2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='firm2'
                                    type="text"
                                    value={firm2}
                                    onChange={(e) => setFirm2(e.target.value)}
                                ></input>
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label></label>
                                <input
                                    id='name3'
                                    type="text"
                                    value={name3}
                                    onChange={(e) => setName3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='entity3'
                                    type="text"
                                    value={entity3}
                                    onChange={(e) => setEntity3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='location3'
                                    type="text"
                                    value={location3}
                                    onChange={(e) => setLocation3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='expertise3'
                                    type="text"
                                    value={expertise3}
                                    onChange={(e) => setExpertise3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='date3'
                                    type="text"
                                    value={date3}
                                    onChange={(e) => setDate3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='firm3'
                                    type="text"
                                    value={firm3}
                                    onChange={(e) => setFirm3(e.target.value)}
                                ></input>
                            </FormItem>
                        </RowWrapper>
                        <LinkWrapper>
                            <MyLink to='proposals'>See more proposals</MyLink>
                        </LinkWrapper>
                        <SeparationBox></SeparationBox>
                        <HeaderWrapper>Internal reviews</HeaderWrapper>
                        <TableHeadersWrapper>
                            <span>Name</span>
                            <span>Entity</span>
                            <span>Location</span>
                            <span>Expertise</span>
                            <span>Data</span>
                        </TableHeadersWrapper>
                        <SeparationBox></SeparationBox>
                        <RowWrapper>
                            <FormItem>
                                <label></label>
                                <input
                                    id='name1'
                                    type="text"
                                    value={name1}
                                    onChange={(e) => setName1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='entity1'
                                    type="text"
                                    value={entity1}
                                    onChange={(e) => setEntity1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='location1'
                                    type="text"
                                    value={location1}
                                    onChange={(e) => setLocation1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='expertise1'
                                    type="text"
                                    value={expertise1}
                                    onChange={(e) => setExpertise1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='date1'
                                    type="text"
                                    value={date1}
                                    onChange={(e) => setDate1(e.target.value)}
                                ></input>
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label></label>
                                <input
                                    id='name2'
                                    type="text"
                                    value={name2}
                                    onChange={(e) => setName2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='entity2'
                                    type="text"
                                    value={entity2}
                                    onChange={(e) => setEntity2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='location2'
                                    type="text"
                                    value={location2}
                                    onChange={(e) => setLocation2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='expertise2'
                                    type="text"
                                    value={expertise2}
                                    onChange={(e) => setExpertise2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='date2'
                                    type="text"
                                    value={date2}
                                    onChange={(e) => setDate2(e.target.value)}
                                ></input>
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label></label>
                                <input
                                    id='name3'
                                    type="text"
                                    value={name3}
                                    onChange={(e) => setName3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='entity3'
                                    type="text"
                                    value={entity3}
                                    onChange={(e) => setEntity3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='location3'
                                    type="text"
                                    value={location3}
                                    onChange={(e) => setLocation3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='expertise3'
                                    type="text"
                                    value={expertise3}
                                    onChange={(e) => setExpertise3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input
                                    id='date3'
                                    type="text"
                                    value={date3}
                                    onChange={(e) => setDate3(e.target.value)}
                                ></input>
                            </FormItem>
                        </RowWrapper>
                        <LinkWrapper>
                            <MyLink to='proposals'>See more reviews</MyLink>
                        </LinkWrapper>
                    </form>
                </div>
            }
        </Wrapper >
    );
}

export default ProfileDetails;