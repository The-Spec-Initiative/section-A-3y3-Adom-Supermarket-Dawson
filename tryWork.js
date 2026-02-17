// Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.

// Given an array of integers numbers, your task is to check all the triples of its consecutive elements for being a zigzag. More formally, your task is to construct an array of length numbers.length - 2, where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.
let triple = []
function zig(numArr){
    for (let i = 0; i < numArr.length; i++){
        let a = numArr[i];
        let b = numArr[i + 1];
        let c = numArr[i + 2];

        if((a < b && b > c) || (a > b && b < c)){
            console.log("found")
            triple.push(1)
        }
        else{
            console.log("sorry")
            triple.push(0)
        }
    }
}
const subs = zig([1,3,2,2,4,6,7,8,9,0])
console.log(subs)
console.log(triple)

// 24 = 2×3×4
// 12 = 1×3×4
// 8  = 1×2×4
// 6  = 1×2×3
function mut(num){
    let ans = []
    for(let i =0; i < num.length - 2; i++){
        let a = num[i]
        let b = num[i + 1];
        let c = num[i + 2];

        let answer = a * b *c;
        ans.push(answer)
    }
    return ans
}
console.log(mut([1,2,3,4]))