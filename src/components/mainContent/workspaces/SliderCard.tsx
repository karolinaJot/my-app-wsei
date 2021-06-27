import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getWorkspaceTitle } from '../../../actions/workspaceTitleActions';
import { Colors } from '../../../styledHelpers/Colors';
import { FontSize } from '../../../styledHelpers/FontSizes';

type GetWorkspaceTitle = ReturnType<typeof getWorkspaceTitle>;

const Wrapper = styled.div`
    min-width: 240px;
    height: auto;
    display: flex;
    flex-direction:column;
    border-radius: 0.5rem;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
`;

const BackgroundBox = styled.div`
    width: 100%;
    height: 80px;
    background-image: url('./media/icons/bg-image.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
`;


const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: -1.5rem;
    background-color: transparent;
`;

const IconBox = styled.div`
    width: 82px;
    height: 82px;
    background-color: ${Colors.white};
    margin-left: 1rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);

  
    img {
        padding-top: 1rem;
        width: 60%;
        height: 70%;
        object-fit: cover;
        
    };
`;
const Title = styled.span`
    display: block;
    font-size: ${FontSize[16]};
    margin-left: 1rem;
    margin-right: 0.5rem;
`;

const Details = styled.div`
    margin: 0.5rem 0;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: ${FontSize[14]};
`;

const DetailsHeader = styled.div`
    display: flex;
    justify-content: left;
    margin: 0.5rem 0 0.5rem 1rem;

`;

const DetailsHeaderIcon = styled.span`
    width: 16px;
    padding-left: 0.5rem;

    img {
        width: 80%;
        object-fit: cover;

    };
`;

const DetailsHeaderText = styled.span`
    padding-left: 0.3rem;
`;

const DetailsHeaderDot = styled.span`
    padding-left: 0.5rem;
    font-size:${FontSize[12]};
    font-weight: 700;

`;


const UpdateInfo = styled.span`
    font-size: ${FontSize[10]};
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    color: ${Colors.gray2};
    text-align: left;
  
`;

interface ISliderCardProps {
    bigIcon: string;
    title: string;
    detailsHeaderText: string;
    smallIcon: string;
    detailsHeaderUsers: string;
    link: string;

};

const CostumLink = styled(Link)`
    text-decoration: none;
`;

const CostumButton = styled.button`
    background-color: ${Colors.bg};
    border: none;
    cursor: pointer;
`;

export const SliderCard: FC<ISliderCardProps> = (props: ISliderCardProps) => {
    const dispatch = useDispatch();

    return (
        <CostumLink to={props.link}>
            <CostumButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                dispatch<GetWorkspaceTitle>(getWorkspaceTitle(props.title));
            }}>
                <Wrapper>
                    <BackgroundBox></BackgroundBox>
                    <HeaderWrapper>
                        <IconBox>
                            <img src={props.bigIcon} alt='icon'></img>
                        </IconBox>
                        <Title>{props.title}</Title>
                    </HeaderWrapper>
                    <Details>
                        <DetailsHeader>
                            <DetailsHeaderIcon>
                                <img src={props.smallIcon} alt='icon'></img>
                            </DetailsHeaderIcon>
                            <DetailsHeaderText>{props.detailsHeaderText}</DetailsHeaderText>
                            <DetailsHeaderDot>.</DetailsHeaderDot>
                            <DetailsHeaderIcon>
                                <img src='./media/icons/people.svg' alt='icon'></img>
                            </DetailsHeaderIcon>
                            <DetailsHeaderText>{props.detailsHeaderUsers}</DetailsHeaderText>
                        </DetailsHeader>
                        <UpdateInfo>Last update 2 days ago</UpdateInfo>
                    </Details>
                </Wrapper>
            </CostumButton>
        </CostumLink>

    );

}