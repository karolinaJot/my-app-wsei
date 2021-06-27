import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FontSize } from "../../../styledHelpers/FontSizes";
import { Colors } from "../../../styledHelpers/Colors";




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

const MessageWrapper = styled.div`
    display: flex;
    background-color: ${Colors.bg};
    margin-bottom: 10px;
`;

const MessageItemBox = styled.div`
    display: flex;

    span {
        width: 30px;
        height: 30px;
        margin-right: 5px;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;

        }
    }

    input {
        background-color: ${Colors.bg};
        border: none;
    }
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


interface IMessage {
    name: string,
    content: string,
    profile: string
};


const ProfileDetails: FC = () => {

    const [isEditing, setIsEditing] = useState(false);
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
    const [message1, setMessage1] = useState<IMessage>({
        name: "Pierwszy Użytkownik",
        content: "Wiadomość 1",
        profile: "Profile"
    });
    const [message2, setMessage2] = useState<IMessage>({
        name: "Drugi Użytkownik",
        content: "Wiadomość 2",
        profile: "Profile"
    });

    const [fee1, setFee1] = useState({
        year: 2018,
        centerCost: "CS 153",
        total: "3 500 $",
        company: "Clickford chance"
    });
    const [fee2, setFee2] = useState({
        year: 2017,
        centerCost: "CS 47",
        total: "10 500 $",
        company: "Linklaters"
    });
    const [fee3, setFee3] = useState({
        year: 2017,
        centerCost: "CS 153",
        total: "18 500 $",
        company: "Linklaters"
    });

    const handleFee1Change = (e: ChangeEvent<HTMLInputElement>) => {
        setFee1({ ...fee1, [e.target.name]: e.target.value })
    };

    const handleFee2Change = (e: ChangeEvent<HTMLInputElement>) => {
        setFee2({ ...fee2, [e.target.name]: e.target.value })
    };

    const handleFee3Change = (e: ChangeEvent<HTMLInputElement>) => {
        setFee3({ ...fee3, [e.target.name]: e.target.value })
    };

    const handleMessage1Change = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        let value = e.target.value;
        setMessage1({ ...message1, [name]: value })
    };

    const handleMessage2Change = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        let value = e.target.value;
        setMessage2({ ...message2, [name]: value })
    };

    const handlingEditing = () => {
        setIsEditing(true);
    };

    const handlingSave = () => {
        setIsEditing(false);
    };


    return (
        <Wrapper>
            {!isEditing &&
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
                        <FormItem>
                            <label>Services & projects</label>
                            <input disabled
                                type="text"
                                value={services}
                                onChange={(e) => setServices(e.target.value)}
                            ></input>
                        </FormItem>
                        <FormItem>
                            <label>Internal correspondants</label>
                            <MessageWrapper>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/userAvatar_2.jpg' alt=''></img>
                                    </span>
                                    <input disabled
                                        type='text'
                                        name="name"
                                        value={message1.name}
                                        onChange={handleMessage1Change}
                                    ></input>
                                </MessageItemBox>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/comments.svg' alt="icon"></img>
                                    </span>
                                    <input disabled
                                        type='text'
                                        name="content"
                                        value={message1.content}
                                        onChange={handleMessage1Change}></input>
                                </MessageItemBox>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/people.svg' alt="icon"></img>
                                    </span>
                                    <input disabled
                                        type='text'
                                        name="profile"
                                        value={message1.profile}
                                        onChange={handleMessage1Change}
                                    ></input>
                                </MessageItemBox>
                            </MessageWrapper>
                            <MessageWrapper>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/userAvatar_2.jpg' alt=''></img>
                                    </span>
                                    <input disabled
                                        type='text'
                                        name="name"
                                        value={message2.name}
                                        onChange={handleMessage2Change}
                                    ></input>
                                </MessageItemBox>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/comments.svg' alt="icon"></img>
                                    </span>
                                    <input disabled
                                        type='text'
                                        name="content"
                                        value={message2.content}
                                        onChange={handleMessage2Change}></input>
                                </MessageItemBox>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/people.svg' alt="icon"></img>
                                    </span>
                                    <input disabled
                                        type='text'
                                        name="profile"
                                        value={message2.profile}
                                        onChange={handleMessage2Change}
                                    ></input>
                                </MessageItemBox>
                            </MessageWrapper>
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
                                <input disabled
                                    id='name1'
                                    type="text"
                                    value={name1}
                                    onChange={(e) => setName1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='entity1'
                                    type="text"
                                    value={entity1}
                                    onChange={(e) => setEntity1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='location1'
                                    type="text"
                                    value={location1}
                                    onChange={(e) => setLocation1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='expertise1'
                                    type="text"
                                    value={expertise1}
                                    onChange={(e) => setExpertise1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='date1'
                                    type="text"
                                    value={date1}
                                    onChange={(e) => setDate1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
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
                                <input disabled
                                    id='name2'
                                    type="text"
                                    value={name2}
                                    onChange={(e) => setName2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='entity2'
                                    type="text"
                                    value={entity2}
                                    onChange={(e) => setEntity2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='location2'
                                    type="text"
                                    value={location2}
                                    onChange={(e) => setLocation2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='expertise2'
                                    type="text"
                                    value={expertise2}
                                    onChange={(e) => setExpertise2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='date2'
                                    type="text"
                                    value={date2}
                                    onChange={(e) => setDate2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
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
                                <input disabled
                                    id='name3'
                                    type="text"
                                    value={name3}
                                    onChange={(e) => setName3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='entity3'
                                    type="text"
                                    value={entity3}
                                    onChange={(e) => setEntity3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='location3'
                                    type="text"
                                    value={location3}
                                    onChange={(e) => setLocation3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='expertise3'
                                    type="text"
                                    value={expertise3}
                                    onChange={(e) => setExpertise3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='date3'
                                    type="text"
                                    value={date3}
                                    onChange={(e) => setDate3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
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
                                <input disabled
                                    id='name1'
                                    type="text"
                                    value={name1}
                                    onChange={(e) => setName1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='entity1'
                                    type="text"
                                    value={entity1}
                                    onChange={(e) => setEntity1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='location1'
                                    type="text"
                                    value={location1}
                                    onChange={(e) => setLocation1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='expertise1'
                                    type="text"
                                    value={expertise1}
                                    onChange={(e) => setExpertise1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
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
                                <input disabled
                                    id='name2'
                                    type="text"
                                    value={name2}
                                    onChange={(e) => setName2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='entity2'
                                    type="text"
                                    value={entity2}
                                    onChange={(e) => setEntity2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='location2'
                                    type="text"
                                    value={location2}
                                    onChange={(e) => setLocation2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='expertise2'
                                    type="text"
                                    value={expertise2}
                                    onChange={(e) => setExpertise2(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
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
                                <input disabled
                                    id='name3'
                                    type="text"
                                    value={name3}
                                    onChange={(e) => setName3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='entity3'
                                    type="text"
                                    value={entity3}
                                    onChange={(e) => setEntity3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='location3'
                                    type="text"
                                    value={location3}
                                    onChange={(e) => setLocation3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    id='expertise3'
                                    type="text"
                                    value={expertise3}
                                    onChange={(e) => setExpertise3(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
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
                        <SeparationBox></SeparationBox>
                        <HeaderWrapper>Amount of fees</HeaderWrapper>
                        <TableHeadersWrapper>
                            <span>Year</span>
                            <span>Cost center</span>
                            <span>Total amount</span>
                            <span>Law firm</span>
                        </TableHeadersWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    type="text"
                                    name="year"
                                    value={fee1.year}
                                    onChange={handleFee1Change}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    type="text"
                                    name="centerCost"
                                    value={fee1.centerCost}
                                    onChange={handleFee1Change}></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    type="text"
                                    name="total"
                                    value={fee1.total}
                                    onChange={handleFee1Change}></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    type="text"
                                    name="company"
                                    value={fee1.company}
                                    onChange={handleFee1Change}></input>
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    type="text"
                                    name="year"
                                    value={fee2.year}
                                    onChange={handleFee2Change}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    type="text"
                                    name="centerCost"
                                    value={fee2.centerCost}
                                    onChange={handleFee2Change}></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    type="text"
                                    name="total"
                                    value={fee2.total}
                                    onChange={handleFee2Change}></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    type="text"
                                    name="company"
                                    value={fee2.company}
                                    onChange={handleFee2Change}></input>
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label></label>
                                <input></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    type="text"
                                    name="centerCost"
                                    value={fee3.centerCost}
                                    onChange={handleFee3Change}></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    type="text"
                                    name="total"
                                    value={fee3.total}
                                    onChange={handleFee3Change}></input>
                            </FormItem>
                            <FormItem>
                                <label></label>
                                <input disabled
                                    type="text"
                                    name="company"
                                    value={fee3.company}
                                    onChange={handleFee3Change}
                                />
                            </FormItem>
                        </RowWrapper>

                    </form>
                </div>
            }
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
                                value={experties}
                                onChange={(e) => setExpertise(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <label>Specialities</label>
                            <div>
                                <input
                                    type="text"
                                    value={specialities1}
                                    onChange={(e) => setSpecialities1(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={specialities2}
                                    onChange={(e) => setSpecialities2(e.target.value)}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <label>Admission to practice law</label>
                            <input
                                type="text"
                                value={addmission}
                                onChange={(e) => setAddmission(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <label>Countires</label>
                            <input
                                type="text"
                                value={countries}
                                onChange={(e) => setCountires(e.target.value)}
                            />
                        </FormItem>
                        <SeparationBox></SeparationBox>
                        <HeaderWrapper>Panel Information</HeaderWrapper>
                        <FormItem>
                            <label>Hourly fee</label>
                            <input
                                type="text"
                                value={fee}
                                onChange={(e) => setFee(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <label>Terms & Conditions</label>
                            <input
                                type="text"
                                value={terms}
                                onChange={(e) => setTerms(e.target.value)}
                            />
                            <input style={{ marginTop: '10px' }}
                                type="file"
                                accept="image/png, image/jpg"
                            />
                        </FormItem>
                        <FormItem>
                            <label>Services & projects</label>
                            <input
                                type="text"
                                value={services}
                                onChange={(e) => setServices(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <HeaderWrapper>Internal correspondants</HeaderWrapper>
                            <MessageWrapper>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/userAvatar_2.jpg' alt=''></img>
                                    </span>
                                    <label htmlFor='message1_name'></label>
                                    <input
                                        id='message1_name'
                                        type='text'
                                        name='name'
                                        value={message1.name}
                                        onChange={handleMessage1Change}
                                    />
                                </MessageItemBox>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/comments.svg' alt="icon"></img>
                                    </span>
                                    <label htmlFor='message1_content'></label>
                                    <input
                                        id='message1_content'
                                        type='text'
                                        name='content'
                                        value={message1.content}
                                        onChange={handleMessage1Change}
                                    />
                                </MessageItemBox>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/people.svg' alt="icon"></img>
                                    </span>
                                    <label htmlFor='message1_profile'></label>
                                    <input
                                        id='message1_profile'
                                        type='text'
                                        name='profile'
                                        value={message1.profile}
                                        onChange={handleMessage1Change}
                                    />
                                </MessageItemBox>
                            </MessageWrapper>
                            <MessageWrapper>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/userAvatar_2.jpg' alt=''></img>
                                    </span>
                                    <label htmlFor='message2_name'></label>
                                    <input
                                        id='message2_name'
                                        type='text'
                                        name='name'
                                        value={message2.name}
                                        onChange={handleMessage2Change}
                                    />
                                </MessageItemBox>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/comments.svg' alt="icon"></img>
                                    </span>
                                    <label htmlFor='message2_content'></label>
                                    <input
                                        id='message2_content'
                                        type='text'
                                        name='content'
                                        value={message2.content}
                                        onChange={handleMessage2Change}
                                    />
                                </MessageItemBox>
                                <MessageItemBox>
                                    <span>
                                        <img src='./media/icons/people.svg' alt="icon"></img>
                                    </span>
                                    <label htmlFor='message2_profile'></label>
                                    <input
                                        id='message2_profile'
                                        type='text'
                                        name='profile'
                                        value={message2.profile}
                                        onChange={handleMessage2Change}
                                    />
                                </MessageItemBox>
                            </MessageWrapper>
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
                                <label htmlFor='name1'></label>
                                <input
                                    id='name1'
                                    type='text'
                                    value={name1}
                                    onChange={(e) => setName1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label htmlFor='entity1'></label>
                                <input
                                    id='entity1'
                                    type='text'
                                    value={entity1}
                                    onChange={(e) => setEntity1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label htmlFor='location1'></label>
                                <input
                                    id='location1'
                                    type='text'
                                    value={location1}
                                    onChange={(e) => setLocation1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label htmlFor='expertise1'></label>
                                <input
                                    id='expertise1'
                                    type='text'
                                    value={expertise1}
                                    onChange={(e) => setExpertise1(e.target.value)}
                                ></input>
                            </FormItem>
                            <FormItem>
                                <label htmlFor='date1'></label>
                                <input
                                    id='date1'
                                    type='text'
                                    value={date1}
                                    onChange={(e) => setDate1(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='firm1'></label>
                                <input
                                    id='firm1'
                                    type='text'
                                    value={firm1}
                                    onChange={(e) => setFirm1(e.target.value)}
                                />
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label htmlFor='name2'></label>
                                <input
                                    id='name2'
                                    type='text'
                                    value={name2}
                                    onChange={(e) => setName2(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='entity2'></label>
                                <input
                                    id='entity2'
                                    type='text'
                                    value={entity2}
                                    onChange={(e) => setEntity2(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='location2'></label>
                                <input
                                    id='location2'
                                    type='text'
                                    value={location2}
                                    onChange={(e) => setLocation2(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='expertise2'></label>
                                <input
                                    id='expertise2'
                                    type='text'
                                    value={expertise2}
                                    onChange={(e) => setExpertise2(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='date2'></label>
                                <input
                                    id='date2'
                                    type='text'
                                    value={date2}
                                    onChange={(e) => setDate2(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='firm2'></label>
                                <input
                                    id='firm2'
                                    type='text'
                                    value={firm2}
                                    onChange={(e) => setFirm2(e.target.value)}
                                />
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label htmlFor='name3'></label>
                                <input
                                    id='name3'
                                    type='text'
                                    value={name3}
                                    onChange={(e) => setName3(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='entity3'></label>
                                <input
                                    id='entity3'
                                    type='text'
                                    value={entity3}
                                    onChange={(e) => setEntity3(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='location3'></label>
                                <input
                                    id='location3'
                                    type='text'
                                    value={location3}
                                    onChange={(e) => setLocation3(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='expertise3'></label>
                                <input
                                    id='expertise3'
                                    type='text'
                                    value={expertise3}
                                    onChange={(e) => setExpertise3(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='date3'></label>
                                <input
                                    id='date3'
                                    type='text'
                                    value={date3}
                                    onChange={(e) => setDate3(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='firm3'></label>
                                <input
                                    id='firm3'
                                    type='text'
                                    value={firm3}
                                    onChange={(e) => setFirm3(e.target.value)}
                                />
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
                                <label htmlFor='name1'></label>
                                <input
                                    id='name1'
                                    type='text'
                                    value={name1}
                                    onChange={(e) => setName1(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='entity1'></label>
                                <input
                                    id='entity1'
                                    type='text'
                                    value={entity1}
                                    onChange={(e) => setEntity1(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='location1'></label>
                                <input
                                    id='location1'
                                    type='text'
                                    value={location1}
                                    onChange={(e) => setLocation1(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='expertise1'></label>
                                <input
                                    id='expertise1'
                                    type='text'
                                    value={expertise1}
                                    onChange={(e) => setExpertise1(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='date1'></label>
                                <input
                                    id='date1'
                                    type='text'
                                    value={date1}
                                    onChange={(e) => setDate1(e.target.value)}
                                />
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label htmlFor='name2' ></label>
                                <input
                                    id='name2'
                                    type='text'
                                    value={name2}
                                    onChange={(e) => setName2(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='entity2'></label>
                                <input
                                    id='entity2'
                                    type='text'
                                    value={entity2}
                                    onChange={(e) => setEntity2(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='location2'></label>
                                <input
                                    id='location2'
                                    type='text'
                                    value={location2}
                                    onChange={(e) => setLocation2(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='expertise2'></label>
                                <input
                                    id='expertise2'
                                    type='text'
                                    value={expertise2}
                                    onChange={(e) => setExpertise2(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='date2'></label>
                                <input
                                    id='date2'
                                    type='text'
                                    value={date2}
                                    onChange={(e) => setDate2(e.target.value)}
                                />
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label htmlFor='name3'></label>
                                <input
                                    id='name3'
                                    type='text'
                                    value={name3}
                                    onChange={(e) => setName3(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='entity3'></label>
                                <input
                                    id='entity3'
                                    type='text'
                                    value={entity3}
                                    onChange={(e) => setEntity3(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='location3'></label>
                                <input
                                    id='location3'
                                    type='text'
                                    value={location3}
                                    onChange={(e) => setLocation3(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='expertise3'></label>
                                <input
                                    id='expertise3'
                                    type='text'
                                    value={expertise3}
                                    onChange={(e) => setExpertise3(e.target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='date3' ></label>
                                <input
                                    id='date3'
                                    type='text'
                                    value={date3}
                                    onChange={(e) => setDate3(e.target.value)}
                                />
                            </FormItem>
                        </RowWrapper>
                        <LinkWrapper>
                            <MyLink to='proposals'>See more reviews</MyLink>
                        </LinkWrapper>
                        <SeparationBox></SeparationBox>
                        <HeaderWrapper>Amount of fees</HeaderWrapper>
                        <TableHeadersWrapper>
                            <span>Year</span>
                            <span>Cost center</span>
                            <span>Total amount</span>
                            <span>Law firm</span>
                        </TableHeadersWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label htmlFor='fee1_year'></label>
                                <input
                                    id='fee1_year'
                                    type='text'
                                    name='year'
                                    value={fee1.year}
                                    onChange={handleFee1Change}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='fee1_centerCost'></label>
                                <input
                                    id='fee1_centerCost'
                                    type='text'
                                    name='centerCost'
                                    value={fee1.centerCost}
                                    onChange={handleFee1Change}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='fee1_total'></label>
                                <input
                                    id='fee1_total'
                                    type='text'
                                    name='total'
                                    value={fee1.total}
                                    onChange={handleFee1Change}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='fee1_company'></label>
                                <input
                                    id='fee1_company'
                                    type='text'
                                    name='company'
                                    value={fee1.company}
                                    onChange={handleFee1Change}
                                />
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label htmlFor='fee2_year'></label>
                                <input
                                    id='fee2_year'
                                    type='text'
                                    name='year'
                                    value={fee2.year}
                                    onChange={handleFee2Change}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='fee2_centerCost'></label>
                                <input
                                    id='fee2_centerCost'
                                    type='text'
                                    name='centerCost'
                                    value={fee2.centerCost}
                                    onChange={handleFee2Change}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='fee2_total'></label>
                                <input
                                    id='fee2_total'
                                    type='text'
                                    name='total'
                                    value={fee2.total}
                                    onChange={handleFee2Change}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='fee2_company'></label>
                                <input
                                    id='fee2_company'
                                    type='text'
                                    name='company'
                                    value={fee2.company}
                                    onChange={handleFee2Change}
                                />
                            </FormItem>
                        </RowWrapper>
                        <RowWrapper>
                            <FormItem>
                                <label htmlFor='fee3_year'></label>
                                <input id='fee3_year' />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='fee3_centerCost'></label>
                                <input
                                    id='fee3_centerCost'
                                    type='text'
                                    name='centerCost'
                                    value={fee3.centerCost}
                                    onChange={handleFee3Change}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='fee3_total'></label>
                                <input
                                    id='fee3_total'
                                    type='text'
                                    name='total'
                                    value={fee3.total}
                                    onChange={handleFee3Change}
                                />
                            </FormItem>
                            <FormItem>
                                <label htmlFor='fee3_company'></label>
                                <input
                                    id='fee3_company'
                                    type='text'
                                    name='company'
                                    value={fee3.company}
                                    onChange={handleFee3Change}
                                />
                            </FormItem>
                        </RowWrapper>
                    </form>
                </div>
            }
        </Wrapper >
    );
}

export default ProfileDetails;