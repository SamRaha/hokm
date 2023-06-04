import styled, { css } from "styled-components/macro";

const CardContainer = styled.div`
    height: 177.8px;
    width: 114.3px;
    border: 2px solid black;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: arial;
    color: black;
    ${({ red }) =>
        red &&
        css`
            color: red;
        `}
`;

const Top = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

const Middle = styled.div`
    font-size: 60px;
`;

const Bottom = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    transform: rotate(180deg);
`;

const Card = styled.div`
    font-size: 20px;
`;

const Suit = styled.div`
    font-size: 15px;
`;

const suits = { hearts: "♥", diamonds: "♦", clubs: "♣", spades: "♠" };

const PlayingCard = ({ suit, value }) => {
    return (
        <CardContainer red={suit === "hearts" || suit === "diamonds"}>
            <Top>
                <Card>{value}</Card>
                <Suit>{suits[suit]}</Suit>
            </Top>
            <Middle>{suits[suit]}</Middle>
            <Bottom>
                <Card>{value}</Card>
                <Suit>{suits[suit]}</Suit>
            </Bottom>
        </CardContainer>
    );
};

export default PlayingCard;
