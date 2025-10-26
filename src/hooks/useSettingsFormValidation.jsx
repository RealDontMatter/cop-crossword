
export function useSettingsFormValidation(difficulty, setDifficultyWarningVisible, nickname, setNicknameWarningVisible, onSuccess) {

    function onValidation(){
        setNicknameWarningVisible(nickname === "");
        setDifficultyWarningVisible(difficulty === "");

        if (nickname === "") {
            return;
        }
        if (difficulty === "") {
            return;
        }

        onSuccess();
    }

    return [onValidation]

}