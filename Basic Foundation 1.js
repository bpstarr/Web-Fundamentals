function createArr(num) {
    var numArr = [];
    for (var i = 0;i <= num;i++) {
        numArr.push(i);
    }
    return numArr;
}   
var x = createArr(255);

function getEven() {
    let sum = 0;
    for (let l = 0; l <= 1000; l=l+2) {
            if(l % 2 === 0) {
                sum += l;
                sum + 1;
            }
        }
        return(sum);
    }

console.log(getEven())
getOddSum()

function getOddSum() {
    let sumOdd = 0;
    for (let i = 1; i <= 5000; i+=2) {
        sumOdd +=i;
    }
    console.log(sumOdd)
    return sumOdd;

}

console.log(sumOfArray())
function sumOfArray() {
    var arr = [1,2,3];
    var sum = 0;
    for (var i = 0; i <= 2; i++) {
        sum+=arr[i];
    }
    return sum;
}

console.log(max())
function max() {
    var maxArray = [-3,3,5,7];
    var biggest = maxArray[0];
    for (var i = 0; i <= maxArray.length; i++)
    if (biggest < maxArray[i]) {
        biggest = maxArray[i]
    }
    return biggest;
}

console.log(avg())
function avg() {
    var array = [1,3,5,7,20];
    var avg = 0;
    for (var i = 0; i <=4; i++) {
    avg += array[i];
    }
    return avg;
}

console.log(oddArray())
function oddArray() {
    var odds = [];
    for (var i = 0; i < 50; i++)
    if(i%2 === 1) {
        odds.push(i)
    }
    return odds;
}

console.log(greaterThanY())
function greaterThanY (){
    var arr1 = [1,3,5,7];
    var arr2 = [];
    
    for (var i = 0; i <= 4; i++)
        if(arr1[i] > 3) {
            arr2.push(arr1[i]);
        }
        return arr2;
}

console.log(squared())
function squared () {
    var normalArr = [1,5,10,-2];
    var squaredArr = [];
    for (var i = 0; i < normalArr.length; i++) {
        squaredArr.push(normalArr[i] * normalArr[i]);
    }
    return squaredArr;
}

console.log(negatives())
function negatives (){
    negArr = [1,5,10,-2]
    for (var i = 0; i <= negArr.length; i++)
        if (negArr[i] < 0) {
            negArr[i] = 0;
        }
        return negArr;
}

console.log(maxMinAvg())
function maxMinAvg() {
    var arr3 = [1,5,10,-2];
    var max = arr3[0];
    var min = arr3[0];
    var sum = 0;
    for (var i = 0; i <=3;i++) {
        if(arr3[i]>max){
            max = arr3[i];
        }
        if(arr3[i]<min) {
            min = arr3[i];
        }
        sum+= arr3[i];
    }
    var avg = sum/arr3.length;
    var arr4 = [max,min,avg];
    return arr4;
}

console.log(swapValues()) 
function swapValues(){
    var swapArr = [1,5,10,-2];
    var temporary = swapArr[0];
    swapArr[0] = swapArr[swapArr.length - 1];
    swapArr[swapArr.length-1] = temporary;
    return swapArr;
}

console.log(negToString())
function negToString (){
    var arr5 = [-1,-3,2];
    for (var i = 0; i <= arr5.length; i++)
        if(arr5[i] < 0) { 
            arr5[i]= "Dojo";
        }
        return arr5;
}
