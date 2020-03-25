const initArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //[ 1, 3, 5, 7, 9, 2, 6, 10, 8, 4 ]
const resultArray = [];
let i = 0;
while(1) {
    if(initArray.length === 1) {
        resultArray.push(initArray[0]);
        break;
    }
    const tmp = initArray.splice(i,1);
    resultArray.push(tmp[0]);
    if(!initArray.length) break;
    i+=1;
    if(i >= initArray.length) i -= initArray.length;
}
console.log(resultArray);
