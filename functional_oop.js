// Amazon shopping
const user={
    name:'kim',
    active:true,
    cart:[],
    purchase:[]
}
const amazonHistory=[]
const compose1=(f,g)=>(...args)=>f(g(...args))
purchaseItem(
    emptyCart,
    buyItem,
    applyTax,
    addItemToCart
)(user, {name:'laptop', price:400})

const  purchaseItem=(...fns)=>fns.reduce(compose1)

function addItemToCart(user, item){
    amazonHistory.push(user)
    const updatedCart=user.cart.concat(item)
    return Object.assign({}, user, {cart:updatedCart})
}

function applyTax(user){
    amazonHistory.push(user)

    const {cart}=user
    const taxRate=1.3
    const updatedCart=cart.map(item=>{
        return {
            name:item.name,
            price:item.price
        }
    })
    Object.assign({}, user, {cart:updatedCart})
}
function buyItem(user){
    amazonHistory.push(user)

    Object.assign({}, user, {purchase:user.cart})
}
function emptyCart(user){
    amazonHistory.push(user)

    Object.assign({}, user, {cart:[]})
}

function refundItem(user){

}
function getUserState(user){

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
// Immutability
const obj={name:'andrei'}
function clone(obj){
    return {...obj} //pure function
}

function updateName(obj){
    const obj2=clone(obj)
    obj2.name='nana'
    return obj2
}
obj.name='nana'
const updatedObj=updateName(obj)
console.log(obj, updatedObj)
// Higher order functions
const hof=()=>{
    function a(){
        return 5
    }
}
hof(function a(x){return x})

// Closure
const closure=function(){
    let count=0
    function increment(){
        return count++
    }
}
closure()
const incrementFn=closure()
incrementFn()
incrementFn()
incrementFn()
incrementFn()

// Currying
const multiply=(a,b)=>a*b

multiply(3,4)
const curriedMultiply=(a)=>(b)=>a*b
curriedMultiply(4)(6)

// Partial apllication
const partialMultiplyBy5=multiply.bind(null, 5)




// caching 
function addTo80(num){
    console.log('Long time')
    return num +80
}
addTo80(5)
addTo80(5)

let cache={}
function memoizedAddTo80(num){
if(num in cache){
    return cache.num
}else{
    console.log('long time')
    cache.num=num+80
    return cache.num
}

}
// Compose
const compose=(f, g)=> (data)=>f(g(data))
const multiplyBy3=(num)=> num*3
const makePositive=(num)=>Math.abs(num)
const multiplyBy3AndAboslute=compose(multiplyBy3, makePositive)
multiplyBy3AndAboslute(-50)

// Arity, It simply means the number of parameters a function takes
