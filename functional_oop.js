// Amazon shopping
const user={
    name:'kim',
    active:true,
    cart:[],
    purchase:[]
}
// Implement a cart  feature
// 1. Add items to cart.
// 2.Add 3% tax to item in cart
// 3. Buy item cart--> purchases
// 4. Empty cart 
// Bonus
// Accept refunds
// Track user history



const array=[1,2,3]
function mutateArray(arr){
   arr.pop()
}
function removeLastItem(arr){
    const newArray=[].concat(arr)
    newArray.pop()
    return newArray 
}
function multiplyBY2(arr){
    return arr.map(item=>item*2)
}
multiplyBY2(array)
mutateArray(array)
mutateArray(array)
function mutateArrayNew(arr){
    arr.forEach(arr=>arr.push(1))
 }
 mutateArrayNew(array)
 mutateArrayNew(array)

//  referential transparency
function b(num){
    return num *2
}
b(5)
function a(num, num1){
    return num*num1
}
a(3,5)

// Idempotence ie giving the same input
function noGood(num){
    return Math.random(num)
}
noGood(4)

// Imperative vs declaarative
for(let i=0; i<100; i++){
    console.log(i)
}
[1,2,3].forEach(item=>{
    console.log(item)
})
