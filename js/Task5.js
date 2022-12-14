/*  Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
    Иначе говоря, умножает x на себя n раз и возвращает результат.
    Используйте Arrow Function синтаксис.
    Протестируйте функцию на любых значениях и выведите результат в консоль.
*/

const Exponentiation = (x, n) =>{
    let m = x;
    for(let i = 2; i <= n; i = i + 1){
        x = x * m;
    }
    return x;
}

console.log(Exponentiation(2, 4));

// 2 Вариант с использованием обьекта Math
const Exp = (x, n) => Math.pow(x, n);
console.log(Exp(2, 5));