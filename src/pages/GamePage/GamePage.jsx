import {GameField, ThemeChanger, HintContainer, WarningButton, Result} from "../../components";
import {getAnswerSet, getGameHints, selectRandomGame} from "../../utility";
import {useState} from "react";
import styles from "./GamePage.module.css";
import { useParams } from "react-router";
import { ModalLayout } from "../../components/ModalLayout/ModalLayout.jsx";

const initialGameState = (difficulty) => ({
    gameIndex: selectRandomGame(difficulty),
    startTime: new Date().getTime(),
    success: false
});

export function GamePage() {
    const {nickname, difficulty} = useParams();

    const [isResultShown, setIsResultShown] = useState(false);
    const [gameStage, setGameStage] = useState(() => initialGameState(difficulty))

    function playAgain() {
        setGameStage(initialGameState(difficulty));
        setIsResultShown(false);
    }
    function onGameOver(success = true) {
        setGameStage((prevGame) => ({
            ...prevGame,
            success: success
        }));
        setIsResultShown(true);
    }
    function Surrender() { onGameOver(false); }


    return (
        <>
            <div className={styles.page} >
                <ThemeChanger />
                <div className={styles.container}>
                    <GameField answerSet={getAnswerSet(gameStage.gameIndex)} onSolve={onGameOver} key={new Date().getTime()} />
                    <WarningButton text={"Surrender"} warningText={"Are you sure?"} onSuccess={Surrender}/>
                    <HintContainer hints={getGameHints(gameStage.gameIndex)} />
                </div>
            </div>
            <ModalLayout isOpen={isResultShown}>
                <Result
                    difficulty={difficulty}
                    success={gameStage.success}
                    time={new Date().getTime() - gameStage.startTime}
                    playAgain={playAgain}
                />
            </ModalLayout>
        </>
    );
}
