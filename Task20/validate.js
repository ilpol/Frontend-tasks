function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender} = data;

    let reservedNames = ['beeline', 'beeinterns', 'bee'];


    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!license) {
        alert('Необходимо согласие');
    } else if (!firstName){
        alert('Имя не может быть пустым')
    } else if (reservedNames.includes(login)){
        alert('Данный логин занят');
    } else if (gender=='male'){
        alert(`Уважаемый ${firstName}, заявка создана`);
    } else {
        alert(`Уважаемая ${firstName}, заявка создана`);
    }
}
