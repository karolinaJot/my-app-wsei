import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    border: 1px solid green;
    width: 100%;
    margin: 0 auto;
    font-size: ${FontSize[14]};
    display: flex;
    flex-direction: row;

`;

const HeaderWrapper = styled.div`
    width: 100%;
    color: #808080;
    margin: 10px;
`;

const FooterWrapper = styled.div`
    width: 100%;
    color: #1d1d97;
    margin: 0 10px 10px 10px;
`;

const ContentWrapper = styled.div`
    width: 100%;
    color: ${Colors.black};
`;

const FiltesRow = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
`;

const WhereBox = styled.div`
    display: flex;
    flex-direction: row;

`;

const CloseIconBox = styled.span`
    width: 14px;
    height: 14px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const TextBox = styled.span`
`;





 
const Filters: FC = () => {
    return (
        <Wrapper>
            <HeaderWrapper>Rows are filtered by the following conditions starting from the top</HeaderWrapper>
            <ContentWrapper>
                <FiltesRow>
                    <WhereBox>
                        <CloseIconBox>
                            <img src='./media/icony_z_sieci/close.png' alt='close icon'></img>
                        </CloseIconBox>
                        <TextBox>Where</TextBox>
                    </WhereBox>
                </FiltesRow>
            </ContentWrapper>
            <FooterWrapper></FooterWrapper>
        </Wrapper>
    );
}
 
export default Filters;