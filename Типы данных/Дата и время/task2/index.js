let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );    

function getWeekDay(date) {
    let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    let day = date.getDay();
    return week[day];
}