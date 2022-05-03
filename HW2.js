// JS. HW_2

// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

let input = "ssS1@"

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
    function CheckString(input) {
    if (typeof input !== "string") {
        console.log("error - only string")
        return false
    } else {
        console.log("ok - это string")
    }
}
CheckString(input)
//  9. Строка не должна быть пустой
    function CheckEmpty(input) {
    if (input.length == 0) {
        console.log("error - cтрока не должна быть пустой")
    return false
    } else {
        console.log("ok - cтрока не пустая")
    }
}
CheckEmpty(input)
//  3. Минимум 5 символов в строке
    function CheckMinLength(input) {
    if (input.length < 5) {
        console.log("error - min 5")
    return false
    } else {
        console.log("ok - в строке больше 5 символов")
    }
}
CheckMinLength(input)
//  4. Максимум 64 символа в строке
    function CheckMaxLength(input) {
    if (input.length > 64) {
        console.log("error - max 64") 
    return false
    } else {
        console.log("ok - в строке меньше 64 символов")
    }
}
CheckMaxLength(input)
//  5. В строке должны быть буквы
    function CheckLetter(input) {
    if (/[a-zA-Z]/.test(input)) {
        console.log ("ok - в строке есть буквы")
    } else {
        console.log("error - В строке должны быть буквы")
    return false
    }
}
CheckLetter(input)
//  6. Должна быть хотя бы одна буква в верхнем регистре
    function CheckRegistrLetter(input) {
    if (/[A-Z]/.test(input)) {
        console.log("ok - в строке есть хотя бы одна буква в верхнем регистре")
    } else {
        console.log("error - Должна быть хотя бы одна буква в верхнем регистре")
    return false
    }
}
CheckRegistrLetter(input)
//  7. Должна быть хотя бы одна цифра
    function CheckNumber(input) {
    if (/\d/.test(input)) {
        console.log("ok - в строке есть хотя бы одна цифра")
    } else {
        console.log("error - Должна быть хотя бы одна цифра")
    return false
    }
}
CheckNumber(input)
//  8. Должна быть хотя бы одна @
    function CheckDog(input) {
    if (/@/.test(input)) {
        console.log("ok - в строке есть хотя бы одна @")
    } else {
        console.log("error - Должна быть хотя бы одна @")
    }
}
CheckDog(input)
