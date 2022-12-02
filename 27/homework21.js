// 

// Task1

function sayHello(name) {
    return `Привет, ${name}!`;
}

// Task2

function returnNeighboringNumbers(argument) {
    return arr[argument-1, argument, argument+1 ];
}

// Task3

function getMathResult(arg1, arg2) {
    if(typeof(arg2)!=='number' || arg2<=0){
        return arg1;
    }
    let str='';
    for(let i =1; i<=arg2; i++){
        if(i==arg2){
            str= str + (arg1*i);
        } else str = str + arg1 * i + "---";

    }

}