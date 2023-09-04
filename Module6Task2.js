function correctNumber (number) {
    if (number > 1000 || number < 0) {
        return 'Данные не верны';
    } else if (number === 0 || number === 1) {
        return 'Не простое, не составное число';
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return 'Составное число';
            }
        }
        return 'Простое число';
    }
}

console.log(correctNumber(67));