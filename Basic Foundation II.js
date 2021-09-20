console.log(big())
function big() {
    var bigArr = [-1,3,5,-5];
    for (var i = 0; i <=bigArr.length; i++) {
        if (bigArr[i] > 0) {
            bigArr[i] = "big";
        }
    } return bigArr;
}

function lowAndHigh(arr) {
    var high = arr[0];
    var low = arr[0];
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
            }
        if (arr[i] > high) {
            high = arr[i];
            }
        }
        console.log(low)
        return high
}
var x = [4,3,5,1];
console.log(lowAndHigh(x));

var a = [1,2,3,4,5];
console.log(printOneReturnAnother(a))
function printOneReturnAnother (arr) {
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++) {
        if (i%2 !== 0) {
            return[i];
        }
    }
}


console.log(doubledArray())
function doubledArray() {
    var p = [1,2,3];
    var q = [];
    for (var i = 0; i <p.length;i++) {
        q[i]= p[i] * 2; 
    }
    return q
}

console.log(countPositives())
function countPositives() {
    var posArray = [-1,1,1,1];
    var posNum = 0;
    for (var i = 0; i <= posArray.length; i++) {
        if (posArray[i] > 0) {
            posNum += 1;
        }
    }
    posArray.pop();
    posArray.push(posNum);
    return posArray
}

console.log(threeInARow())
function threeInARow() {
    var threeRow = [-2,-2,-2,1,3,-1,-3,8];
    for (var i = 0; i <=threeRow.length;i++){
    if (threeRow[i] % 2 === 1) {
        if (threeRow[i+1]%2 === 1) {
            if (threeRow[i+2]%2 === 1) {
                console.log("That's odd!");

            }
        }
    }
    if (threeRow[i] % 2 === 0) {
        if(threeRow[i+1] % 2 === 0) {
            if(threeRow[i+2] % 2 === 0) {
                console.log("Even more so!")
            }
        }
    }
    }
}

console.log(iTheSeconds())
function iTheSeconds () {
    var arr = [0,0,0,0,0,0];
    for (var i = 0; i <= arr.length; i++) {
        if (i % 2 === 1) {
            arr[i]+=1;
        }
    }
    return arr
}

console.log(previousLengths())
function previousLengths() {
    var lengths = ["hello","dojo","awesome"];
    for (var i = lengths.length - 1; i > 0; i--) {
        lengths[i] =  lengths[i-1].length;
    }
    return lengths;
}

console.log(add7())
function add7() {
    var orig = [1,2,3];
    var addSeven = [];
    for (var i = 0; i <orig.length; i++) {
        addSeven[i] = orig[i] + 7;
    }
    return addSeven
}

function reverseArray(arr) {
    for (let i = 0; i <arr.length/2; i++) {
        [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]];
    }
    return arr;
}
console.log(reverseArray([1,2,3,4,5]))

function allNeg(arr) {
    for(var i = 0; i <arr.length; i++) {
        if (arr[i] > 0) {
            arr[i]= arr[i] * -1;
        }
    }
    return arr
}
console.log(allNeg([1,-2,-3,-4,5]))

function alwaysHungry (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
        }
        else {
            sum++;
        }
    }
        if(sum == arr.length) {
            console.log("i'm hungry");
        }
    }
    var x = ["food",1,2,"food"];
    var y = [1,2,3,4];
console.log(alwaysHungry(x))
console.log(alwaysHungry(y))

var array = [true,42,"Ada",2,"pizza"];
var nums = [1,2,3,4,5,6];
function swapTowardCenter(arr) {
    var  temp = arr[0];
    arr[0]= arr[arr.length-1];
    arr[arr.length-1] = temp;
    var temp2 = arr[2]
    arr[2] = arr[arr.length-3];
    arr[arr.length-3] = temp2;
    return arr;
}
console.log(swapTowardCenter(array))
console.log(swapTowardCenter(nums))

function scaleTheArray(arr,num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i]= arr[i]* num;
    }
    return arr
}
var arr = [1,2,3];
var num = 3;
console.log(scaleTheArray(arr,num))