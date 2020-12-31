import styled , {css} from "styled-components";
import PropTypes from "prop-types";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
import LinkIcon from '../../../assets/icons/bulb.svg';
import { Redirect } from "react-router-dom";
import { useState } from "react";

const CARD_TYPE = {
    note: "NOTE",
    twitter: "TWITTER",
    article: "ARTICLE",
}

const StyledWrapper = styled.div `
    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
    border-radius: 10px;
    overflow: hidden;
    min-height: 380px;
    display: grid;
    grid-template-rows: 0.25fr 1fr;
`

const InnerWrapper = styled.div `
    position: relative;
    padding: 17px 30px 10px;
    background-color: ${({theme, activeColor})=> (activeColor ? theme[activeColor] : "white")};

    :first-of-type {
        z-index: 9999;
    }

    ${({flex})=>
    flex && css `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `}
`

const DateInfo = styled(Paragraph) `
    margin: 0 0 10px;
    font-weight: ${({theme})=> theme.bold};
    font-size: ${({theme})=> theme.fontSize.sx};
`

const StyledHeading = styled(Heading) `
    margin: 5px 0 0;
`
const StyledAvatar = styled.img `
    width: 86px;
    height: 86px;
    border: 3px solid ${({theme})=> theme.twitters};
    border-radius: 10px;
    position: absolute;
    right: 25px;
    top: 25px;
`
const StyledLinkButton = styled.a `
    display: block;
    width: 47px;
    height: 47px;
    border-radius: 50px;
    background: white url(${LinkIcon}) no-repeat;
    background-size: 50%;
    background-position: 50%;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
`

const Card = ({ cardType, title, created, articleUrl, content, id }) => {
    const [redirect, setRedirect] = useState(false);

    const handleCardClick = () => {
        setRedirect(true);
    }

    if(redirect) {
        return <Redirect to={`${cardType}/${id}`} />
    }

    return (
        <StyledWrapper onClick={handleCardClick}>
            <InnerWrapper activeColor={cardType}>
            <StyledHeading>{title}</StyledHeading>
            </InnerWrapper>
            <DateInfo>{created}</DateInfo>
            {cardType === 'twitters' && <StyledAvatar />}
            {cardType === 'articles' && <StyledLinkButton href={articleUrl} />}
            <InnerWrapper flex>
            <Paragraph> {content} </Paragraph>
            <Button secondary>REMOVE</Button>
            </InnerWrapper>
        </StyledWrapper>
    )
}

// eslint-disable-next-line react/no-typos
Card.PropTypes = {
    cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
    title: PropTypes.string.isRequired,
    reated: PropTypes.string.isRequired,
    twiiterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
}

Card.defaultProps = {
    cardType: CARD_TYPE.note,
    twitterName: null,
    articleUrl: null,
}

export default Card;