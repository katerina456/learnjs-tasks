console.log(getSecondsToTomorrow());

function getSecondsToTomorrow() {
    let dateNow = new Date();
    let dateAfter = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    return Math.round((dateAfter - dateNow) / 1000);
}