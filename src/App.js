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
`;

const CardContainer = styled.div`
    padding: 10px;
`;

const App = () => {
    const deck = useMemo(() => {
        const suits = ["hearts", "diamonds", "clubs", "spades"];
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
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
            {cards.map((card) => (
                <CardContainer>
                    <PlayingCard key={`${card.suit}-${card.value}`} value={card.value} suit={card.suit}>{`${card.value} of ${card.suit}`}</PlayingCard>
                </CardContainer>
            ))}
        </Container>
    );
};

export default App;
