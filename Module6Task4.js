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

