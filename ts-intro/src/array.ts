/**
     ✅ 6. Array — Questions
     
    1. Create an array of strings: ["Apple", "Banana", "Mango"] and print each item.
    
    
    2. Add a new fruit to the array and print the updated array.
    
    
    3. Create an array of numbers and find the maximum number.
 */


const fruits: string[] = ["Apple", "Banana", "Mango"]
fruits.forEach(x => {
    console.log(x)
})

fruits.push("Papaya")
console.log("updated Array:")
fruits.forEach(x => {
    console.log(x)
})


const nums: number[] = [1,2,3,4,5]
function findLargestNum(arr: number[]): number {
    return arr.reduce((r, x) => {
        if (x > r) {
            return x
        }

        return r
    })
}
console.log(`largest in ${arr} is ${findLargestNum(arr)}`)