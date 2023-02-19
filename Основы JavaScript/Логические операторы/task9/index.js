let login = prompt('Кто там?');

if (login !== null && login !== '') {
    if (login === 'Админ') {
        let pass = prompt('Пароль?');

        if (pass !== null && pass !== '') {
            if (pass === 'Я Главный') {
                alert('Здравствуйте!');
            } else {
                alert('Неверный пароль');
            }
        } else {
            alert('Отменено');
        }
    } else {
        alert('Я вас не знаю');
    }
} else {
    alert('Отменено');
}
