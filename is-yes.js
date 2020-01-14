export default function isYes(yesAnswer) {
    if (yesAnswer === 'Yes' || yesAnswer === 'yes' || yesAnswer === 'YES') return true;
    else return false;
};