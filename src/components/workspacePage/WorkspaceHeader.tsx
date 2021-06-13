import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSizes';


const Wrapper = styled.div`
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
    background-color: ${Colors.white};
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.span`
    display: block;
    width: 100%;
    height: 200px;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        
        
    }
`;

const TextWrapper = styled.div`
    margin-top: 10px;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3 {
        margin-left: 50px;
        font-size: ${FontSize[18]};
        font-weight: 700;
    }

    span{
        margin-right: 10px;
        width: 14px;
        height: 14px;


        img {
            width: 100%;
            height: 100%;
            object-fit: cover;

        };
    };
`;

const ContentWrapper = styled.div`
    display: flex;
`;

const IconBox = styled.span`
    margin: 20px;
    display: block;
    height: 40px;
    width: 40px;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        object-fit: fill;
    };
`;

const ContentTextBox = styled.span`
    display: block;
    font-size: ${FontSize[16]};
    letter-spacing: 1px; 
    margin-right: 10px;
    margin-top: 20px;

`;


const WorkspaceHeader: FC = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <img src='./media/photo_z_sieci/room.jpg' alt="conferenc room image"></img>
            </ImageWrapper>
            <TextWrapper>
                <HeaderWrapper>
                    <h3>Corporate holdings</h3>
                    <span>
                        <img src='./media/icony_z_sieci/settings1.png' alt='settings icon'></img>
                    </span>
                </HeaderWrapper>
                <ContentWrapper>
                    <IconBox>
                        <img src='./media/icons/entities2.png' alt='entities icon'></img>
                    </IconBox>
                    <ContentTextBox>Workspace purpose and bit of context. 
                        This much needed description is here to remind people where they are,
                        if they are new or have poor memory
                        </ContentTextBox>
                </ContentWrapper>
            </TextWrapper>
        </Wrapper>
    );
}
 
export default WorkspaceHeader;