import {useEffect} from "react";
import { useParams } from "react-router";
import {
    GameField, 
    ThemeChanger, 
    HintContainer, 
    WarningButton, 
    Result,
    ModalLayout
} from "../../components";
import styles from "./GamePage.module.css";
import { useGameStore, useSettingsStore } from "../../store";
import { difficulties } from "../../utility";


export function GamePage() {
    const {nickname, difficulty} = useParams();
    if(!Object.values(difficulties).includes(difficulty)) return null;

    const gameIndex = useGameStore(state => state.gameIndex);
    const startTime = useGameStore(state => state.startTime);
    const startGame = useGameStore(state => state.startGame);
    const surrender = useGameStore(state => state.surrender);
    const status = useGameStore(state => state.status);
    const setUsername = useSettingsStore(state => state.setUsername);
    const setDifficulty = useSettingsStore(state => state.setDifficulty);

    useEffect(() => {
        setUsername(nickname);
        setDifficulty(difficulty);
        startGame();
    }, [difficulty, nickname]);

    if(gameIndex == null) return null;

    return (
        <>
            <div className={styles.page} >
                <ThemeChanger />
                <div className={styles.container}>
                    <GameField />
                    <WarningButton 
                        text={"Surrender"} 
                        warningText={"Are you sure?"} 
                        onSuccess={surrender} 
                        key={startTime}
                    />
                    <HintContainer />
                </div>
            </div>
            <ModalLayout isOpen={status != "game"}>
                <Result />
            </ModalLayout>
        </>
    );
}
