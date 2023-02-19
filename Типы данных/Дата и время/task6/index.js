console.log(getSecondsToday()); 

function getSecondsToday() {
    let dateNow = new Date();
    let dateBefore = new Date();
    dateBefore.setHours(0,0,0,0);
    return Math.round((dateNow - dateBefore) / 1000);
}