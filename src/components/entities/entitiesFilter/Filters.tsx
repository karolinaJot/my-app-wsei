import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    width: 800px;
    margin: 0 auto;
    font-size: ${FontSize[16]};
    font-weight: 500;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1000;
    background-color: ${Colors.white};
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);

`;

const HeaderWrapper = styled.div`
    width: 100%;
    color: ${Colors.gray1};
    margin: 10px;
`;


const ContentWrapper = styled.div`
    width: auto;
    color: ${Colors.black};
`;

const FiltesRow = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;

`;

const FilterElementBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;

`;

const CloseIconBox = styled.span`
    width: 14px;
    height: 14px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    };
`;

const TextBox = styled.span`
`;

const ArrowIconBox = styled.span`
    width: 14px;
    height: 14px;
    padding-left: 5px;
    


    img {
        width: 80%;
        object-fit: cover;
    };    

`;

const InputElement = styled.input`
    border-radius: 3px;
`;

const FooterWrapper = styled.div`
    width: 100%;
    color: ${Colors.blue1};
    margin: 0 10px 10px 10px;
    display: flex;
`;

const FooterElement = styled.div`
    display: flex;
    margin-left: 10px;
`;

const AddIconBox = styled.span`
    width: 14px;
    height: 14px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    };
`;









const Filters: FC = () => {
    return (
        <Wrapper>
            <HeaderWrapper>Rows are filtered by the following conditions starting from the top</HeaderWrapper>
            <ContentWrapper>
                <FiltesRow>
                    <FilterElementBox>
                        <CloseIconBox>
                            <img src='./media/icony_z_sieci/close.png' alt='close icon'></img>
                        </CloseIconBox>
                        <TextBox>Where</TextBox>
                    </FilterElementBox>
                    <FilterElementBox>
                        <TextBox>Company</TextBox>
                        <ArrowIconBox>
                            <img src='./media/icons/arrow-down.png' alt='arrow icon'></img>
                        </ArrowIconBox>
                    </FilterElementBox>
                    <FilterElementBox>
                        <TextBox>Contains</TextBox>
                        <ArrowIconBox>
                            <img src='./media/icons/arrow-down.png' alt='arrow icon'></img>
                        </ArrowIconBox>
                    </FilterElementBox>
                    <FilterElementBox>
                        <InputElement disabled placeholder='Type...' ></InputElement>
                    </FilterElementBox>
                </FiltesRow>
                <FiltesRow>
                    <FilterElementBox>
                        <CloseIconBox>
                            <img src='./media/icony_z_sieci/close.png' alt='close icon'></img>
                        </CloseIconBox>
                        <TextBox>Where</TextBox>
                    </FilterElementBox>
                    <FilterElementBox>
                        <TextBox>Status</TextBox>
                        <ArrowIconBox>
                            <img src='./media/icons/arrow-down.png' alt='arrow icon'></img>
                        </ArrowIconBox>
                    </FilterElementBox>
                    <FilterElementBox>
                        <TextBox>Is</TextBox>
                        <ArrowIconBox>
                            <img src='./media/icons/arrow-down.png' alt='arrow icon'></img>
                        </ArrowIconBox>
                    </FilterElementBox>
                    <FilterElementBox>
                        <InputElement disabled placeholder='Type...' ></InputElement>
                    </FilterElementBox>
                    <FilterElementBox>
                        <TextBox>In</TextBox>
                        <ArrowIconBox>
                            <img src='./media/icons/arrow-down.png' alt='arrow icon'></img>
                        </ArrowIconBox>
                    </FilterElementBox>
                    <FilterElementBox>
                        <InputElement disabled placeholder='Entity...' ></InputElement>
                    </FilterElementBox>
                </FiltesRow>
                <FiltesRow>
                    <FilterElementBox>
                        <CloseIconBox>
                            <img src='./media/icony_z_sieci/close.png' alt='close icon'></img>
                        </CloseIconBox>
                        <TextBox>And</TextBox>
                    </FilterElementBox>
                    <FilterElementBox>
                        <TextBox>Status</TextBox>
                        <ArrowIconBox>
                            <img src='./media/icons/arrow-down.png' alt='arrow icon'></img>
                        </ArrowIconBox>
                    </FilterElementBox>
                    <FilterElementBox>
                        <TextBox>Ends before</TextBox>
                        <ArrowIconBox>
                            <img src='./media/icons/arrow-down.png' alt='arrow icon'></img>
                        </ArrowIconBox>
                    </FilterElementBox>
                    <FilterElementBox>
                        <InputElement disabled placeholder='Date' ></InputElement>
                    </FilterElementBox>
                    <FilterElementBox>
                        <TextBox>In</TextBox>
                        <ArrowIconBox>
                            <img src='./media/icons/arrow-down.png' alt='arrow icon'></img>
                        </ArrowIconBox>
                    </FilterElementBox>
                    <FilterElementBox>
                        <InputElement disabled placeholder='Entity...' ></InputElement>
                    </FilterElementBox>
                </FiltesRow>
            </ContentWrapper>
            <FooterWrapper>
                <FooterElement>
                    <AddIconBox>
                        <img src='./media/icony_z_sieci/plus.png'></img>
                    </AddIconBox>
                    <TextBox>Add filter</TextBox>
                </FooterElement>
                <FooterElement>
                    <TextBox>choose property</TextBox>
                    <ArrowIconBox>
                        <img src='./media/icons/arrow-down.png' alt='arrow icon'></img>
                    </ArrowIconBox>
                </FooterElement>
            </FooterWrapper>
        </Wrapper>
    );
}

export default Filters;