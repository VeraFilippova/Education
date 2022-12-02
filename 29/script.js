// V = a^3, где а - ребро куба. Формула нахождения площади поверхности куба: S = 6a^2



function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

// Task2

function getCoupeNumber(place) {
    if(place<0 ||  typeof(place)!=="number" || !Number.isInteger(place)){
        return 'Ошибка. Проверьте правильность введенного номера места';
    }

    if (place===0 || place>36){
        return 'Таких мест в вагоне не существует';
    }
    return Math.ceil(place/4);

}
