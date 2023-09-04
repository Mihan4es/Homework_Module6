function startFn (numOne, numTwo) {
    let current = numOne;
    let timerId = setInterval(function () {
        console.log(current)
        if (current == numTwo) {
            clearInterval(timerId);
        }else {
            current = current + 1;
        }
    }, 1000);
}
startFn(5, 15)


// const result = 5**5;
// return result;
}

// exponentiationArrowFunction (5, 5)

// console.log(result)