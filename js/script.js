const array = [1, 2, 3, 4, 5, 6, 7, 5 , 5 , 5];
removeElement(array, 5);
console.log(array);

function removeElement(array, num){
    for(let i = 0; i < array.length; i++){
        if (array[i] === num){
            array.splice(i, 1);
            i--;
        }
    }
}