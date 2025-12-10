import {GameField, ThemeChanger, HintContainer, WarningButton, Result} from "../../components";
import {useEffect} from "react";
import styles from "./GamePage.module.css";
import { useParams } from "react-router";
import { ModalLayout } from "../../components/ModalLayout/ModalLayout.jsx";
import { useGameStore } from "../../store/gameStore.jsx";
import { difficulties } from "../../utility";


export function GamePage() {
    const {nickname, difficulty} = useParams();
    if(!Object.values(difficulties).includes(difficulty)) return null;

    const gameIndex = useGameStore(state => state.gameIndex);
    const startTime = useGameStore(state => state.startTime);
    const startGame = useGameStore(state => state.startGame);
    const surrender = useGameStore(state => state.surrender);
    const status = useGameStore(state => state.status);

    useEffect(() => {
        startGame(difficulty);
    }, [difficulty, startGame]);

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
                <Result difficulty={difficulty} />
            </ModalLayout>
        </>
    );
}
