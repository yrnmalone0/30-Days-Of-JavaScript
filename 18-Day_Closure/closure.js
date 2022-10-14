// Create a closure which has one inner function
function outerFunction() {
    let sum = 0;
    function innerFunction() {
        for (i=0; i <= 12; i++){
            sum += i;
        }
        return sum;
    }
    return innerFunction;
}

const newResult = outerFunction();
console.log(newResult())

// Create a closure which has three inner functions
function outerFunction() {
    let sum = 0;
    function innerFunction1() {
        for (i=0; i <= 12; i++){
            sum += i;
        }
        return sum;
    }

    function innerFunction2() {
        for (i=0; i <= 10; i--){
            sum -= i;
        }
        return sum;
    }

    function innerFunction3() {
        for (let i=0; i < 5; i++){
            console.log(i);
        }
        return i;
    }

    return {
        innerFunction1:innerFunction1(),
        innerFunction2:innerFunction2(),
        innerFunction3:innerFunction3()
    }
}

const Result = outerFunction();
console.log(Result())