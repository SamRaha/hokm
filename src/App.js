import { useState, useEffect, useMemo } from "react";
import styled from "styled-components/macro";
import "./App.css";
import PlayingCard from "./components/PlayingCard";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 20px;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Button = styled.button`
    margin: 10px;
    height: 50px;
`;

const CardContainer = styled.div`
    padding: 10px;
`;

const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const App = () => {
    const deck = useMemo(() => {
        let initialDeck = [];
        suits.forEach((suit) => {
            values.forEach((value) => {
                initialDeck.push({ suit, value });
            });
        });
        return initialDeck;
    }, []);

    const [cards, setCards] = useState(deck);

    // Shuffle function
    const shuffleDeck = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    };

    // Shuffle cards on component mount
    useEffect(() => {
        setCards(shuffleDeck([...deck]));
    }, [deck]);

    // Shuffle cards on button click
    const handleShuffleClick = () => {
        setCards((prevCards) => shuffleDeck([...prevCards]));
    };

    console.log(cards);

    return (
        <Container>
            <Button onClick={handleShuffleClick}>Shuffle Deck</Button>
            {/* {cards.map((card) => (
                <CardContainer>
                    <PlayingCard key={`${card.suit}-${card.value}`} value={card.value} suit={card.suit}>{`${card.value} of ${card.suit}`}</PlayingCard>
                </CardContainer>
            ))} */}
        </Container>
    );
};

export default App;

// 2 player game
// first to 7 wins (maximum 13 rounds can be played)
// there are 3 phases
// phase 1 only happens once per game
// phases 2 and 3 happen each round
// phase 1:
// first you need to declare who the hakem (ruler) is.
// this happens by giving each player a card 1 by 1 until someone gets an ace
// the person with an ace is the hakem (ruler) and then the cards are returned to the deck and then the cards are shuffled again

//phase 2:
// each player gets 5 cards from the deck. method would be .pop() to get the last cards.
// players look at their 5 cards, but they don't reveal them to each other.
// the hokm (ruling suit) is then chosen by the hakem (ruler). then the hakem can drop 2 or 3 cards (if they drop 3, then they get to see the last 2 cards in the next bit)
// the players start picking up from the deck, starting with the hakem first. this happens with the first player picking up one card,

// first phase
