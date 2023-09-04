function twoSum (num) {
    return function (number) {
        return num + number
    }
}

const result = twoSum(7)

console.log(result(7))
console.log(twoSum (5)(2))
