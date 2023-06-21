//homework 11
/*
    Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
    Наприклад:
        const array = [1, 2, 3, 4, 5, 6, 7];
        removeElement(array, 5);
        console.log(array);
    // Результат: [1, 2, 3, 4, 6, 7] 
*/
const array = [1, 2, 3, 4, 5, 6, 7, 5 , 5 , 5];
removeElement(array, 5);
console.log(`Homework 11: ${array}`);

function removeElement(array, num){
    for(let i = 0; i < array.length; i++){
        if (array[i] === num){
            array.splice(i, 1);
            i--;
        }
    }
}
//homework 12
/*
    Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із набору characters довжиною length.
    Наприклад:
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const key = generateKey(16, characters);
    console.log(key); // eg599gb60q926j8i 
*/
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
generateKeyRec(16, characters);
console.log(`Homework 12: ${key}`); // eg599gb60q926j8i
console.log(`Homework 12 with recurtion: ${generateKeyRec(16, characters)}`);
console.log(`Homework 12 with different letter cases: ${generateStrongerKey(16, characters)}`);
function generateKey(len, characters){
    let result = '';
    const charArray = characters.split('');
    for(let i = 0; i < len; i++){
        let randIndex = Math.floor(Math.random()*charArray.length);
        result += charArray[randIndex];
    }
    return result;
}
function generateKeyRec(len, characters){
    if (len === 0) return '';
    const charArray = characters.split('');
    let randIndex = Math.floor(Math.random()*charArray.length);
    return charArray[randIndex] + generateKeyRec(len-1, characters);
}
function generateStrongerKey(len, characters){
    if (len === 0) return '';
    const charArray = characters.split('');
    let randIndex = Math.floor(Math.random()*charArray.length);
    let randBool = Math.round(Math.random());
    let letter = charArray[randIndex];
    if(randBool) letter = letter.toUpperCase();
    return  letter + generateStrongerKey(len-1, characters);
}

//homework 13
/*
    Реалізувати рекурсивну функцію, яка зводить число в ступінь.
    Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію
    Ступінь передається як другий аргумент у функцію
    pow(num, degree)
*/

let twoInFifthDegree = pow(2, 5);
console.log(`Homework 13: ${twoInFifthDegree}`)
function pow(num, degree){
    if (degree === 0) return 1;
    return num * pow(num, --degree);
}