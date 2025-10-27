
export function convertTime(ms) {
    console.log(ms)
    let s = Math.floor(ms / 1000);

    if (s < 60) {
        return `${s} seconds`;
    }

    let m = Math.floor(s / 60);
    s = s % 60;

    if (m < 60) {
        return `${m} minutes, ${s} seconds`;
    }

    return `${m} minutes`;

}