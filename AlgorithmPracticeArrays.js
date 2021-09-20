var testArr = [6,3,5,1,2,4]; 
var sum = 0;
for (var i = 0;i<testArr.length;i++) {
    console.log(testArr[i]);
    sum = testArr[i]+sum;
    console.log(sum);
}

for (var j=0;j < testArr.length; j++) {
    testArr[j]= testArr[j] * j;
    console.log(testArr[j]);
}

